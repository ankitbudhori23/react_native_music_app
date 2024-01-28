import React from 'react';
import {Menu, Divider, Appbar} from 'react-native-paper';
import {iconSize, mediumTitle} from '../Utils/Dimentions';
const More = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <Appbar.Header elevated={true}>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content
        title="Notifications"
        titleStyle={{fontSize: mediumTitle}}
      />
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Appbar.Action
            icon="dots-vertical"
            size={iconSize}
            onPress={openMenu}
          />
        }>
        <Menu.Item onPress={() => closeMenu} title="Item 1" />
        <Menu.Item onPress={() => closeMenu} title="Item 2" />
        <Divider />
        <Menu.Item onPress={() => closeMenu} title="Item 3" />
      </Menu>
    </Appbar.Header>
  );
};

export default More;
