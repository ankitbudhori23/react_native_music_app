import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../Screens/Home';
import Library from '../Screens/Library';
import Profile from '../Screens/Profile';
import Explore from '../Screens/Explore';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ficon from 'react-native-vector-icons/FontAwesome5';
import {useTheme, Text} from 'react-native-paper';
import {usePlaybackState} from 'react-native-track-player';
export default function BottomTabNavigation() {
  const Tab = createMaterialBottomTabNavigator();
  const playbackState = usePlaybackState();
  const theme = useTheme();

  const scolor = '#8c9094';
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor={theme.colors.onSurface}
        inactiveColor={scolor}
        barStyle={{
          backgroundColor: theme.colors.elevation.level1,
          height: 65,
          marginTop:
            playbackState.state === 'stopped' || playbackState.state === 'none'
              ? 0
              : 60,
        }}
        screenOptions={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <Micon
                name={'home'}
                color={focused ? theme.colors.primary : scolor}
                size={28}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{
            tabBarIcon: ({focused}) => (
              <Micon
                name={'compass'}
                color={focused ? theme.colors.primary : scolor}
                size={28}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Library"
          component={Library}
          options={{
            tabBarIcon: ({focused}) => (
              <Micon
                name={'music-box-multiple'}
                color={focused ? theme.colors.primary : scolor}
                size={28}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => (
              <Ficon
                name={'user-alt'}
                color={focused ? theme.colors.primary : scolor}
                size={22}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
