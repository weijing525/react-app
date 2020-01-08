import React from 'react'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'

import Home from './home'
import Center from './center'
import NotFound from './NotFound'
import Hook from './Hook'

class RouterConfig extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact render={() => (
                        <Redirect to='/Home' />
                    )} />
                    <Route path='/Home' component={Home} />
                    <Route path='/Center' component={Center} />
                    <Route path='/Hook' component={Hook} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default RouterConfig