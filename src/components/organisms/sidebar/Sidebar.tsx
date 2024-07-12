import React, { MouseEvent, useEffect, useRef, useState } from 'react'
import IconPDF from '../../../assets/icons/IconPDF'
import IconButton from '../../molecules/iconButton/IconButton'
import Separator from '../../atoms/separator/Separator'
import MenuButton from '../../atoms/menuButton/MenuButton'
import IProps from './type/IProps'
import Header from '../header/Header'
import Container from '../../atoms/container/Container'
import Title from '../../atoms/title/Title'
import Styles from './Styles.module.scss'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import DropdownButton from '../../molecules/dropdownButton/DropdownButton'
import Button from '../../atoms/button/Button'
import Breadcrumb from '../../molecules/breadcrumb/Breadcrumb'

const Sidebar: React.FC<IProps> = (props: IProps) => {

    const [status, setStatus] = useState<boolean>(true)
    const sidebarRef = useRef<HTMLDivElement>(null)
    const navigate = useNavigate()

    const handleCickMenu = () => {
        setStatus(!status)
    }

    const handleNavigate = (event: MouseEvent<HTMLButtonElement>) => {
        const { name } = event.currentTarget
        navigate(`/${name}`, { replace: true })
        handleCickMenu()
    }

    const handleClickOutside = (event: Event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
            setStatus(true);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])


    return (
        <div className={Styles.page} >
            <aside ref={sidebarRef}
                // className={`sidebar ${status ? 'collapse' : ''}`}
                className={classNames(Styles.sidebar, { [Styles.collapse]: status })}
            >
                <div className={Styles['header-sidebar']}>
                    <MenuButton onClick={handleCickMenu} status={!status} />
                </div>
                <nav className={Styles.nav}>
                    <Title text='My dashboard' />
                    <Separator direction='horizontal' />
                    <IconButton name='home' onClick={handleNavigate} variant='transparent' text='Home'  ><IconPDF /></IconButton>
                    <IconButton name='about' onClick={handleNavigate} variant='transparent' text='About'  ><IconPDF /></IconButton>
                    <Separator direction='horizontal' />
                    <IconButton name='students' onClick={handleNavigate} variant='transparent' text='Students'  ><IconPDF /></IconButton>
                    <IconButton name='reports' onClick={handleNavigate} variant='transparent' text='Reports'  ><IconPDF /></IconButton>
                    <DropdownButton right variant='transparent' text='Management'>
                        <Button name='management/users' onClick={handleNavigate} variant='transparent'>users</Button>
                        <Button name='management/people' onClick={handleNavigate} variant='transparent'>people</Button>
                    </DropdownButton>
                    {/* <DropdownButton right variant='transparent' text='menu dropdown'>
                        <Button variant='transparent'>opcion a</Button>
                        <Button variant='transparent'>opcionn b</Button>
                    </DropdownButton>
                    <DropdownButton right variant='transparent' text='menu dropdown'>
                        <Button variant='transparent'>opcion a</Button>
                        <Button variant='transparent'>opcionn b</Button>
                    </DropdownButton> */}
                </nav>
            </aside>
            <div
                className={classNames(Styles['main-section'], { [Styles['collapse-main']]: status })}
            >
                <Header />
                <Container>
                    <Breadcrumb />
                    {props.children}
                </Container>
            </div>
        </div>
    )
}
export default Sidebar