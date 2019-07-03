import React from 'react'
import {Route, Switch} from 'react-router-dom'

//Components
import Home from './components/Home'
import BookView from './components/Books'

// HOC
import Layout from './HOC/layout'

const Routes = () => {
    return (
        <Layout>
             <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/books/:id" exact component={BookView}></Route>
      </Switch>
    </Layout>
     
    )
}

export default Routes
