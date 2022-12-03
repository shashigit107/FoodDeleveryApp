import axios from "axios"
import React, { useEffect, useState } from "react"
import { View, Text, FlatList, TouchableOpacity } from "react-native"
// import { FlatList } from "react-navigation"


export const Offer = () => {
    const [Data, setData] = useState([])

    const[show,setShow]=useState("")
    let dummyData = [{name:"shashi",seletced:false },{name:"ranjan",seletced:false }]
    useEffect(() => {
        setTimeout(async () => {
            const Dummy = []
            for (let i = 0; i < 500; i++) {
                Dummy.push(dummyData)
            }
            setData(Dummy)
        }, 2000)

    }, [])
    // console.log("data", Data)

    const onclicked = (id) => {
       const upDatedData= Data.map((element,index)=>{
        if(index===id){
            return{
                ...element,seletced:true
            }
        }else{
            return{
                ...element,seletced:false
            }
        }
       })
       setData(upDatedData)
    }


    const renderItems = ({ item, index }) => {
        console.log('item', index)
        return (
            <TouchableOpacity onPress={() => onclicked(index)}>
                <Text style={{ width: 300, height: 50, backgroundColor: 'grey' }}>{item.name}</Text>
                {item.seletced?
                <Text style={{ width: 300, height: 50, backgroundColor: 'blue' }}>{index}</Text>:null
                }
                
            </TouchableOpacity>

        )
    }


    return (
        <View>
            <Text>hey</Text>
            <FlatList
                data={Data}
                renderItem={renderItems}
                ItemSeparatorComponent={() => <View style={{ marginVertical: 10 }}></View>}
            />

        </View>
    )
}