import React from 'react'
import InfoField from '../../molecules/InfoField/InfoField'
import { usePersonDetails } from '../../../hooks/usePersonDetails'
import profile from '../../../assets/img/deadwing.jpg'
import Styles from './Styles.module.scss'
const InfoSection: React.FC = () => {

  const { personInfo } = usePersonDetails()

  const { name, surname, ci, age, phone } = personInfo
  return (
    <>
      <div className={Styles['image-section']}>
        <img src={profile} alt="profile" />
      </div>
      <div className={Styles['info-section']}>
        <InfoField title='Nombre' value={name} />
        <InfoField title='Apellido' value={surname} />
        <InfoField title='Cédula de identidad' value={ci} />
        <InfoField title='Edad' value={age} />
        <InfoField title='Contacto' value={phone} />
      </div>
    </>
  )
}

export default InfoSection