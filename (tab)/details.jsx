import React from 'react'
import { Text, View } from 'react-native'

function Details() {
  return (
   <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "yellow",
          }}
        >
          <Text style={{ fontSize: 25, color: "red", fontWeight: 800 }}>
            This is Details Page
          </Text>
         
        </View>
  )
}

export default Details
