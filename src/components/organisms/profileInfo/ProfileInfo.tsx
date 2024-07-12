import React from 'react'
import Subtitle from '../../atoms/subtitle/Subtitle'
import InfoSection from '../infoSection/InfoSection'
import CardInfo from '../../molecules/cardInfo/CardInfo'

const ProfileInfo: React.FC = () => {
    return (
        <CardInfo
            title={<Subtitle text='información' align='center' />}
            info={<InfoSection />}
        />
    )
}
export default ProfileInfo