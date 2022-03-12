/** import statement **/
import { Image, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import images from '../assets/images';
import colors from '../common/style/color';
import home from '../screen/Home'
import debitCard from '../screen/debitCard'
import payment from '../screen/payment'
import profile from '../screen/profile'
import creditScreen from '../screen/credit'
import weeklyLimit from '../screen/weeklyLimit'

/** constant statement **/
const Stack = createNativeStackNavigator();
const tab = createBottomTabNavigator();

/** Custom Functions **/
function Bottomtab() {
  return (
    <tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: colors.primary,
      tabBarStyle: {
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
      }
    }} initialRouteName='Debit Card'>
      <tab.Screen name='Home' component={home}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ?
              <Image source={images.aspireLogoGray} style={[styles.bottomIconFocus, { width: 35, height: 35 }]} />
              :
              <Image source={images.aspireLogoGray} style={[styles.bottomIcon, { height: 35, width: 35 }]} />
          ),
        }}
      />
      <tab.Screen name='Debit Card' component={debitCard}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ?
              <Image source={images.card} style={styles.bottomIconFocus} />
              :
              <Image source={images.card} style={styles.bottomIcon} />
          ),
        }}
      />
      <tab.Screen name='Payments' component={creditScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ?
              <Image source={images.payment} style={styles.bottomIconFocus} />
              :
              <Image source={images.payment} style={styles.bottomIcon} />
          ),
        }}
      />
      <tab.Screen name='Credits' component={payment}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ?
              <Image source={images.upArrow} style={styles.bottomIconFocus} />
              :
              <Image source={images.upArrow} style={styles.bottomIcon} />
          ),
        }}
      />
      <tab.Screen name='Profile' component={profile}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ?
              <Image source={images.user} style={styles.bottomIconFocus} />
              :
              <Image source={images.user} style={styles.bottomIcon} />
          ),
        }}
      />
    </tab.Navigator>
  )
}

class Navigation extends Component {
  /** Class Render **/
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Bottomtab" component={Bottomtab} options={{ headerShown: false }} />
          <Stack.Screen name="Weeklylimit" component={weeklyLimit} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
/** Stylesheet **/
const styles = StyleSheet.create({
  bottomIconFocus: {
    height: 25,
    width: 25,
    tintColor: colors.primary,
  },
  bottomIcon: {
    height: 25,
    width: 25,
    tintColor: colors.lightGray
  }
});

export default Navigation