import { View, Text, Dimensions, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import { itemsData } from '../dammyData'
const { height, width } = Dimensions.get("screen")
import Icon from 'react-native-vector-icons/Entypo'
import { useDispatch } from 'react-redux'
import { removeItem } from '../redux/Action/Product'
function Cart(props) {
const dispatch=useDispatch()

  const removeItemFromList = (item) => {
    dispatch(removeItem(item,props.cartData))
  }
  const placeOrder = () => {
    console.log('placeOrder')
  }


  const renderCardData = ({ item }) => {
    console.log("item", item)
   
    return (
      <TouchableOpacity>
        <View style={styles.container}>

          <Image
            style={{ height: 100, width: 120, }}
            resizeMode='cover'
            source={item.Img}
          />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {/* middle Element in acrd */}
            <View style={{ paddingRight: 35 }}>
              <Text style={styles.restaurentTitle}>restaurantName</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.textTitle}>quantity :</Text>
                <Text style={styles.textValue}>1</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.textTitle}>Price :</Text>
                <Text style={styles.textValue}>400</Text>
              </View>
            </View>
            {/* buttom of card */}
            <View style={{ alignItems: 'center', justifyContent: 'space-between' }}>
              <TouchableOpacity
                onPress={()=>removeItemFromList(item)}
                style={{ paddingTop: 15 }}>
                <Icon name='circle-with-cross' size={40} color='red' />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={placeOrder}>
                <Text style={styles.placeOrder}>Place Order</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={{ width: width, flexDirection: "row" }}>
      {console.log('props.cartData', props.cartData)}
      <FlatList
        data={props.cartData}
        renderItem={renderCardData}
        keyExtractor={(item) => `${item.id}`}
        ItemSeparatorComponent={() => <View style={{ marginVertical: 10, backgroundColor: "red" }}></View>}
      />

    </View>
  )
}

const mapStateToProps = (state) => {
  const { cartData } = state.FoodData
  console.log("store", state.FoodData)
  return {
    cartData

  }
}
export default connect(mapStateToProps, {
  removeItem
})(Cart)

const styles = StyleSheet.create({
  container: {
    width: width,
    flexDirection: "row",
    backgroundColor: '#dcdcdc',
    
  },
  restaurentTitle: {
    fontSize: 20,
    paddingLeft: 10,
    paddingBottom: 5,
    paddingTop: 10,
    fontWeight: 'bold'
  },
  textTitle: {
    fontSize: 20,
    paddingLeft: 10,
    paddingBottom: 5,
    fontWeight: 'bold'
  },
  textValue: {
    fontSize: 20,
    paddingLeft: 10,
    paddingBottom: 5,
    fontWeight: '400'
  },
  placeOrder: {
    backgroundColor: 'green',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  }

})
