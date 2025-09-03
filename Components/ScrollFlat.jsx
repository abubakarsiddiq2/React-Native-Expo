import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";

const ScrollFlat = () => {
  return (
    // Scroll View Concept
    // <ScrollView
    //  showsHorizontalScrollIndicator={false}
    //  horizontal
    // //  contentContainerStyle={} // styling ke liye
    //  >
    //   {[1, 2, 3, 1, 2, 2, 2, 2, 3, 3, 21, 7].map((item) => {
    //     return (
    //       <View
    //         style={{
    //           width: 80,
    //           height: 80,
    //           backgroundColor: "red",
    //           borderRadius: 50,
    //           marginRight : 10,
    //           marginTop : 10
    //         }}
    //       ></View>
    //     );
    //   })}
    // </ScrollView>

    <View>
      {/* <FlatList
      // ListHeaderComponent={}
        // ListFooterComponent={}
        // numColumns={}
        data={[1, 2, 3, 1, 2, 2, 2, 2, 3, 3, 21, 7]}
        horizontal
        showsHorizontalScrollIndicator = {false}
        renderItem={({item}) => {
          return (
            
          <View
            style={{
              width: 80,
              height: 80,
              backgroundColor: "red",
              borderRadius: 50,
              marginRight: 10,
              marginTop: 10,
              justifyContent : "center",
              alignItems : "center"
            }}
          >
            <Text>{item}</Text>
          </View>
          )
        }}
      /> */}
    </View>
  );
};

export default ScrollFlat;
