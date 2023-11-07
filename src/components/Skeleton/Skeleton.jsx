import styles from './Skeleton.module.scss'

const Skeleton = ({ count, type }) => {
  const className = type === 'banner' ? styles.banner : styles.item

  return (
    <>
      {count > 1 ? (
        <ul className={styles.list}>
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
