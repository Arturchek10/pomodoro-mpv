"use client";

import Stats from "@/components/Stats/Stats";
import AccountMenu from "@/components/Account/AccountMenu";
import styles from "./Header.module.css";
import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";

import { useEffect, useState } from "react";

export default function Header() {
  const darkTooltip = {
    tooltip: {
      sx: {
        backgroundColor: "#1f1f1f",
        color: "#fff",
      },
    },
  };

  return (
    <div className={styles["header-container"]}>
      <div className={styles["stats-account-div"]}>
        <Stats />
        <div className={styles["acc-container"]}>
          {/* <Link href="/login"> */}
            <AccountMenu />
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}
