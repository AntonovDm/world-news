import { useEffect, useState } from 'react'
import { getNews } from '../../API/apiNews'

import NewsBanner from '../../components/NewsBanner/NewsBanner'
import NewsList from '../../components/NewsList/NewsList'

import styles from './Main.module.scss'

const Main = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews()
        setNews(response.news)
      } catch (error) {
        console.log(error)
      }
    }
    fetchNews()
  }, [])

  return (
    <main className={styles.main}>
      {news.length > 0 && <NewsBanner item={news[0]} />}
      <NewsList news={news} />
    </main>
  )
}

export default Main