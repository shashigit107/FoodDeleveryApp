import React, {
  useState,
  useEffect
} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux';
import {
  locationCall,
  setHorizontalData,
  setVerticalData,
  selectHorizontalItem
} from '../redux/Action/Product';

import { verticalFlatListData } from '../dammyData';
import { itemsData } from '../dammyData';
const { height, width } = Dimensions.get("window")
import { useNavigation } from '@react-navigation/native';

function Home(props) {
  const navigation = useNavigation()
  const [index, setIndex] = useState(0)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(locationCall())
    dispatch(setHorizontalData(itemsData))
    dispatch(setVerticalData(verticalFlatListData))
  }, [])


  const verticalClickHandler = (id, index) => {
    setIndex(index)
    dispatch(selectHorizontalItem(id, props.horizontalData))

  }

  const renderReturantcard = ({ item, index }) => {
    console.log("clickedAgin", item)

    return (

      <TouchableOpacity activeOpacity={1} onPress={() => { verticalClickHandler(item?._id, index) }}>
        <View style={[styles.horizontalFlatListstyle, item?.selected ? {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2, },
          shadowOpacity: 0.25,
          elevation: 5,
        } : {}]}>
          <Image
            style={styles.tinyLogo2}
            source={item?.Img}
          />
          <Text style={{ fontSize: 20, fontWeight: 'bold', paddingTop: 5 }}>{item?.type}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  const renderHeader = () => {
    return (
      <View style={styles.addressContainer}>
        <Icon name="location-on" size={40} />
        <Text style={styles.addressText}>sector-52 noida 301201.....</Text>
      </View>
    )
  }
  const renderHorizontalFlatList = () => {
    return (
      <View style={{ flex: .25, paddingTop: 10 }}>
        <FlatList
          data={props.horizontalData}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          keyExtractor={(item) => `${item._id}`}
          renderItem={renderReturantcard}
          ItemSeparatorComponent={() => <View style={{ paddingHorizontal: 10 }}></View>}

        />
      </View>
    )
  }
  const itemClickhandler = (item) => {
    navigation.navigate("OrderFood", { item })
  }
  const renderVerticalList = ({ item }) => {

    return (
      <TouchableOpacity onPress={() => itemClickhandler(item)}>
        <View style={{ elevation: 5 }}>
          <Image
            resizeMode='contain'
            style={{ width: width - 32, height: 200, borderRadius: 40 }}
            source={item.Img}
          />
          <View style={{
            width: width - (width - width / 3),
            borderBottomLeftRadius: 40,
            borderTopRightRadius: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
            backgroundColor: 'white',
            elevation: 4
          }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>30-40 min.</Text>

          </View>

        </View>
        <View style={{ alignItems: "center", flexDirection: 'row', padding: 6, justifyContent: "space-between" }} >
          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item?.restaurantName}</Text>

            <Text style={{ fontSize: 16 }}>⭐⭐⭐⭐</Text>
          </View>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>200 ₹</Text>

        </View>
      </TouchableOpacity>


    )
  }
  const renderVerticalFlatList = () => {
    console.log("+++++++++++----", verticalFlatListData)
    return (
      <View style={{ flex: .65, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <FlatList
          data={verticalFlatListData[index].resturant}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderVerticalList}
          ItemSeparatorComponent={() => <View style={{ paddingVertical: 10 }}></View>}
        />
      </View>

    )
  }

  if (props.loading) {
    return (
      <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color="red" />
      </View>
    )
  } else {
    return (<View style={styles.container}>
      <StatusBar />
      {renderHeader()}
      {renderHorizontalFlatList()}
      {renderVerticalFlatList()}

    </View>
    )
  }




}

const mapStateToProps = (state) => {
  const { data, userCredential, foodData, horizontalData, appiFetchError, verticalData, loading } = state.FoodData
  console.log("store", state.FoodData)
  return {
    data,
    userCredential,
    foodData,
    appiFetchError,
    horizontalData,
    verticalData,
    loading

  }
}

export default connect(mapStateToProps, {
  locationCall, setHorizontalData, setVerticalData, selectHorizontalItem
})(Home)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // paddingHorizontal:16
  },
  activityIndicator: {
    alignSelf: 'center'
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  horizontalFlatListstyle: {
    width: 125,
    height: 150,
    backgroundColor: 'white',
    alignItems: 'center',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,

  },
  addressText: {
    fontSize: 18,
    fontWeight: "400",
    color: '#e9967a',


  },
  addressContainer: {
    flex: .1,
    // padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    // elevation:9,


  },
  tinyLogo: {
    width: 60,
    height: 60,
    // backgroundColor: 'white',
    borderRadius: 30
  },
  tinyLogo2: {
    width: 100,
    height: 100,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    elevation: 5,
  }
})