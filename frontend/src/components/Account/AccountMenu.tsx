"use client";

import styles from "./AccountMenu.module.css";
import Tooltip from "@mui/material/Tooltip";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function AccountMenu() {
  const darkTooltip = {
    tooltip: {
      sx: {
        backgroundColor: "#1f1f1f",
        color: "#fff",
      },
    },
  };

  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;
  // теперь есть:
  // user?.name — имя пользователя.
  // user?.email — email.
  // user?.image — аватар, если он задан.
  // isPending — проверяется ли сессия.


  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/auth/login')
        }
      }
    })
  }

  const handleLogIn = () => {
    router.push("/auth/login")
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    console.log("isOpen", isOpen);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className={styles["account-menu-container"]}>
      <Tooltip slotProps={darkTooltip} title={user?.name}>
        <div className={styles["border-div"]}>
          <Link href="/auth/profile">
            <div className={styles["account-circle"]}>
              {user?.image ? (
                <img src={user.image} alt="avatar" />
              ) : (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#000"
                  strokeWidth="1.91"
                >
                  <circle cx="12" cy="7.25" r="5.73" />
                  <path d="M1.5,23.48l.37-2.05A10.3,10.3,0,0,1,12,13a10.3,10.3,0,0,1,10.13,8.45l.37,2.05" />
                </svg>
              )}
            </div>
          </Link>
        </div>
      </Tooltip>

      <div className={styles["account-dropdpown-container"]}>
        <Tooltip slotProps={darkTooltip} title="accounts">
          <div
            className={`${styles["svg-acc-container"]} ${isOpen ? styles["active"] : ""}`}
            onClick={() => setIsOpen((prev) => !prev)}
          >

            <svg
              className={styles["svg-accounts"]}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="currentColor"
                d="M23.7 8.7 12 20.42.3 8.71l1.4-1.42L12 17.6 22.3 7.3z"
              />
            </svg>
          </div>
        </Tooltip>
        {isOpen && (
          <div className={styles.dropdown}>
            <p>Currently in</p>
            <div className={styles.profile}>
              <div className={styles["account-circle-big"]}>
                {user?.image ? (
                  <img src={user.image} alt="avatar" />
                ) : (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="#000"
                    strokeWidth="1.91"
                  >
                    <circle cx="12" cy="7.25" r="5.73" />
                    <path d="M1.5,23.48l.37-2.05A10.3,10.3,0,0,1,12,13a10.3,10.3,0,0,1,10.13,8.45l.37,2.05" />
                  </svg>
                )}
              </div>
              <div>
                <strong className={styles["first-p"]}>{user?.name}</strong>
                <p className={styles["second-p"]}>Personal</p>
                <p className={styles["second-p"]}>{user?.email}</p>
              </div>
            </div>
            <button className={styles["logout-btn"]} onClick={user ? handleSignOut : handleLogIn}>{user?.name ? "log out" : "log in"}</button>
          </div>
        )}
      </div>
    </div>
  );
}
