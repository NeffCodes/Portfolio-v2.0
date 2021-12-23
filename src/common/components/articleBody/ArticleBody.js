import styles from "./ArticleBody.module.css"

export default function ArticleBody({ children }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}