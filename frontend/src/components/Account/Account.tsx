import styles from "./Account.module.css";
import Tooltip from "@mui/material/Tooltip";

type AccountProps = {
  onClick: () => void
}

export default function Account() {
  return (
    <Tooltip title="имя пользователя">
      <div className={styles["border-div"]}>
        <div className={styles["account-circle"]}>
          <img src="/images/account-img.jpg" alt="image" />
        </div>
      </div>
    </Tooltip>
  );
}
