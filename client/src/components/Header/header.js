import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import {Link} from 'react-router-dom'

import Nav from "./Sidenav/sidenav"


export class Header extends Component {

    state={
        showNavigation:false
    }

    toggleNavigation = ()=>{
        this.setState({showNavigation:false})
    }

    render() {
        return (
           
               <header>
                   <div className='open_nav'>
                    <FontAwesome name='bars'
                    onClick={()=>this.setState({showNavigation:true})}
                    style={{
                        color:'#ffffff',
                        padding:'10px',
                        cursor:'pointer'
                    }}
                    />
                  <Nav 
                  showNav={this.state.showNavigation}
                  toggleNavigation={()=> this.toggleNavigation()} />

                   </div>
                   <Link to='/' className='logo'> The Book Shelf </Link>
               </header>
            
        )
    }
}

export default Header
