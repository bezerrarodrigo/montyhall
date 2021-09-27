import styles from './styles.module.css'
import PortaModel from '../../model/portaModel'

interface PortaProps {
  porta: PortaModel
}

export default function Porta(props: PortaProps) {

  const { porta } = props


  const isSelecionada = porta.selecionada ? styles.selecionada : '';

  return (
    <div className={styles.area}>
      <div className={`${styles.estrutura} ${isSelecionada}`}>
        <div className={styles.porta}>
          <div className={styles.numero}>{porta.numero}</div>
          <div className={styles.macaneta}></div>
        </div>
      </div>
      <div className={styles.piso}>
      </div>
    </div>
  )
}
