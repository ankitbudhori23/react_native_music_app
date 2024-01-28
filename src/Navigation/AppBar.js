import {Appbar} from 'react-native-paper';
import {iconSize} from '../Utils/Dimentions';
const AppBar = ({title, icon, nav}) => {
  return (
    <Appbar.Header
      style={{
        // height: 50,
        backgroundColor: theme.colors.elevation.level1,
        elevation: 10,
      }}
      elevated={true}>
      <Appbar.Content title={title} />
      <Appbar.Action
        icon={icon}
        size={iconSize}
        onPress={() => navigation.navigate(nav)}
      />
    </Appbar.Header>
  );
};

export default AppBar;
