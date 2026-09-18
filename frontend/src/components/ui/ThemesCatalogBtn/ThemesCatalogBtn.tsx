import styles from "./ThemesCatalogBtn.module.css"


type ThemesCatalogBtnProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function ThemesCatalogBtn({onClick}: ThemesCatalogBtnProps){
  return (
    <div>
      <button className={styles["btn"]} onClick={onClick}>Themes Catalog</button>
    </div>
  )
}