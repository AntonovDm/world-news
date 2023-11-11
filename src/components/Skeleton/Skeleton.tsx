import { TypeDirection, TypeSteleton } from '../../interfaces'
import styles from './Skeleton.module.scss'

interface Props {
  type?: TypeSteleton
  count?: number
  direction?: TypeDirection
}

const Skeleton = ({
  count = 1,
  type = 'banner',
  direction = 'column',
}: Props) => {
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
