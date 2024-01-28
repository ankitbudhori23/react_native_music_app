import {View, StyleSheet, FlatList, ScrollView, Image} from 'react-native';
import {Text, useTheme, Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {windowPaddingHorizontal} from '../Utils/Dimentions';
import {playTrack} from '../Redux/Slices/DataSlice';
import axios from 'axios';
import {useState} from 'react';
export default function Explore() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const {loading, error, tracks} = useSelector(state => state.data);
  const getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/photos').then(res => {
      setData(res.data);
    });
  };

  return (
    <View style={[style.container, {backgroundColor: theme.colors.background}]}>
      <ScrollView>
        <Button mode="contained" onPress={getData}>
          Get Data
        </Button>
        {error && <Text>{error}</Text>}
        {loading ? (
          <Text>Loading</Text>
        ) : (
          <FlatList
            scrollEnabled={false}
            data={data}
            renderItem={({item}) => (
              <View
                style={{
                  width: '95%',
                  borderRadius: 10,
                  padding: 10,
                  marginTop: 10,
                  backgroundColor: theme.colors.secondaryContainer,
                  alignSelf: 'center',
                  alignItems: 'center',
                }}>
                <Image source={{uri: item.url}} width={100} height={100} />
                <Text
                  variant="titleMedium"
                  onPress={() => dispatch(playTrack(item))}>
                  {item.title}
                </Text>
                <Text variant="titleSmall" style={{marginTop: 10}}>
                  {item.id}
                </Text>
              </View>
            )}
          />
        )}
      </ScrollView>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: windowPaddingHorizontal,
  },
});
