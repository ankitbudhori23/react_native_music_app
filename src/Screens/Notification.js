import {View, StyleSheet} from 'react-native';
import {Text, useTheme, IconButton} from 'react-native-paper';
import Menu from '../Components/Menu';
import {smallTitle, iconSize} from '../Utils/Dimentions';
const Notification = ({navigation}) => {
  const theme = useTheme();
  return (
    <>
      <Menu navigation={navigation} />
      <View
        style={[styles.container, {backgroundColor: theme.colors.background}]}>
        <IconButton icon="bell-off" iconColor="#959191" size={iconSize} />
        <Text style={{fontSize: smallTitle}}>No new notification</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Notification;
