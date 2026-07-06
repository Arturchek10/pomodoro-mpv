import styles from "./Account.module.css";
import Tooltip from "@mui/material/Tooltip";

type AccountProps = {
  onClick: () => void
}

export default function Account({onClick}: AccountProps) {
  return (
    <Tooltip title="имя пользователя">
      <div className={styles["border-div"]} onClick={onClick}>
        <div className={styles["account-circle"]}>
          <img src="/images/account-img.jpg" alt="image" />
        </div>
      </div>
    </Tooltip>
  );
}
