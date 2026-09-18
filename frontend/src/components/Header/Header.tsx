"use client";

import Stats from "@/components/Stats/Stats";
import Account from "@/components/Account/Account";
import styles from "./Header.module.css";
import Link from "next/link"
import { useEffect, useState } from "react";

export default function Header() {

  

  return (
    <div className={styles["header-container"]}>
      <div className={styles["stats-account-div"]}>
        <Stats />
        <Link href="/login">
          <Account />
        </Link>
      </div>
    </div>
  );
}
