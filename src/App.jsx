import createStore from 'react-auth-kit/createStore';

const store = createStore({
    authName:'_auth',
    authType:'cookie',
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'https:',
  });

import AuthProvider from 'react-auth-kit/AuthProvider';
import RoutesApp from './routes';


const App = () => {
  return (
    <AuthProvider store={store}>
    <RoutesApp/>
  </AuthProvider>
  )
}



export default App;