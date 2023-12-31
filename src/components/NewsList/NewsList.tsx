import withSkeleton from '../../helpers/HOCs/withSkeleton'
import { INews } from '../../interfaces'

import NewsItem from '../NewsItem/NewsItem'

import styles from './NewsList.module.scss'

interface Props {
  news?: INews[]
}

const NewsList = ({ news }: Props) => {
  return (
    <ul className={styles.list}>
      {news?.map((item) => {
        return (
          <NewsItem
            key={item.id}
            item={item}
          />
        )
      })}
    </ul>
  )
}

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 'item', 10)

export default NewsListWithSkeleton
