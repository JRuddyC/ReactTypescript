import React from 'react'
import TableHeader from '../tableHeader/TableHeader'
import TableBody from '../tableBody/TableBody'
import IProps from './type/IProps'
import Subtitle from '../../atoms/subtitle/Subtitle'
import Styles from './Styles.module.scss'
import classNames from 'classnames'

const Table: React.FC<IProps> = (props: IProps) => {
    const { columns, rows, title, variant, options, menuOptions, size = "medium" } = props
    return (
        <>
            <Subtitle text={title} align='center' />
            <div className={Styles["content-table"]}>
                <table border={0} cellSpacing={0} className={classNames(Styles.table, Styles[size])} >
                    <TableHeader options={options} variant={variant}>{columns}</TableHeader>
                    <TableBody options={options} menuOptions={menuOptions} variant={variant}>{rows}</TableBody>
                </table>
            </div>
        </>
    )
}

export default Table