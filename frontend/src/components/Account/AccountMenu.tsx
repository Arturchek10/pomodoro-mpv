"use client";

import styles from "./AccountMenu.module.css";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";

export default function AccountMenu() {
  const darkTooltip = {
    tooltip: {
      sx: {
        backgroundColor: "#1f1f1f",
        color: "#fff",
      },
    },
  };

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={styles["account-menu-container"]}>
      <Tooltip slotProps={darkTooltip} title="имя пользователя">
        <div className={styles["border-div"]}>
          <div className={styles["account-circle"]}>
            <img src="/images/account-img.jpg" alt="image" />
          </div>
        </div>
      </Tooltip>

      <div
        className={styles["account-dropdpown-container"]}
        
      >
        <Tooltip slotProps={darkTooltip} title="accounts">
          <div className={styles["svg-acc-container"]}>
            <img
              className={styles["svg-accounts"]}
              src="/svg/arrow-bottom.svg"
              alt="accounts"
              onClick={() => setIsOpen((prev) => !prev)}
            />
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
