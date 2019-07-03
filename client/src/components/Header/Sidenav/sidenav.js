import React from 'react'
import SideNav from 'react-simple-sidenav'
import SidenavItems from ''

const sidenav = (props) => {
    return (
            <SideNav
            showNav={props.showNav}
            toggleNavigation={props.toggleNavigation}
            navStyle={{
                background:'#242424',
                maxWidth:"220px"
            }}>
            
                Items
            </SideNav>
    )
}

export default sidenav

