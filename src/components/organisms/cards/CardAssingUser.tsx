import React from 'react'
import Card from '../../atoms/card/Card'
import CardHeader from '../../atoms/cardHeader/CardHeader'
import Subtitle from '../../atoms/subtitle/Subtitle'
import CardBody from '../../atoms/cardBody/CardBody'
import Paragraph from '../../atoms/paragraph/Paragraph'

const text = "para asignar un usuario, seleccione la opcion de asignar usuario a la persona y abajo se proporcionara las credenciales para la persona"

const CardAssingUser: React.FC = () => {
    return (
        <Card size="medium">
            <CardHeader>
                <Subtitle text='assign user' />
            </CardHeader>
            <CardBody>
                <Paragraph text={text} />
            </CardBody>
        </Card>
    )
}

export default CardAssingUser