import {View, StyleSheet} from 'react-native';
import {useState} from 'react';
import {
  Appbar,
  Switch,
  Card,
  Avatar,
  useTheme,
  TouchableRipple,
} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {setTheme} from '../Redux/Slices/initialSlice';
import {
  bigIconSize,
  windowWidth,
  windowHeight,
  mediumTitle,
  windowPaddingHorizontal,
} from '../Utils/Dimentions';
function My({navigation}) {
  return (
    <Appbar.Header mode="center-aligned">
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title="Settings" titleStyle={{fontSize: mediumTitle}} />
    </Appbar.Header>
  );
}

const Settings = ({navigation}) => {
  const dispatch = useDispatch();
  const {isDark} = useSelector(state => state.initial);
  const [isSwitchOn, setIsSwitchOn] = useState(isDark);
  const theme = useTheme();
  const onToggleSwitch = () => {
    dispatch(setTheme());
    setIsSwitchOn(!isSwitchOn);
  };

  return (
    <>
      <My navigation={navigation} />
      <View
        style={[Styles.container, {backgroundColor: theme.colors.background}]}>
        <TouchableRipple
          style={[Styles.box, {backgroundColor: theme.colors.surfaceVariant}]}>
          <Card.Title
            title={isSwitchOn ? 'Light Mode' : 'Dark Mode'}
            titleStyle={{fontSize: mediumTitle}}
            left={props => (
              <Avatar.Icon
                {...props}
                icon={isSwitchOn ? 'weather-sunny' : 'power-sleep'}
                size={bigIconSize}
              />
            )}
            right={props => (
              <Switch
                {...props}
                value={isSwitchOn}
                onValueChange={onToggleSwitch}
                style={{marginRight: windowWidth(3)}}
              />
            )}
          />
        </TouchableRipple>
      </View>
    </>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: windowPaddingHorizontal,
  },
  box: {
    borderRadius: windowWidth(2),
    marginTop: windowHeight(1.5),
  },
});
export default Settings;
