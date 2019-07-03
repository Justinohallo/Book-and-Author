import React from 'react'
import {Route, Switch} from 'react-router-dom'

//Components
import Home from './components/Home'

// HOC
import Layout from './HOC/layout'

const Routes = () => {
    return (
        <Layout>
             <Switch>
          <Route path="/" exact component={Home}></Route>
      </Switch>
    </Layout>
     
    )
}

export default Routes
