import React, { ChangeEvent, SyntheticEvent, useEffect, useRef, useState } from 'react'
import './styles.scss'
import InputIcon from '../../molecules/inputIcon/InputIcon'
import IconPDF from '../../../assets/icons/IconPDF'
import UserIcon from '../../atoms/userIcon/UserIcon'
import user from '../../../assets/img/deadwing.jpg'
import MenuUser from '../menuUser/MenuUser'
const Header: React.FC = () => {

    const [search, setSearch] = useState<string>()
    const [status, setStatus] = useState<boolean>(false)

    const handleSearch = (event: SyntheticEvent) => {
        event.preventDefault()
        console.log(search);

    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setSearch(value)
    }

    const handleClick = () => {
        setStatus(!status)
    }

    const menuRef = useRef<HTMLDivElement>(null)

    const handleClickOutside = (event: MouseEvent) => {

        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setStatus(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.addEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div className='header'>
            <div className='section-user'>
                <form onSubmit={handleSearch}>
                    <InputIcon onChange={handleChange} placeholder='search' onClick={handleSearch}>
                        <IconPDF />
                    </InputIcon>
                </form>
                <div ref={menuRef} >
                    <UserIcon size='small' onClick={handleClick} src={user} />
                    <MenuUser status={status} />
                </div>

            </div>
        </div>
    )
}

export default Header