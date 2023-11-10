import { getLatestNews } from '../../api/apiNews'
import { useFetch } from '../../helpers/hooks/useFetch'

import BannersList from '../BannersList/BannersList'

import styles from './LatestNews.module.scss'

const LatestNews = () => {
  const { isLoading, data } = useFetch(getLatestNews)

  return (
    <section className={styles.section}>
      <BannersList
        banners={data && data.news}
        isLoading={isLoading}
      />
    </section>
  )
}

export default LatestNews
