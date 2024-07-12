import React from 'react'
import Form from '../../../atoms/form/Form'
import FormField from '../../../molecules/formField/FormField'
import Button from '../../../atoms/button/Button'

const RoleForm: React.FC = () => {
    return (
        <Form>
            <FormField id='role' label='rol' placeholder='Registrar rol' type='text' />
            <Button>Registrar</Button>
        </Form>
    )
}

export default RoleForm