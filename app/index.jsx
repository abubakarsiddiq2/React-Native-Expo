import { View, Text, Modal } from "react-native";
import React, { useState } from "react";
import MyBtn from "../Components/MyBtn";
import { StyleSheet } from "react-native";

const Home = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <MyBtn title={"Open Modal"} onPress={() => setVisible(true)} />
        <Modal visible={visible} animationType="slide" transparent>
          <View style={styles.modalContainer}>
       <View style={{backgroundColor : "blue", height : 300 , width : "full"}}>
         <MyBtn title={"Close Modal"} onPress={() => setVisible(false)} />
       </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1, 
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },

});

export default Home;
