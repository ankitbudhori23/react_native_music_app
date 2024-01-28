import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Onboard from '../Screens/Onboard';
import Loginscreen from '../Screens/Loginscreen';
import Signupscreen from '../Screens/Signupscreen';
import app from '../Screens/Main';
import Notification from '../Screens/Notification';
import EditProfile from '../Screens/EditProfile';
import Settings from '../Screens/Settings';
import HelpSupport from '../Screens/HelpSupport';
import Playing from '../Screens/Playing';
import SongList from '../Screens/SongList';
import FavoriteSongs from '../Screens/FavoriteSongs';
import {useSelector} from 'react-redux';
const StackNavigation = () => {
  const Stack = createStackNavigator();
  const {isUserLoggedIn} = useSelector(state => state.initial);
  return (
    <Stack.Navigator initialRouteName={isUserLoggedIn ? 'Main' : 'onboarding'}>
      <Stack.Screen
        options={{headerShown: false}}
        name="onboarding"
        component={Onboard}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Loginscreen}
      />
      <Stack.Screen
        name="Signup"
        component={Signupscreen}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Main"
        component={app}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="HelpSupport"
        component={HelpSupport}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Playing"
        component={Playing}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="FavoriteSongs"
        component={FavoriteSongs}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="SongList"
        component={SongList}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
