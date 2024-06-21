import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LoginTemplate from '../components/templates/LoginTemplate/LoginTemplate'
import HomeTemplate from '../components/templates/HomeTemplate/HomeTemplate'
import Sidebar from '../components/organisms/sidebar/Sidebar'
import ProfileTemplate from '../components/templates/ProfileTemplate/ProfileTemplate'
import SettingsTemplate from '../components/templates/SettingsTemplate/SettingsTemplate'
import NotFoundTemplate from '../components/templates/NotFoundTemplate/NotFoundTemplate'
import AboutTemplate from '../components/templates/AboutTemplate/AboutTemplate'
import StudentsTemplate from '../components/templates/StudentsTemplate/StudentsTemplate'
import ReportsTemplate from '../components/templates/ReportsTemplate/ReportsTemplate'
import OopsTemplate from '../components/templates/Oops.template/OopsTemplate'
import { useAppSelector } from '../hooks/hooksRedux'


const AppRouter: React.FC = () => {
    const token = useAppSelector((state) => state.appReducer.tokenState.accessToken)
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={!token ? <LoginTemplate /> : <Navigate to={'/home'} />} />
                <Route path='/oops' element={<OopsTemplate />} />
                {/* <Route path='/dashboard' element={<DashboardTemplate />} /> */}
                <Route path='/home' element={token ? <Sidebar><HomeTemplate /></Sidebar> : <Navigate to={'/'} />} />
                <Route path='/profile' element={token ? <Sidebar><ProfileTemplate /></Sidebar> : <Navigate to={'/'} />} />
                <Route path='/settings' element={token ? <Sidebar><SettingsTemplate /></Sidebar> : <Navigate to={'/'} />} />
                <Route path='/about' element={token ? <Sidebar><AboutTemplate /></Sidebar> : <Navigate to={'/'} />} />
                <Route path='/students' element={token ? <Sidebar><StudentsTemplate /></Sidebar> : <Navigate to={'/'} />} />
                <Route path='/reports' element={token ? <Sidebar><ReportsTemplate /></Sidebar> : <Navigate to={'/'} />} />
                <Route path='/*' element={<NotFoundTemplate />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter