import React, { useEffect, useState } from 'react'
import Button from '../../atoms/button/Button'
import Modal from '../../molecules/modal/Modal'
import PersonEditForm from '../Forms/Person/PersonEditForm'
import Table from '../../molecules/table/Table'
import Pagination from '../../molecules/pagination/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGetPeople, selectPeople } from '../../../store/slices/peopleSlice'
import { AppDispatch } from '../../../store'
import CellOptions from '../../atoms/cellOptions/CellOptions'

const header = { name: "name", surname: "surname", ci: "ci", age: "age", phone: "phone" }

const TablePeople: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>()
    const [page, setPage] = useState<number>(1)
    const { rows, count } = useSelector(selectPeople)
    const pages = Math.ceil(count / 10)

    const pagination = {
        page: page,
        limit: 10
    }

    useEffect(() => {
        dispatch(fetchGetPeople({ pagination }))
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

    const options = rows.map((item) => (
        <CellOptions>
            <Button onClick={() => console.log("ver", item.id)}>Ver</Button>
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