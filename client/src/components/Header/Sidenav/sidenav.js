import React from 'react'
import SideNav from 'react-simple-sidenav'
import SidenavItems from './sideNav_items'

const sidenav = (props) => {
    return (
            <SideNav
            showNav={props.showNav}
            toggleNavigation={props.toggleNavigation}
            navStyle={{
                background:'#242424',
                maxWidth:"220px"
            }}>
               <SidenavItems/>
            </SideNav>
    )
}

export default sidenav

