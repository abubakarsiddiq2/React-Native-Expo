import { View, Text, Modal } from "react-native";
import React from "react";

const Home = () => {
  return (
   <>
    <Modal>
      <View style={{backgroundColor : "blue", flex: 1 }}>
        <View style={{backgroundColor : "blue"}}></View>
      </View>
      <Text>Home</Text>
    </Modal>
   </>
  );
};

export default Home;
