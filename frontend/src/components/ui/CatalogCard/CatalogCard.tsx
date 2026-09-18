import Link from "next/link";
import styles from "./CatalogCard.module.css";

type Props = {
  themeId: string;
  imageSrc: string;
  themeName: string;
};

export default function CatalogCard({ themeId, imageSrc, themeName }: Props) {
  return (
    <div className={styles["card-container"]}>
      <Link href={`/auth/catalog/${themeId}`}>
        <img
          src={imageSrc}
          alt="catalog card photo"
          className={styles["theme-img"]}
        />
      </Link>
    </div>
  );
}
