import styles from './styles.module.css'

export default function Porta(props) {

  const isSelecionada = props.selecionada ? styles.selecionada : '';

  return (
    <div className={styles.area}>
      <div className={`${styles.estrutura} ${isSelecionada}`}>
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
