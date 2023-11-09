import { getNews } from '../../api/apiNews'
import { useDebounce } from '../../helpers/hooks/useDebounce'
import { useFetch } from '../../helpers/hooks/useFetch'
import { useFilters } from '../../helpers/hooks/useFilters'
import { PAGE_SIZE } from '../../utils/const'

import NewsByFilters from '../../components/NewsByFilters/NewsByFilters'
import LatestNews from '../../components/LatestNews/LatestNews'

import styles from './Main.module.scss'

const Main = () => {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: '',
  })

  const debouncedKeywords = useDebounce(filters.keywords, 1500)

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  })

  return (
    <main className={styles.main}>
      <LatestNews
        isLoading={isLoading}
        banners={data && data.news}
      />

      <NewsByFilters
        news={data?.news}
        filters={filters}
        changeFilter={changeFilter}
        isLoading={isLoading}
      />
    </main>
  )
}

export default Main
