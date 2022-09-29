import React from 'react';
import { Provider } from 'react-native-paper';
import AppNavigator  from './src/screens/navigation/index';

 const App=()=>{
return(
  <Provider>
    <AppNavigator/>
  </Provider>
)

}
export default App