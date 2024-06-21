import React, { MouseEvent, useEffect, useRef, useState } from 'react'
import IconPDF from '../../../assets/icons/IconPDF'
import IconButton from '../../molecules/iconButton/IconButton'
import Separator from '../../atoms/separator/Separator'
import MenuButton from '../../atoms/menuButton/MenuButton'
import IProps from './type/IProps'
import Header from '../header/Header'
import Container from '../../atoms/container/Container'
import Title from '../../atoms/title/Title'
import './styles.scss'
import { useNavigate } from 'react-router-dom'

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
        <div className={`page`} >
            <aside ref={sidebarRef} className={`sidebar ${status ? 'collapse' : ''}`}>
                <div className='header-sidebar'>
                    <MenuButton onClick={handleCickMenu} status={!status} />
                </div>
                <nav className='nav'>
                    <Title text='My dashboard' />
                    <Separator direction='horizontal' />
                    <IconButton name='home' onClick={handleNavigate} variant='transparent' text='Home'  ><IconPDF /></IconButton>
                    <IconButton name='about' onClick={handleNavigate} variant='transparent' text='About'  ><IconPDF /></IconButton>
                    <Separator direction='horizontal' />
                    <IconButton name='students' onClick={handleNavigate} variant='transparent' text='Students'  ><IconPDF /></IconButton>
                    <IconButton name='reports' onClick={handleNavigate} variant='transparent' text='Reports'  ><IconPDF /></IconButton>
                </nav>
            </aside>
            <div className={`main-section ${status ? 'collapse-main' : ''}`} >
                <Header />
                <Container>
                    {props.children}
                </Container>
            </div>
        </div>
    )
}
export default Sidebar