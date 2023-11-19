import { useDarkMode } from '../../context/DarkModelContext'
import { formatDate } from '../../helpers/formatDate'
import { formatTime } from '../../helpers/formatTime'
import { useCurrentDate } from '../../helpers/hooks/useCurrentDate'
import { ButtonIcon } from '../ButtonIcon/ButtonIcon'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2'

import styles from './Header.module.scss'

const Header = () => {
  const { currentDate } = useCurrentDate()
  const { time, greeting } = formatTime(currentDate)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <header className={styles.header}>
      <div className={styles.box}>
        <h1 className={styles.title}>WORLD NEWS</h1>

        <div className={styles.greeting}>
          <h2 className={styles['sub-title']}>{greeting}</h2>
          <ButtonIcon onClick={toggleDarkMode}>
            {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
          </ButtonIcon>
        </div>
      </div>

      <p className={styles.time}>{time}</p>
      <p className={styles.date}>{formatDate(currentDate)}</p>
    </header>
  )
}

export default Header
