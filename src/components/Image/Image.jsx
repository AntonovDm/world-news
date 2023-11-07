import imgNone from '../../assets/image/imgNone.jpg'

import styles from './Image.module.scss'

const Image = ({ image }) => {
  const imageView = image !== 'None' ? image : imgNone

  return (
    <div className={styles.wrapper}>
      {image ? (
        <img
          src={imageView}
          alt="news"
          className={styles.image}
        />
      ) : null}
    </div>
  )
}

export default Image
