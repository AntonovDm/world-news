import NewsByFilters from '../../components/NewsByFilters/NewsByFilters'
import LatestNews from '../../components/LatestNews/LatestNews'

import styles from './Main.module.scss'

const Main = () => {
  return (
    <main className={styles.main}>
      <LatestNews />

      <NewsByFilters />
    </main>
  )
}

export default Main
