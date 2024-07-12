import React from 'react'
import IProps from './type/IProps'
import Styles from './Styles.module.scss'

const CardInfo: React.FC<IProps> = (props: IProps) => {
  const { title, info } = props
  return (
    <div className={Styles.card}>
      <div className='card-title'>
        {title}
      </div>
      <div className={Styles['card-body']}>
        {info}
      </div>
    </div>
  )
}

export default CardInfo