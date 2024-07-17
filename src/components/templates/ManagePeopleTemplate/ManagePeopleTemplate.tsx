import Modal from "../../molecules/modal/Modal"
import PersonForm from "../../organisms/Forms/Person/PersonForm"
import Styles from './Styles.module.scss'
import TablePeople from "../../organisms/tablePeople/TablePeople"
import CardInfoPerson from "../../organisms/cards/CardInfoPerson"

const ManagePeopleTemplate = () => {
    return (
        <>
            <div className={Styles['form-section']}>
                <Modal textButton="Person Register" title='Person Register'><PersonForm /></Modal>
            </div>
            <div className={Styles["body-section"]}>
                <div className={Styles["aside-section"]}>
                    <CardInfoPerson />
                </div>
                <div className={Styles["table-section"]}>
                    <TablePeople />
                </div >
            </div>
        </>
    )
}

export default ManagePeopleTemplate