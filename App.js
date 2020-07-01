import * as React from 'react';
import {View} from 'react-native';
import RootNavigator from './navigation/RootNavigator';


const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <RootNavigator />
    </View>
  );
};

export default App;
