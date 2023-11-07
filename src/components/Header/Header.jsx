import { formatDate } from '../../helpers/formatDate'
import { formatTime } from '../../helpers/formatTime'
import { useCurrentDate } from '../../hooks/useCurrentDate'

import styles from './Header.module.scss'

const Header = () => {
  const { currentDate } = useCurrentDate()
  const { time, greeting } = formatTime(currentDate)

  return (
    <header className={styles.header}>
      <div className={styles.box}>
        <h1 className={styles.title}>WORLD NEWS</h1>
        <p className={styles.date}>{formatDate(currentDate)}</p>
      </div>
      <div className={styles.box}>
        <h2>{greeting}</h2>
        <p className={styles.time}>{time}</p>
      </div>
    </header>
  )
}

export default Header
