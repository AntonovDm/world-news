import { formatDate } from '../../helpers/formatDate'
import { formatTime } from '../../helpers/formatTime'
import { useCurrentDate } from '../../helpers/hooks/useCurrentDate'

import styles from './Header.module.scss'

const Header = () => {
  const { currentDate } = useCurrentDate()
  const { time, greeting } = formatTime(currentDate)

  return (
    <header className={styles.header}>
      <div className={styles.box}>
        <h1 className={styles.title}>WORLD NEWS</h1>
        <h2 className={styles['sub-title']}>{greeting}</h2>
      </div>

      <p className={styles.time}>{time}</p>
      <p className={styles.date}>{formatDate(currentDate)}</p>
    </header>
  )
}

export default Header
