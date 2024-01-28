import {useState} from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import {TextInput, useTheme, Appbar, Button, Text} from 'react-native-paper';
import {windowWidth, mediumTitle} from '../Utils/Dimentions';
function My({navigation}) {
  return (
    <Appbar.Header mode="center-aligned">
      <Appbar.BackAction onPress={() => navigation.goBack()} />
    </Appbar.Header>
  );
}

const Signupscreen = ({navigation}) => {
  const theme = useTheme();
  const [email, setEmail] = useState();
  const [error, setError] = useState(false);
  return (
    <>
      <My navigation={navigation} />
      <View
        style={[styles.container, {backgroundColor: theme.colors.background}]}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.container}>
          <View>
            <Image
              source={require('../Assets/Images/logo.png')}
              style={styles.logo}
            />
            <Text
              variant="headlineSmall"
              style={{textAlign: 'center', marginBottom: windowWidth(2)}}>
              Create an acccount
            </Text>
            <TextInput
              style={{
                marginHorizontal: windowWidth(2),
                marginBottom: windowWidth(2),
              }}
              mode="outlined"
              label="Email"
              placeholder="Type something"
              error={error}
            />
            <TextInput
              style={{
                marginHorizontal: windowWidth(2),
                marginBottom: windowWidth(2),
              }}
              mode="outlined"
              secureTextEntry
              label="Password"
              placeholder="Type something"
              error={error}
            />
            <TextInput
              style={{
                marginHorizontal: windowWidth(2),
                marginBottom: windowWidth(2),
              }}
              mode="outlined"
              secureTextEntry
              label="Confirm Password"
              placeholder="Type something"
              error={error}
            />
            <Button
              mode="contained"
              style={{
                marginHorizontal: windowWidth(2),
                marginTop: windowWidth(5),
                borderRadius: windowWidth(2),
              }}
              labelStyle={styles.buttontext}
              onPress={() => {}}>
              Sign Up
            </Button>
            <Text style={styles.forgotpass}>
              By registering, you confirm that you accept our
              <Text style={styles.forgot}> Terms of service </Text> and
              <Text style={styles.forgot}> Privacy Policy</Text>
            </Text>

            <Text
              variant="titleSmall"
              onPress={() => navigation.goBack()}
              style={styles.register}>
              Have an acccount? Sign In
            </Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: windowWidth(20),
    height: windowWidth(20),
    marginBottom: windowWidth(5),
  },
  buttontext: {
    fontSize: mediumTitle,
    padding: windowWidth(1),
  },
  forgotpass: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 12,
    marginBottom: 10,
    padding: 15,
  },
  forgot: {
    color: 'orange',
    fontSize: 12,
  },
  register: {
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Signupscreen;
