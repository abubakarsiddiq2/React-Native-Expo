import React from 'react'
import { Text, View } from 'react-native'

function Profile() {
  return (
  <View
       style={{
         flex: 1,
         justifyContent: "center",
         alignItems: "center",
         backgroundColor: "green",
       }}
     >
       <Text style={{ fontSize: 25, color: "red", fontWeight: 800 }}>
         This is Profile Page
       </Text>
      
     </View>
  )
}

export default Profile
