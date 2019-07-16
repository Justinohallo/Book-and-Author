import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUsers, userRegister} from '../../actions'

export class Register extends Component {

    state ={ 
        name:'',
        lastname:'',
        email:'',
        password:'',
        errors:'',
    }

    componentWillMount(){
        this.props.dispatch(getUsers())
    }

    handleInputEmail = ( event) =>  { 
        this.setState({email:event.target.value})

    }

    handleInputPassword = ( event) =>  { 
        this.setState({password:event.target.value})
        
    }

    handleInputName = ( event) =>  { 
         this.setState({name:event.target.value})
        
    }

    handleInputLastName = ( event) =>  { 
         this.setState({lastname:event.target.value})
        
    }

    submitForm = (e) =>{
        e.preventDefault();
        this.setState({error:''})

    }

    renderUsers = (user) => (
        user.users ?
        user.users.map(item =>( 
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
            </tr>
        )) : null
    )


    render() {
        console.log(this.props)
        let user = this.props.user
        return (
            
            <div>
                <div className="rl_container">
                    <form onSubmit={this.submitForm}> 
                        <h2>Add User</h2>

                    <div className="form_element">
                    
                    {/* FIRST NAME */}
                    <input 
                    type='text'
                    placeholder='Enter Name'
                    value={this.state.name}
                    onChange={this.handleInputName}
                    />
                    {/* LAST NAME */}
                    <input 
                    type='text'
                    placeholder='Enter Last Name'
                    value={this.state.lastname}
                    onChange={this.handleInputLastName}
                    />
                    {/* EMAIL */}
                    <input 
                    type='text'
                    placeholder='Enter Email'
                    value={this.state.email}
                    onChange={this.handleInputEmail}
                    />

                    {/* PASSWORD */}
                    <input 
                    type='text'
                    placeholder='Enter Password'
                    value={this.state.password}
                    onChange={this.handleInputPassword}
                    />

                    </div>
                    <button className="submit"> Add User</button>
                    <div className='error'>
                        {this.state.error}
                    </div>

                    </form>

                    <div className="current_users">
                        <h4>Current Users: </h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Last Name</th>
                                    <th>Email </th>
                                </tr>
                            </thead>
                            <tbody>
                                
                            {this.renderUsers(user)}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user:state.user
    }
}

export default connect(mapStateToProps)(Register)
