import React from 'react'
import Form from '../../../atoms/form/Form'
import FormField from '../../../molecules/formField/FormField'
import Button from '../../../atoms/button/Button'

const PermissionForm: React.FC = () => {
    return (
        <Form>
            <FormField id='permission' label='permiso' placeholder='Registrar permiso' type='text' />
            <Button>Registrar</Button>
        </Form>
    )
}

export default PermissionForm