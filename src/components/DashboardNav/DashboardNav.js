import React from 'react'
import { DashboardNavbar, DashboardNavbarButton } from './DashboardNavComponents'

const DashboardNav = () => {
    return (
        <>
            <DashboardNavbar>
                <DashboardNavbarButton to="dashboard/courses">Courses</DashboardNavbarButton>
                <DashboardNavbarButton to="dashboard/payments">Payments</DashboardNavbarButton>
                <DashboardNavbarButton to="creator">Creator</DashboardNavbarButton>
            </DashboardNavbar>
        </>
    )
}

export default DashboardNav
