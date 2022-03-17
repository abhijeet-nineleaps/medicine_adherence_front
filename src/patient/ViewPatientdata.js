import React from "react"
import { View } from "react-native"
import { Button } from "react-native-elements"

const ViewPatient = ({route}) => {

         return (
             
             <View>

  <Button title="Outline Button"
                
                onPress={()=>sendnotification()}

                buttonStyle={{
                  borderColor: 'rgba(78, 116, 289, 1)',
                }}
                type="outline"
                titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}></Button>
             </View>

         )


}

export default ViewPatient;