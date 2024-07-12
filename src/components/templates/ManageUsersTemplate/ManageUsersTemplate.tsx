import RoleForm from '../../organisms/Forms/Role/RoleForm'
import PermissionForm from '../../organisms/Forms/Permission/PermissionForm'
import Modal from '../../molecules/modal/Modal'

const ManageUsersTemplate = () => {
    return (
        <>
            <Modal textButton='Registrar rol' title='Registrar rol'><RoleForm /></Modal>
            <Modal textButton='Registrar rol' title='Registrar permiso'><PermissionForm /></Modal>
        </>

    )
}

export default ManageUsersTemplate