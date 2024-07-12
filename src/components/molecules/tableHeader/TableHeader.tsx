import React from 'react'
import CellHeader from '../../atoms/cellHeader/CellHeader'
import IProps from './type/IProps'

const TableHeader: React.FC<IProps> = (props: IProps) => {
    const { children, variant, options = false } = props
    const keys = Object.keys(children)
    return (
        <thead>
            <tr>
                <CellHeader scope='col' variant={variant} key={0}>n</CellHeader>
                {
                    keys?.map((item, index) => (
                        <CellHeader scope='col' variant={variant} key={index + 1}>{item}</CellHeader>
                    ))
                }
                {
                    options && <CellHeader scope='col' variant={variant}>options</CellHeader>
                }
            </tr>
        </thead>
    )
}

export default TableHeader