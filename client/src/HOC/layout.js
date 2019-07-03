import React from 'react'
import Header from '../components/Header/header'

const layout = (props) => {
    return (
        <div>
           <Header/>
            <div> 
                {props.children}
            </div>
        </div>
    )
}

export default layout
