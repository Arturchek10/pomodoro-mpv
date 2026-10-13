"use client";

import styles from "./AccountMenu.module.css";
import Tooltip from "@mui/material/Tooltip";
import { useState, useRef, useEffect } from "react";

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
      <Tooltip slotProps={darkTooltip} title="имя пользователя">
        <div className={styles["border-div"]}>
          <div className={styles["account-circle"]}>
            <img src="/images/account-img.jpg" alt="image" />
          </div>
        </div>
      </Tooltip>

      <div className={styles["account-dropdpown-container"]}>
        <Tooltip slotProps={darkTooltip} title="accounts">
          <div
            className={`${styles["svg-acc-container"]} ${isOpen ? styles["active"] : ""}`}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {/* <img
              className={styles["svg-accounts"]}
              src="/svg/arrow-bottom.svg"
              alt="accounts"
            /> */}

            <svg
              className={styles["svg-accounts"]}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="currentColor" d="M23.7 8.7 12 20.42.3 8.71l1.4-1.42L12 17.6 22.3 7.3z" />
            </svg>
          </div>
        </Tooltip>
        {isOpen && (
          <div className={styles.dropdown}>
            <p>Currently in</p>
            <div className={styles.profile}>
              <div className={styles["account-circle-big"]}>
                <img src="/images/account-img.jpg" alt="image" />
              </div>
              <div>
                <strong className={styles["first-p"]}>Artur</strong>
                <p className={styles["second-p"]}>Personal</p>
                <p className={styles["second-p"]}>artur_master13@mail.ru</p>
              </div>
            </div>
            <button className={styles["logout-btn"]}>log out</button>
          </div>
        )}
      </div>
    </div>
  );
}
