import styles from './Skeleton.module.scss'

const Skeleton = ({ count, type, direction = 'column' }) => {
  const className = type === 'banner' ? styles.banner : styles.item

  return (
    <>
      {count > 1 ? (
        <ul
          className={
            direction === 'column' ? styles.columnList : styles.rowList
          }
        >
          {[...Array(count)].map((_, index) => (
            <li
              key={index}
              className={className}
            ></li>
          ))}
        </ul>
      ) : (
        <li className={className}></li>
      )}
    </>
  )
}

export default Skeleton
