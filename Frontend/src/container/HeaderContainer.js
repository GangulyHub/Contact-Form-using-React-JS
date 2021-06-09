import React from 'react'
import { NavLink } from 'react-router-dom'

function HeaderContainer() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: '1rem',
        }}>
           <NavLink to="/" style={{
               fontSize: '1rem',
               textDecoration: 'none',
               marginRight: '1rem'
           }} >
                Home
            </NavLink>

            <NavLink to="/user" style={{
               fontSize: '1rem',
               textDecoration: 'none',
               marginRight: '1rem'
           }} >
                User
            </NavLink> 
        </div>
    )
}

export default HeaderContainer
