import { formatTimeAgo } from '../../helpers/formatTimeAgo'

import styles from './NewsItem.module.scss'

const NewsItem = ({ item }) => {
  const imgStyle = item.image !== 'None' && `url(${item.image})`

  return (
    <li className={styles.item}>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: imgStyle }}
      ></div>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  )
}

export default NewsItem
