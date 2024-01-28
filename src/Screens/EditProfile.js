import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import {Appbar, Avatar, TextInput, Button, useTheme} from 'react-native-paper';
import {
  windowHeight,
  windowWidth,
  mediumTitle,
  mediumIconSize,
  windowPaddingHorizontal,
  smallTitle,
} from '../Utils/Dimentions';
function My({navigation}) {
  return (
    <Appbar.Header mode="center-aligned">
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content
        title="Edit Profile"
        titleStyle={{fontSize: mediumTitle}}
      />
    </Appbar.Header>
  );
}
export default function EditProfile({navigation}) {
  const theme = useTheme();
  return (
    <>
      <My navigation={navigation} />

      <ScrollView
        contentContainerStyle={[
          style.container,
          {backgroundColor: theme.colors.background},
        ]}
        keyboardShouldPersistTaps="handled">
        {/* <KeyboardAvoidingView behavior="height"> */}
        <View
          style={{
            position: 'relative',
            alignItems: 'center',
            marginBottom: windowHeight(3),
            marginTop: windowHeight(3),
          }}>
          <TouchableOpacity onPress={() => ' '}>
            <Avatar.Image
              size={windowWidth(35)}
              source={{
                uri: 'https://gravatar.com/avatar/5f10117a38dc5a47e1f6e28348b5f9cb?s=400&d=mp&r=x',
              }}
              style={{marginBottom: windowHeight(1)}}
            />
            <Avatar.Icon
              size={mediumIconSize}
              icon="camera"
              style={{
                position: 'absolute',
                bottom: windowHeight(1.5),
                right: windowHeight(1),
              }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TextInput
            label="Name Surname"
            value={''}
            mode="outlined"
            onChangeText={''}
            style={{marginTop: windowHeight(1)}}
          />
          <TextInput
            label="Email"
            value={''}
            mode="outlined"
            onChangeText={''}
            style={{marginTop: windowHeight(1)}}
          />
          <TextInput
            label="Phone"
            value={''}
            mode="outlined"
            onChangeText={''}
            style={{marginTop: windowHeight(1)}}
          />
          <TextInput
            label="Location"
            value={''}
            mode="outlined"
            onChangeText={''}
            style={{marginTop: windowHeight(1)}}
          />
          <Button
            mode="contained"
            labelStyle={{
              fontSize: smallTitle,
              padding: windowWidth(1.5),
            }}
            style={{marginTop: windowHeight(4), borderRadius: windowWidth(2)}}
            onPress={() => console.log('Pressed')}>
            Save Changes
          </Button>
        </View>
        {/* </KeyboardAvoidingView> */}
      </ScrollView>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: windowPaddingHorizontal,
    // justifyContent: 'center', //new added
  },
  box: {
    backgroundColor: '#AEAEBE',
    borderRadius: 20,
    margin: 10,
    marginBottom: -1,
  },
});
