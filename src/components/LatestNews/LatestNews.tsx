import { getLatestNews } from '../../api/apiNews'
import { useFetch } from '../../helpers/hooks/useFetch'
import { INewsApiResponse } from '../../interfaces'

import BannersList from '../BannersList/BannersList'

import styles from './LatestNews.module.scss'

const LatestNews = () => {
  const { isLoading, data } = useFetch<INewsApiResponse, null>(getLatestNews)

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Latest news</h2>
      <BannersList
        banners={data && data.news}
        isLoading={isLoading}
      />
    </section>
  )
}

export default LatestNews
