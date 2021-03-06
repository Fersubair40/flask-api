import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router  } from 'react-router-dom';
import { Security, ImplicitCallback, SecureRoute } from '@okta/okta-react';
import Login from './Login';
import Home from './Home';




class Main extends Component{
    render() {
        return(
            <Router>
                <Security
                issuer={'https://dev-137824.okta.com'}
                client_id={'0oa1j860faQ8jX4OU357'}
                redirectUri={'http://localhost:8080/implicit/callback'}
                scope={['openid', 'profile','email']}
                >
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route  path='/implicit/callback' component={ImplicitCallback} />
                    <SecureRoute path='/home' component={Home} />
                </Switch>
                </Security>
            </Router>
        )
    }
}




export default Main;