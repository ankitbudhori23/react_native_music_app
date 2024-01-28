import {StyleSheet, Linking, ScrollView} from 'react-native';
import React from 'react';
import {
  Appbar,
  useTheme,
  Card,
  Avatar,
  TouchableRipple,
} from 'react-native-paper';
import {
  windowPaddingHorizontal,
  mediumTitle,
  windowHeight,
  windowWidth,
  bigIconSize,
} from '../Utils/Dimentions';
function My({navigation}) {
  return (
    <Appbar.Header mode="center-aligned">
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content
        title="Help Center"
        titleStyle={{fontSize: mediumTitle}}
      />
    </Appbar.Header>
  );
}
const HelpSupport = ({navigation}) => {
  const theme = useTheme();
  return (
    <>
      <My navigation={navigation} />
      <ScrollView
        style={[Styles.container, {backgroundColor: theme.colors.background}]}>
        <TouchableRipple
          onPress={() => Linking.openURL(`tel: 1234567890`)}
          backgroundColor={theme.colors.surfaceVariant}
          style={Styles.box}>
          <Card.Title
            titleStyle={{fontSize: mediumTitle}}
            title="Customer Service"
            left={props => (
              <Avatar.Icon {...props} icon="phone" size={bigIconSize} />
            )}
          />
        </TouchableRipple>
        <TouchableRipple
          onPress={() => Linking.openURL(`mailto:info@studifysuccess.com`)}
          backgroundColor={theme.colors.surfaceVariant}
          style={Styles.box}>
          <Card.Title
            titleStyle={{fontSize: mediumTitle}}
            title="Email"
            left={props => (
              <Avatar.Icon {...props} icon="email" size={bigIconSize} />
            )}
          />
        </TouchableRipple>
        <TouchableRipple
          onPress={() =>
            Linking.openURL('whatsapp://send?text=Hi!' + '&phone=918743967234')
          }
          backgroundColor={theme.colors.surfaceVariant}
          style={Styles.box}>
          <Card.Title
            titleStyle={{fontSize: mediumTitle}}
            title="Whatsapp"
            left={props => (
              <Avatar.Icon {...props} icon="whatsapp" size={bigIconSize} />
            )}
          />
        </TouchableRipple>

        <TouchableRipple
          onPress={() => Linking.openURL('https://www.studifysuccess.com')}
          backgroundColor={theme.colors.surfaceVariant}
          style={Styles.box}>
          <Card.Title
            titleStyle={{fontSize: mediumTitle}}
            title="Website"
            left={props => (
              <Avatar.Icon {...props} icon="web" size={bigIconSize} />
            )}
          />
        </TouchableRipple>
        <TouchableRipple
          onPress={() =>
            Linking.openURL('https://www.facebook.com/studifysuccess.ss')
          }
          backgroundColor={theme.colors.surfaceVariant}
          style={Styles.box}>
          <Card.Title
            titleStyle={{fontSize: mediumTitle}}
            title="Facebook"
            left={props => (
              <Avatar.Icon {...props} icon="facebook" size={bigIconSize} />
            )}
          />
        </TouchableRipple>
        <TouchableRipple
          onPress={() => Linking.openURL('https://twitter.com/studifysuccess')}
          backgroundColor={theme.colors.surfaceVariant}
          style={Styles.box}>
          <Card.Title
            titleStyle={{fontSize: mediumTitle}}
            title="Twitter"
            left={props => (
              <Avatar.Icon {...props} icon="twitter" size={bigIconSize} />
            )}
          />
        </TouchableRipple>
        <TouchableRipple
          onPress={() =>
            Linking.openURL('https://www.instagram.com/studifysuccess')
          }
          backgroundColor={theme.colors.surfaceVariant}
          style={Styles.box}>
          <Card.Title
            titleStyle={{fontSize: mediumTitle}}
            title="Instagram"
            left={props => (
              <Avatar.Icon {...props} icon="instagram" size={bigIconSize} />
            )}
          />
        </TouchableRipple>
        <TouchableRipple
          onPress={() =>
            Linking.openURL('vnd.youtube://channel/studifysuccess').catch(err =>
              console.error('youtube', err),
            )
          }
          backgroundColor={theme.colors.surfaceVariant}
          style={Styles.box}>
          <Card.Title
            titleStyle={{fontSize: mediumTitle}}
            title="Youtube"
            left={props => (
              <Avatar.Icon {...props} icon="youtube" size={bigIconSize} />
            )}
          />
        </TouchableRipple>
      </ScrollView>
    </>
  );
};

const Styles = StyleSheet.create({
  container: {
    paddingHorizontal: windowPaddingHorizontal,
    flex: 1,
  },
  box: {
    borderRadius: windowWidth(2),
    marginTop: windowHeight(1.5),
  },
});
export default HelpSupport;
