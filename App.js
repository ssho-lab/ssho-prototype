import * as React from "react";
import { View } from "react-native";
import RootNavigator from "./navigation/RootNavigator";
import { Provider } from "mobx-react";
import RootStore from "./src/stores";

const root = new RootStore();

const App = () => {
  return (
    <Provider {...root}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <RootNavigator />
      </View>
    </Provider>
  );
};

export default App;
