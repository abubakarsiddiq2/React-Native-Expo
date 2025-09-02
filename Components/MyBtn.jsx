import { StyleSheet, Text, TouchableOpacity } from "react-native";
import "react-native-gesture-handler";

export default function MyBtn({title,onPress}) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.buttton}
      onPress={onPress}
    >
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttton: {
    backgroundColor: "orange",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems : "center"
  },
  btnText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
