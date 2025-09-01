import React from 'react'
import { Text, View } from 'react-native'

function Home() {
  return (
  <View
       style={{
         flex: 1,
         justifyContent: "center",
         alignItems: "center",
         backgroundColor: "red",
       }}
     >
       <Text style={{ fontSize: 25, color: "white", fontWeight: 800 }}>
         This is Home Page
       </Text>
      
     </View>
  )
}

export default Home
