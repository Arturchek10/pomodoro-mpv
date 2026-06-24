import Stats from "@/components/Stats/Stats";
import Account from "@/components/Account/Account";
import styles from "./Header.module.css";

export default function Header(){
  return (
    <div className={styles["header-container"]}>
      <Stats />
      <Account />
    </div>
  )
}