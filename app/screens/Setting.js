import React from "react";
import { View, Text, TextInput } from "react-native";

export default class Setting extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", alignContent: "center" }}>
        <Text>Setting URl</Text>
        <TextInput />
      </View>
    );
  }
}
