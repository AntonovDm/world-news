import { ReactNode } from 'react'

import styles from './ButtonIcon.module.scss'

interface IProps {
  onClick: () => void
  children: ReactNode
}

export const ButtonIcon = ({ onClick, children }: IProps) => {
  return (
    <button
      className={styles['button-icon']}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
