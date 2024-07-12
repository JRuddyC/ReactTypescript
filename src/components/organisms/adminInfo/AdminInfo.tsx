import React from 'react'
import Subtitle from '../../atoms/subtitle/Subtitle'
import CardInfo from '../../molecules/cardInfo/CardInfo'
import InfoRoles from '../InfoRoles/InfoRoles'

const AdminInfo: React.FC = () => {
    return (
        <CardInfo
            title={<Subtitle text='Roles' />}
            info={<InfoRoles />}
        />
    )
}

export default AdminInfo