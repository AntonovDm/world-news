import { formatTimeAgo } from '../../helpers/formatTimeAgo'
import { INews } from '../../interfaces'

import styles from './NewsInfo.module.scss'

interface Props {
  item: INews
  type: 'banner' | 'item'
}

const NewsInfo = ({ item, type }: Props) => {
  return (
    <>
      <h3 className={styles[`title-${type}`]}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </>
  )
}

export default NewsInfo
