import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {useState} from 'react';
import {
  Appbar,
  Avatar,
  Card,
  IconButton,
  Text,
  useTheme,
  Modal,
  Portal,
  Button,
  TouchableRipple,
} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {setUser} from '../Redux/Slices/initialSlice';
import {
  windowPaddingHorizontal,
  mediumTitle,
  smallTitle,
  windowHeight,
  windowWidth,
  bigIconSize,
  mediumIconSize,
} from '../Utils/Dimentions';
function My() {
  return (
    <Appbar.Header mode="center-aligned">
      <Appbar.Content title="Profile" titleStyle={{fontSize: mediumTitle}} />
    </Appbar.Header>
  );
}

export default function Profile({navigation}) {
  const theme = useTheme();
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const dispatch = useDispatch();
  const Logout = () => {
    setModalVisible(!isModalVisible);
    dispatch(setUser());
    navigation.replace('Login');
  };
  return (
    <>
      <My />
      <ScrollView
        contentContainerStyle={[
          style.container,
          {backgroundColor: theme.colors.background},
        ]}>
        <TouchableOpacity
          style={{position: 'relative', alignSelf: 'center'}}
          onPress={() => navigation.navigate('EditProfile')}>
          <Avatar.Image
            size={windowWidth(30)}
            source={{
              uri: 'https://gravatar.com/avatar/5f10117a38dc5a47e1f6e28348b5f9cb?s=400&d=mp&r=x',
            }}
            style={{marginBottom: windowHeight(1)}}
          />
          <Avatar.Icon
            size={mediumIconSize}
            icon="pencil"
            style={{
              position: 'absolute',
              bottom: windowHeight(1),
              right: windowHeight(1),
            }}
          />
        </TouchableOpacity>
        <Text style={{fontSize: mediumTitle, alignSelf: 'center'}}>
          Ankit Budhori
        </Text>
        <Text
          style={{
            marginBottom: windowHeight(2),
            fontSize: smallTitle,
            alignSelf: 'center',
          }}>
          ankitbudhori23@gmail.com
        </Text>
        <TouchableRipple
          onPress={() => {}}
          style={[style.box, {backgroundColor: theme.colors.surfaceVariant}]}>
          <Card.Title
            titleStyle={{fontSize: mediumTitle}}
            title="Card Title"
            left={props => (
              <Avatar.Icon {...props} icon="folder" size={bigIconSize} />
            )}
            right={props => (
              <IconButton
                {...props}
                icon="chevron-right"
                size={mediumIconSize}
              />
            )}
          />
        </TouchableRipple>
        <TouchableRipple
          style={[style.box, {backgroundColor: theme.colors.surfaceVariant}]}
          onPress={() => navigation.navigate('Settings')}>
          <Card.Title
            titleStyle={{fontSize: mediumTitle}}
            title="Settings"
            left={props => (
              <Avatar.Icon {...props} icon="cog" size={bigIconSize} />
            )}
            right={props => (
              <IconButton
                {...props}
                icon="chevron-right"
                size={mediumIconSize}
              />
            )}
          />
        </TouchableRipple>
        <TouchableRipple
          style={[style.box, {backgroundColor: theme.colors.surfaceVariant}]}
          onPress={() => navigation.navigate('HelpSupport')}>
          <Card.Title
            titleStyle={{fontSize: mediumTitle}}
            title="Help & Support"
            left={props => (
              <Avatar.Icon
                {...props}
                icon="help-circle-outline"
                size={bigIconSize}
              />
            )}
            right={props => (
              <IconButton
                {...props}
                icon="chevron-right"
                size={mediumIconSize}
              />
            )}
          />
        </TouchableRipple>
        <TouchableRipple
          style={[style.box, {backgroundColor: theme.colors.surfaceVariant}]}
          onPress={() => {}}>
          <Card.Title
            titleStyle={{fontSize: mediumTitle}}
            title="Privacy Policy"
            left={props => (
              <Avatar.Icon
                {...props}
                icon="note-text-outline"
                size={bigIconSize}
              />
            )}
            right={props => (
              <IconButton
                {...props}
                icon="chevron-right"
                size={mediumIconSize}
              />
            )}
          />
        </TouchableRipple>
        <TouchableRipple
          style={[style.box, {backgroundColor: theme.colors.surfaceVariant}]}
          onPress={toggleModal}>
          <Card.Title
            titleStyle={{fontSize: mediumTitle}}
            title="Sign out"
            left={props => (
              <Avatar.Icon {...props} icon="logout" size={bigIconSize} />
            )}
          />
        </TouchableRipple>
        <Portal>
          <Modal
            style={{alignItems: 'center'}}
            visible={isModalVisible}
            onDismiss={toggleModal}
            contentContainerStyle={{
              width: windowWidth(90),
              padding: windowWidth(3),
              borderRadius: windowWidth(4),
              alignItems: 'center',
              backgroundColor: theme.colors.background,
            }}>
            <Text style={{fontSize: mediumTitle}}>You want to logout?</Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: windowHeight(3),
                width: '100%',
              }}>
              <Button
                mode="contained"
                onPress={toggleModal}
                labelStyle={{fontSize: smallTitle}}
                style={{
                  borderRadius: windowWidth(2),
                  flex: 1,
                }}>
                No
              </Button>
              <Button
                mode="contained"
                onPress={Logout}
                labelStyle={{fontSize: smallTitle}}
                style={{
                  borderRadius: windowWidth(2),
                  flex: 1,
                  marginLeft: windowWidth(2),
                }}>
                Yes
              </Button>
            </View>
          </Modal>
        </Portal>
      </ScrollView>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: windowPaddingHorizontal,
  },
  box: {
    borderRadius: windowWidth(2),
    marginTop: windowHeight(1.5),
  },
});
