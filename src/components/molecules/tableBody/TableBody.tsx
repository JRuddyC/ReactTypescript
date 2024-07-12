import React from 'react'
import IProps from './type/IProps'
import CellBody from '../../atoms/cellBody/CellBody'

const TableBody: React.FC<IProps> = (props: IProps) => {
    const { children, variant, options = false, menuOptions } = props


    return (
        <tbody>
            {
                children?.map((item, i) => (
                    <tr key={i} >
                        <CellBody key={"row" + i} variant={i % 2 ? variant : "default"} >{i + 1}</CellBody>
                        {
                            Object.keys(item).map((cell, j) => (
                                cell !== "id" && <CellBody variant={i % 2 ? variant : "default"} key={`row-${i + 1}-${"col"}-${j + 1}`}>{item[cell]}</CellBody>
                            ))
                        }
                        {
                            options && <CellBody variant={i % 2 ? variant : "default"}>{menuOptions[i]}</CellBody>
                        }
                    </tr>
                ))
            }
        </tbody >
    )
}

export default TableBody