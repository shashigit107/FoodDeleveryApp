import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Image } from 'react-native';
import Account from './Screen/Account';
import Cart from './Screen/Cart';
import  Home  from './Screen/Home';
import { Offer } from './Screen/Offer';

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, tintColor }) => {
            let icon = focused == true ? require('../src/images//home_icon.png') : require('../src/images/home_n_icon.png')
            return <Image source={icon} style={{ width: 30, height: 30, }} />
          }
        }} />
      <Tab.Screen
        name="Offer"
        component={Offer}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, tintColor }) => {
            let icon = focused == true ? require('../src/images//offer_icon.png') : require('../src/images/offer_n_icon.png')
            return <Image source={icon} style={{ width: 30, height: 30 }} />
          }
        }
        }

      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused, tintColor }) => {
            let icon = focused == true ? require('../src/images//cart_icon.png') : require('../src/images/cart_n_icon.png')
            return <Image source={icon} style={{ width: 30, height: 30 }} />
          }
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          // tabBarShowLabel: false,
          headerShown: false,
          // tabBarLabel: 'Accounts',
          // headerShown:{{false}},
          // headerTitle: "kuch",
          tabBarIcon: ({ focused, tintColor }) => {
            let icon = focused == true ? require('../src/images//account_icon.png') : require('../src/images/account_n_icon.png')
            return <Image source={icon} style={{ width: 30, height: 30 }} />
          }
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs