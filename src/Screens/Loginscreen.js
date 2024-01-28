import {useState} from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import {TextInput, Text, useTheme, Button} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {setUser} from '../Redux/Slices/initialSlice';
import {windowWidth, mediumTitle} from '../Utils/Dimentions';

const Loginscreen = ({navigation}) => {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();

  const login = () => {
    if (email !== 'ankit' || password !== 'ankit') {
      setError(true);
    } else {
      dispatch(setUser());
      navigation.replace('Main');
    }
  };

  return (
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
          <Image
            source={require('../Assets/Images/logo2.png')}
            style={styles.logo2}
          />
          <TextInput
            style={{
              marginHorizontal: windowWidth(2),
              marginBottom: windowWidth(2),
            }}
            mode="outlined"
            label="Email"
            placeholder="Enter your email"
            labelValue={email}
            onChangeText={e => {
              setEmail(e), setError(false);
            }}
            error={error}
          />
          <TextInput
            style={{marginHorizontal: windowWidth(2)}}
            mode="outlined"
            secureTextEntry
            label="Password"
            placeholder="Enter your password"
            lablevalue={password}
            onChangeText={e => {
              setPassword(e), setError(false);
            }}
            error={error}
          />

          <Button
            mode="contained"
            style={{
              marginHorizontal: windowWidth(2),
              marginTop: windowWidth(10),
              borderRadius: windowWidth(2),
            }}
            loading={loading}
            labelStyle={styles.buttontext}
            onPress={login}>
            {!loading && 'Sign In'}
          </Button>
          <Text variant="titleSmall" style={styles.forgotpass}>
            Forgot Password?
          </Text>

          <Text
            variant="titleSmall"
            onPress={() => navigation.navigate('Signup')}
            style={styles.register}>
            Don't have an account? Create here
          </Text>
        </View>
      </ScrollView>
    </View>
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
  },
  logo2: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: windowWidth(60),
    height: windowWidth(15),
    marginBottom: windowWidth(5),
  },
  buttontext: {
    fontSize: mediumTitle,
    padding: windowWidth(1),
  },
  forgotpass: {
    textAlign: 'center',

    marginTop: windowWidth(5),
  },

  register: {
    textAlign: 'center',
    marginTop: windowWidth(5),
  },
});
export default Loginscreen;
