import {View, StyleSheet, Image, FlatList} from 'react-native';
import {Text, useTheme, IconButton, Appbar, Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {
  pauseTrack,
  removeFromFavorites,
  resumeTrack,
} from '../Redux/Slices/DataSlice';
import {
  mediumTitle,
  windowPaddingHorizontal,
  iconSize,
  smallTitle,
  mediumIconSize,
  windowWidth,
} from '../Utils/Dimentions';
import {playTrack} from '../Redux/Slices/DataSlice';
import {usePlaybackState} from 'react-native-track-player';
const Header = ({navigation}) => {
  return (
    <Appbar.Header elevated={true}>
      <Appbar.BackAction
        onPress={() => {
          navigation.goBack();
        }}
      />
    </Appbar.Header>
  );
};
export default function FavoriteSongs({navigation}) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const {favorites, currentTrack} = useSelector(state => state.data);
  const playbackState = usePlaybackState();
  return (
    <>
      <Header navigation={navigation} />
      <View
        style={[style.container, {backgroundColor: theme.colors.background}]}>
        <View
          style={{
            marginVertical: 10,
            borderRadius: 10,
            padding: 10,
            backgroundColor: theme.colors.elevation.level3,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={{uri: 'https://picsum.photos/200/300'}}
              width={80}
              height={80}
              borderRadius={10}
            />
            <View style={{marginLeft: 12}}>
              <Text style={{fontSize: mediumTitle}}>My Favorite Songs</Text>
              <Text style={{fontSize: smallTitle}}>
                Playlist | {favorites.length} Songs
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 12,
              justifyContent: 'space-between',
            }}>
            <Button
              mode="outlined"
              icon="shuffle"
              style={{width: windowWidth(45)}}
              labelStyle={{fontSize: smallTitle}}>
              Suffle
            </Button>
            <Button
              mode="contained"
              icon="play"
              style={{width: windowWidth(45)}}
              labelStyle={{fontSize: smallTitle}}
              onPress={() => dispatch(playTrack(favorites))}>
              Play
            </Button>
          </View>
        </View>
        <FlatList
          data={favorites}
          renderItem={({item}) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 10,
                padding: 5,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={{uri: item.artwork}}
                  width={70}
                  height={70}
                  style={{marginHorizontal: 10}}
                  borderRadius={12}
                />
                <View style={{marginLeft: 5}}>
                  <Text style={{fontSize: mediumTitle}}>{item.title}</Text>
                  <Text style={{fontSize: smallTitle}}>{item.artist}</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <IconButton
                  icon="heart"
                  size={iconSize}
                  onPress={() => dispatch(removeFromFavorites(item.id))}
                />
                {currentTrack?.id === item.id ? (
                  playbackState.state === 'playing' ? (
                    <IconButton
                      icon="pause"
                      mode="contained"
                      size={iconSize}
                      onPress={() => dispatch(pauseTrack())}
                    />
                  ) : (
                    <IconButton
                      icon="play"
                      mode="contained"
                      size={iconSize}
                      onPress={() => dispatch(resumeTrack())}
                    />
                  )
                ) : (
                  <IconButton
                    icon="play"
                    mode="contained"
                    size={iconSize}
                    onPress={() => dispatch(playTrack(item))}
                  />
                )}
              </View>
            </View>
          )}
        />
      </View>
    </>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: windowPaddingHorizontal,
  },
});
