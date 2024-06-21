import React from 'react'
import { usePersonDetails } from '../../../hooks/usePersonDetails'
import './styles.scss'
import profile from '../../../assets/img/deadwing.jpg'

const ProfileInfo: React.FC = () => {
    const { personInfo } = usePersonDetails()
    const { name, surname, ci, age, phone } = personInfo
    return (
        <div className='card'>
            <div className='image-section'>
                <img src={profile} alt="profile" />
            </div>
            <div className='info-section'>
                <span>
                    Nombre   : {name}
                </span>
                <span>
                    Apellido : {surname}
                </span>
                <span>
                    Cédula de identidad: {ci}
                </span>
                <span>
                    Edad     : {age}
                </span>
                <span>
                    Contacto : {phone}
                </span>
            </div>
        </div>
    )
}

export default ProfileInfo