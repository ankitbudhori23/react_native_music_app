import {View, ScrollView, FlatList, StyleSheet, Image} from 'react-native';
import {useEffect, useState} from 'react';
import {
  useTheme,
  Text,
  Divider,
  Card,
  IconButton,
  Button,
  TouchableRipple,
} from 'react-native-paper';
import {
  windowHeight,
  windowWidth,
  mediumTitle,
  smallTitle,
  iconSize,
  windowPaddingHorizontal,
} from '../Utils/Dimentions';
import {useSelector} from 'react-redux';
import axios from 'axios';

var myDate = new Date();
var hrs = myDate.getHours();
var greet;
if (hrs < 12) greet = 'Good Morning 👋';
else if (hrs >= 12 && hrs <= 17) greet = 'Good Afternoon 👋';
else if (hrs >= 17 && hrs <= 24) greet = 'Good Evening 👋';
export default function Home({navigation}) {
  const [data, setData] = useState([]);
  const theme = useTheme();
  const {tracks, quotes} = useSelector(state => state.data);
  useEffect(() => {
    axios.get('https://clxmtn-3000.csb.app/music').then(res => {
      setData(res.data);
    });
  }, []);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <View
        style={{
          marginTop: windowHeight(2),
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={{fontSize: mediumTitle, fontWeight: 'bold'}}>
            {greet}
          </Text>
          <Text style={{fontSize: smallTitle, fontWeight: 'bold'}}>Ankit</Text>
        </View>
        <IconButton
          icon="bell"
          size={iconSize}
          onPress={() => navigation.navigate('Notification')}
        />
      </View>
      <Divider marginTop={windowHeight(1)} marginBottom={windowHeight(1)} />
      <Card>
        <Card.Content>
          <>
            <Text style={{fontSize: smallTitle, lineHeight: windowWidth(6)}}>
              {quotes?.quote}
            </Text>
            <Text style={{marginTop: windowWidth(2), textAlign: 'right'}}>
              ~ {quotes?.author}
            </Text>
          </>
        </Card.Content>
      </Card>

      <View style={styles.popularSearch}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: mediumTitle, fontWeight: 'bold'}}>
            Trending Now
          </Text>
          <Button onPress={() => {}}>See All</Button>
        </View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={data}
          key={item => item.id}
          renderItem={({item}) => (
            <TouchableRipple
              style={{
                marginTop: windowWidth(2),
                marginRight: windowWidth(3),
              }}
              onPress={() => navigation.navigate('SongList', {data: item})}>
              <View>
                <Image
                  source={{uri: item.tracks[0].artwork}}
                  style={{width: windowWidth(32), height: windowWidth(32)}}
                />
                <Text style={{fontSize: smallTitle, marginTop: windowWidth(2)}}>
                  {item.name}
                </Text>
              </View>
            </TouchableRipple>
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: windowPaddingHorizontal,
  },
  popularSearch: {
    marginTop: windowHeight(3),
  },
});
