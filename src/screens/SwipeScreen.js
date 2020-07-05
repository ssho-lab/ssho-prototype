import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { inject, observer } from "mobx-react";

const SwipeScreen = inject("itemStore")(
  observer(({ itemStore, otherStore }) => {
    return (
      <View>
        <Text style={styles.text}>Swipe</Text>
        <Text>MobX Test : {itemStore.itemList}</Text>
      </View>
    );
  })
);

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default SwipeScreen;
