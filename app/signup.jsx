import { useRouter } from "expo-router";
import { Image, TextInput, View } from "react-native";
import "react-native-gesture-handler";
import MyBtn from "../Components/MyBtn";

export default function SignUp() {
  const router = useRouter();
  const onRegister = () => {
    router.navigate("/login");
  };
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Image
        source={require("@/assets/images/signup.jpeg")}
        style={{ width: "100%", height: 300 }}
        resizeMode="cover"
      />

      <View style={{ padding: 20, gap: 9 }}>
        <TextInput
          placeholder="Enter Your Name"
          value="Name"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
        />
        <TextInput
          placeholder="Enter Your Email"
          value="Email"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
        />
        <TextInput
          value="Password"
          placeholder="Enter Your Password"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
        />
        <TextInput
          value="Confirm Password"
          placeholder="Enter Your Password"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
        />
        <MyBtn title={"Register"} onPress={onRegister} />
      </View>
    </View>
  );
}
