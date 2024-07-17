import React, { useEffect, useState } from 'react'
import Button from '../../atoms/button/Button'
import Modal from '../../molecules/modal/Modal'
import PersonEditForm from '../Forms/Person/PersonEditForm'
import Table from '../../molecules/table/Table'
import Pagination from '../../molecules/pagination/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { selectPeople } from '../../../store/slices/peopleSlice'
import { AppDispatch } from '../../../store'
import CellOptions from '../../atoms/cellOptions/CellOptions'
import { fetchGetPeople, fetchGetPersonById } from '../../../store/thunks/peopleThunks'
import { selectGlobal, setCurrentPage } from '../../../store/slices/globalSlice'

const header = { name: "name", surname: "surname", ci: "ci", age: "age", phone: "phone" }

const TablePeople: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>()
    const { currentPageTable } = useSelector(selectGlobal)
    const { rows, count } = useSelector(selectPeople)
    const [page, setPage] = useState<number>(currentPageTable)

    const pages = Math.ceil(count / 10)

    const pagination = {
        page: page,
        limit: 10
    }

    useEffect(() => {
        dispatch(fetchGetPeople({ pagination }))
        dispatch(setCurrentPage(page))
    }, [page])

    const Pages = () => {
        return (
            <>
                {
                    [...Array(pages)].map((_, index) => (
                        <Button onClick={() => setPage(index + 1)} key={index}>{index + 1}</Button>
                    ))
                }
            </> 
        )
    }

    const handleSee = (id: number | null) => {
        dispatch(fetchGetPersonById({ id }))
    }

    const options = rows.map((item) => (
        <CellOptions>
            <Button onClick={() => handleSee(item.id)}>Ver</Button>
            <Modal textButton="Edit" title="Edit person"><PersonEditForm item={item} /></Modal>
            <Button onClick={() => console.log("remover", item.id)}>remover</Button>
        </CellOptions>
    ))
    
    return (
        <>
            {
                rows && (
                    <>
                        <Table size={"medium"} options menuOptions={options} variant="primary" title="Lista de personas" columns={header} rows={rows} />
                        <Pagination >{<Pages />}</Pagination>
                    </>
                )
            }
        </>
    )
}

export default TablePeople