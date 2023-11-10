import { formatTimeAgo } from '../../helpers/formatTimeAgo'

import styles from './NewsInfo.module.scss'

const NewsInfo = ({ item, type }) => {
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
