import React, { Component } from 'react';
import Main from './components/Main';


class App extends Component{
    render(){
        return(
            <Main/>
        )
    }
}

export default App;


// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
// import Home from './components/Home';
// import Main from './components/Main';
// // import Home from './Home';
// // import Login from './Login';
// // import Protected from './Protected';

// function onAuthRequired({history}) {
//   history.push('/login');
// }

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <Security issuer='https://dev-137824.okta.com'
//                   clientId='{0oa1j860faQ8jX4OU357}'
//                   redirectUri=''
//                   o>
//           <Route path='/' exact={true} component={Home} />
//           <SecureRoute path='/protected' component={Main} />
//           <Route path='/login' render={() => <Login baseUrl='https://${yourOktaDomain}' />} />
//           <Route path='/implicit/callback' component={ImplicitCallback} />
//         </Security>
//       </Router>
//     );
//   }
// }

// export default App;
