import styles from './styles.module.css'

export default function Porta(props) {
  return (
    <div className={styles.area}>
      <div className={styles.estrutura}>
        <div className={styles.porta}>
          <div className={styles.numero}>3</div>
          <div className={styles.macaneta}></div>
        </div>
      </div>
      <div className={styles.piso}>
      </div>
    </div>
  )
}
