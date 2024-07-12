import React from 'react'
import { useUserRoleDetails } from '../../../hooks/useUserRoleDetails'
import Styles from './Styles.module.scss'
import InfoField from '../../molecules/InfoField/InfoField'
const InfoRoles: React.FC = () => {
    const { roles } = useUserRoleDetails()
    return (
        <div className={Styles['info-section']}>
            {
                roles?.map((item, index) => (
                    <div key={index}>
                        <InfoField title={index + 1} value={item.nameRole} />
                    </div>
                ))
            }
        </div>
    )
}

export default InfoRoles