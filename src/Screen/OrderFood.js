
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { StyleSheet, TouchableOpacity, Image, Dimensions, View, Text ,Animated} from 'react-native'
import { connect, useDispatch } from "react-redux";
import { addItemToCart } from '../redux/Action/Product';
import { useRoute,useNavigation } from '@react-navigation/native';
// import Animated from 'react-native-reanimated'
// import { Dispatch } from 'react'


const { height, width } = Dimensions.get("screen")

 function OrderFood(props) {
   const  route=useRoute()
   const  navigation=useNavigation()
   const dispatch=useDispatch()
   const[quantity,setQuantity]=useState(1)


    useEffect(() => {
        console.log("route.params.item",route.params.item)
    }, [])
    const scrollX = new Animated.Value(0)
    const renderHeaderSection = (props) => {
        const onClickBack = () => {
            navigation.goBack()
        }
        console.log("shashi", route.params)
        return (
            <View style={{ flex: .1, paddingTop: 10 }}>
                <TouchableOpacity
                    onPress={onClickBack}
                >
                    <Icon name='chevron-back-circle-sharp' size={50} />

                </TouchableOpacity>
            </View>

        )
    }
  
    const deSelectedHandler=()=>{
          if(quantity>1){
            setQuantity(quantity-1)
          }
    }
    const onSelectedHandler=()=>{
        setQuantity(quantity+1)
    }
    const AddItemsToCart=(item)=>{
        console.log("ranjanprops.cartData",item)
        navigation.navigate("Cart")
        dispatch(addItemToCart(item,props.cartData))
    }
    const renderSelectedImage = () => {
        return (
            <View style={{ flex: .8 }}>
                <View style={{ alignItems: 'center' }}>
                    <Animated.ScrollView
                        horizontal
                        pagingEnabled
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                            [{
                                nativeEvent: {
                                    contentOffset: {
                                        x: scrollX
                                    }
                                }
                            }], {useNativeDriver:false}
                        )}
                        showsHorizontalScrollIndicator={false}
                    >
                        {route.params.item.viewImage.map((element, index) => {
                            return (
                                <Image
                                    resizeMode='contain'
                                    style={styles.selectedFoodstyle}
                                    source={element.Img}
                                />
                            )
                        })}
                    </Animated.ScrollView>
                    <View style={{
                        position: 'absolute', bottom: 0, elevation: 6, flexDirection: 'row',
                        width: 150, height: 60, backgroundColor: "white", alignItems: 'center', justifyContent: 'center',
                        borderRadius: 30
                    }}>
                        <TouchableOpacity onPress={deSelectedHandler}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', padding: 10 }}>—</Text>
                        </TouchableOpacity>
                       
                        <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>{quantity}</Text>
                        <TouchableOpacity onPress={onSelectedHandler}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', padding: 10 }}>+</Text>
                        </TouchableOpacity>
                       
                    </View>

                </View>
                <View style={{ marginTop:20 ,justifyContent:"center", alignItems:'center' }}>
                { renderDot()}
                </View>
            
                <Text style={{ fontSize: 40, fontWeight: 'bold', padding: 10 }}> mutton cury </Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', paddingLeft: 20 }}>{`Price : ${quantity} X ₹${route.params.item.price} =`}</Text>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', paddingLeft: 10 }}>{quantity*route.params.item.price}</Text>
                </View>
                <TouchableOpacity style={{
                    backgroundColor: 'white', width: width - 32, height: 60,
                    marginTop: 20, elevation: 6, borderRadius: 30, justifyContent: 'center', alignItems: "center"
                    
                }}
                onPress={()=>AddItemsToCart(route.params.item)}
                >
                    <Text style={{ fontSize: 25, fontWeight: 'bold', paddingLeft: 20 }}>Add To Cart</Text>
                </TouchableOpacity>


            </View>

        )
    }
    const renderDot = () => {
        let dotPosition = new Animated.divide(scrollX, width)
        console.log("dotPosition", dotPosition)
        return (
            
                <View style={{ flexDirection: 'row', justifyContent: 'center',alignContent:'center',height:20 }}>
                    {route.params.item.viewImage.map((_, index) => {
                        const opacity = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [0.3, 1, 0.3],
                            interpolate: 'clamp'
                        })
                        const dotSize = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [10, 10, 10],
                            interpolate: 'clamp'
                        })
                        const dotColor = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: ["blue", "red", "blue"],
                            interpolate: 'clamp'
                        })
                        return (
                            <Animated.View
                                opacity={opacity}
                                style={{
                                    marginRight: 5,
                                    width: dotSize,
                                    height: dotSize,
                                    borderRadius: 5,
                                    backgroundColor: dotColor
                                }}>

                            </Animated.View>
                        )
                    })}
                </View>

            
        )
    }
    return (
        <View style={styles.container}>
            {console.log("shashirender")}
            {renderHeaderSection()}
            {renderSelectedImage()}
            {/* {renderDot()} */}


        </View>
    )
}
const mapStateToProps = (state) => {
    const {  verticalData, loading,cartData } = state.FoodData
    console.log("storeOrderFood", state.FoodData)
    return {
      verticalData,
      loading,
      cartData
  
    }
  }
export default connect(mapStateToProps, {
    addItemToCart
  })(OrderFood)



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16

    },
    selectedFoodstyle: {
        width: width - 32,
        height: height / 4 + 100,
        borderRadius: width / 2,



    }
})