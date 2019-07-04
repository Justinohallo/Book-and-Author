import React from 'react'
import {Route, Switch} from 'react-router-dom'

//Components
import Home from './components/Home'
import BookView from './components/Books'
import User from './components/Admin'
import UserReview from './components/Admin/userPosts'

// Containers
import Login from './containers/Admin/login'
import AddReview from './containers/Admin/add'
import EditPost from './containers/Admin/edit'


// HOC
import Layout from './HOC/layout'
import Auth from './HOC/Auth'


const Routes = () => {
    return (
        <Layout>
        <Switch>
          <Route path="/" exact component={Auth(Home, null)}></Route>
          <Route path="/login" exact component={Auth(Login, false)}></Route>
          <Route path="/user" exact component={Auth(User, true)}></Route>
          <Route path="/user/add" exact component={Auth(AddReview, true)}></Route>
          <Route path="/user/user-reviews" exact component={Auth(UserReview, true)}></Route>
          <Route path="/user/edit-post/:id" exact component={Auth(EditPost, true)}></Route>
          <Route path="/books/:id" exact component={Auth(BookView)}></Route>
      </Switch>
    </Layout>
     
    )
}




export default Routes
