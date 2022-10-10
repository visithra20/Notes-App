import React from 'react';
import { Provider } from 'react-native-paper';
import AppNavigator  from './src/navigation/index';
import store from './src/reducer/store';
import { Provider as StoreProvider} from 'react-redux';
const App=()=>{
return(
  <StoreProvider store= {store} >
  <Provider>
    <AppNavigator/>
  </Provider>
  </StoreProvider>
)

}
export default App