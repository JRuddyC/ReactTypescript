import React from 'react'
import ProfileInfo from '../../organisms/profileInfo/ProfileInfo'
import AdminInfo from '../../organisms/adminInfo/AdminInfo'
import Styles from './Styles.module.scss'

const ProfileTemplate: React.FC = () => {
    return (
        <div className={Styles.profile}>
            <ProfileInfo />
            <AdminInfo />
        </div>
    )
}

export default ProfileTemplate