import React from 'react'

//Styled Components
import { DashboardNavbar, 
    DashboardNavbarButton, 
    SearchBar, 
    SearchInput
} from './DashboardNavComponents'

const DashboardNav = ({ creatorPage }) => {
    return (
        <>
            <DashboardNavbar>
                <DashboardNavbarButton to="dashboard/courses">Courses</DashboardNavbarButton>
                <DashboardNavbarButton to="dashboard/payments">Payments</DashboardNavbarButton>
                <DashboardNavbarButton to="creator">Creator</DashboardNavbarButton>
                { creatorPage &&
                    <>
                        <SearchBar>
                            <SearchInput />
                        </SearchBar>
                        <DashboardNavbarButton>Create</DashboardNavbarButton>
                    </>
                }
            </DashboardNavbar>
        </>
    )
}

export default DashboardNav
