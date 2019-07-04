import React, { Component } from 'react'
import {connect} from 'react-redux'

// Actions
import {getUserPosts} from '../../actions'

// Utilities
import moment from 'moment-js'
import {Link} from 'react-router-dom'




export class userPosts extends Component {

    componentWillMount(){
        this.props.dispatch(getUserPosts(this.props.user.login.id))
    }

    showUserPosts = (user) => (
        user.userPosts ?
        user.userPosts.map(item => (
            <tr key={item._id}>
                <td><Link to={`/user/edit-post/${item._id}`}>{item.name}</Link> </td>
                <td>{item.author}</td>
                <td>{moment(item.createAt).format("MM/DD/YY")}</td>
            </tr>
                
           
        ))
        :null)
           
    render() {
        
        const user = this.props.user
        return (
            <div className='user_posts'>
                Your Reviews: 
                <table>
                    <thead>
                    <tr> 
                        <th>Name</th>
                        <th>Author</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.showUserPosts(user)}
                    </tbody>
                   
                </table>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(userPosts)
