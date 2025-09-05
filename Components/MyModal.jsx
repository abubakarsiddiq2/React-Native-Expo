import { useState } from "react";
import { StyleSheet, View } from "react-native";
import ReactNativeModal from "react-native-modal";
import MyBtn from "./MyBtn";

const MyModal = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <MyBtn title={"Open Modal"} onPress={() => setVisible(true)} />
        {/* Custom Modal */}
        {/* <Modal visible={visible} animationType="slide" transparent>
          <View style={styles.modalContainer}>
       <View style={{backgroundColor : "blue", height : 300 , width : "full"}}>
         <MyBtn title={"Close Modal"} onPress={() => setVisible(false)} />
       </View>
          </View>
        </Modal> */}

        {/* React Native Modal */}
        <ReactNativeModal
          isVisible={visible}
          onBackdropPress={() => setVisible(false)}
          onBackButtonPress={() => setVisible(false)}
          animationIn={"jello"}
          animationOut={"bounceOut"}
          style={{justifyContent : "flex-end" , margin : 0, }}
        >
          <View style={{ backgroundColor: "white", height: 200, borderTopEndRadius : 20, borderTopStartRadius : 20 }}></View>
        </ReactNativeModal>
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

export default MyModal;
