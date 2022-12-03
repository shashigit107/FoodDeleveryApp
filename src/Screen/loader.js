import { View,Text , TouchableOpacity} from "react-native"
import MyTabs from "../tabNavigation"

export const Loader=({navigation})=>{
    console.log("shashiranjan")
    // setTimeout(()=>{
    // navigation.navigate("Home")
    // console.log("hey")
    // },3000)
     return (
        <View style={{marginTop:30}}>
          
            <Text>hey</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={{backgroundColor:"black", margin:20}}>
                <Text>move to next tab</Text>
            </TouchableOpacity>
            

        </View>
     )
}