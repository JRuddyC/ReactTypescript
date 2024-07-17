import React from 'react'
import Card from '../../atoms/card/Card'
import CardHeader from '../../atoms/cardHeader/CardHeader'
import Subtitle from '../../atoms/subtitle/Subtitle'
import CardBody from '../../atoms/cardBody/CardBody'
import CardImage from '../../atoms/cardImage/CardImage'
import Image from '../../../assets/img/deadwing.jpg'
import InfoField from '../../molecules/InfoField/InfoField'
import { useSelector } from 'react-redux'
import { selectPeople } from '../../../store/slices/peopleSlice'
import CardActions from '../../atoms/cardActions/CardActions'
import Button from '../../atoms/button/Button'
import CardFooter from '../../atoms/cardFooter/CardFooter'
import Paragraph from '../../atoms/paragraph/Paragraph'
import Separator from '../../atoms/separator/Separator'

const text = "para ver la informacion de la persona seleccione la opción ver en un registro de la tabla"

const CardInfoPerson: React.FC = () => {
    const { personSelected } = useSelector(selectPeople)
    const { id, name, surname, age, ci, phone } = personSelected
    return (
        <Card size="medium">
            <CardImage srcImage={Image} />
            <CardHeader>
                <Subtitle text='Info' />
            </CardHeader>
            <Separator direction="horizontal" />
            <CardBody>
                <InfoField title={"name"} value={name} />
                <InfoField title={"surname"} value={surname} />
                <InfoField title={"ci"} value={ci} />
                <InfoField title={"age"} value={age} />
                <InfoField title={"phone"} value={phone} />
            </CardBody>
            {
                id ? (
                    <CardActions>
                        <Button>see more</Button>
                        <Button>asigment user</Button>
                    </CardActions>
                ) : <></>
            }
            <Separator direction="horizontal" />
            <CardFooter>
                <Paragraph text={text} size='small' />
            </CardFooter>
        </Card>
    )
}

export default CardInfoPerson