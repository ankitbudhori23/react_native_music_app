import {
  MD3DarkTheme,
  MD3LightTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {StatusBar} from 'react-native';
import {DarkTheme, LightTheme} from './Utils/Theme';
import Main from './Main';
import {useSelector} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
const LightMode = {
  ...MD3LightTheme,
  colors: LightTheme,
};

const DarkMode = {
  ...MD3DarkTheme,
  colors: DarkTheme,
};

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const {isDark} = useSelector(state => state.initial);
  const theme = isDark ? DarkMode : LightMode;

  changeNavigationBarColor(
    theme.colors.elevation.level1,
    isDark ? false : true,
  );

  return (
    <PaperProvider theme={theme}>
      <StatusBar
        backgroundColor={theme.colors.elevation.level1}
        barStyle={isDark ? 'light-content' : 'dark-content'}
      />
      <Main />
    </PaperProvider>
  );
};

export default App;
