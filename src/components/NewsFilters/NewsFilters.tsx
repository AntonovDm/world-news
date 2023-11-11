import { getCategories } from '../../api/apiNews'
import { useFetch } from '../../helpers/hooks/useFetch'
import { ICategoriesApiResponse, IFilters } from '../../interfaces'

import Categories from '../Categories/Categories'
import Search from '../Search/Search'
import Slider from '../Slider/Slider'

import styles from './NewsFilters.module.scss'

interface Props {
  filters: IFilters
  changeFilter: (key: string, value: string | number | null) => void
}

const NewsFilters = ({ filters, changeFilter }: Props) => {
  const { data: dataCategories } = useFetch<ICategoriesApiResponse, null>(
    getCategories
  )

  return (
    <div className={styles.filters}>
      {dataCategories ? (
        <Slider>
          <Categories
            categories={dataCategories.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              changeFilter('category', category)
            }
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter('keywords', keywords)}
      />
    </div>
  )
}

export default NewsFilters
