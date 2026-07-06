"use client";

import Stats from "@/components/Stats/Stats";
import Account from "@/components/Account/Account";
import styles from "./Header.module.css";
import Auth from "../Auth/Auth";
import { useEffect, useState } from "react";

export default function Header() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  useEffect(() => {
    console.log("isAuthOpen:", isAuthOpen);
  }, [isAuthOpen]);
  return (
    <div className={styles["header-container"]}>
      <div className={styles["stats-account-div"]}>
        <Stats />
        <Account onClick={() => setIsAuthOpen(true)} />
      </div>
      <div className={styles["auth-modal-container"]}>
        {isAuthOpen && <Auth />}
      </div>
    </div>
  );
}
