import {View, StyleSheet, Image, FlatList} from 'react-native';
import {
  Text,
  useTheme,
  IconButton,
  Appbar,
  Button,
  TouchableRipple,
  Divider,
  Modal as ModalPaper,
  Portal,
} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import Modal from 'react-native-modal';
import {
  pauseTrack,
  removeFromFavorites,
  resumeTrack,
  addToPlaylist,
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
export default function SongList({navigation, route}) {
  const info = route.params.data;
  const theme = useTheme();
  const dispatch = useDispatch();
  const {currentTrack, playlists} = useSelector(state => state.data);
  const playbackState = usePlaybackState();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState();
  const [isModalVisible3, setModalVisible3] = useState(false);
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
              <Text style={{fontSize: mediumTitle}}>{info.name}</Text>
              <Text style={{fontSize: smallTitle}}>
                Playlist | {info.tracks.length} Songs
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
              onPress={() => dispatch(playTrack(info.tracks))}>
              Play
            </Button>
          </View>
        </View>
        <FlatList
          data={info.tracks}
          renderItem={({item}) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical: 10,
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
                <IconButton
                  icon="dots-vertical"
                  size={iconSize}
                  onPress={() => {
                    setModalVisible(!isModalVisible);
                    setModalVisible2(item);
                  }}
                />
              </View>
            </View>
          )}
        />
      </View>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(!isModalVisible)}
        style={{justifyContent: 'flex-end', margin: 0}}
        onBackButtonPress={() => setModalVisible(!isModalVisible)}>
        <View
          style={{
            backgroundColor: theme.colors.background,
            padding: 15,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={{uri: isModalVisible2?.artwork}}
              width={60}
              height={60}
              style={{marginHorizontal: 10}}
              borderRadius={12}
            />
            <View style={{marginLeft: 5}}>
              <Text style={{fontSize: mediumTitle}}>
                {isModalVisible2?.title}
              </Text>
              <Text style={{fontSize: smallTitle}}>
                {isModalVisible2?.artist}
              </Text>
            </View>
          </View>
          <Divider marginVertical={windowWidth(2)} />
          <TouchableRipple onPress={() => {}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <IconButton icon="heart" />
              <Text style={{fontSize: smallTitle}}>Add to Favorites</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple
            onPress={() => {
              setModalVisible(!isModalVisible);
              setModalVisible3(!isModalVisible3);
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <IconButton icon="playlist-plus" />
              <Text style={{fontSize: smallTitle}}>Add to Playlist</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <IconButton icon="music-note-plus" />
              <Text style={{fontSize: smallTitle}}>Play Next</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <IconButton icon="account" />
              <Text style={{fontSize: smallTitle}}>View Artist</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <IconButton icon="share" />
              <Text style={{fontSize: smallTitle}}>Share</Text>
            </View>
          </TouchableRipple>
        </View>
      </Modal>
      <Portal>
        <ModalPaper
          style={{alignItems: 'center'}}
          visible={isModalVisible3}
          onDismiss={() => setModalVisible3(!isModalVisible3)}
          contentContainerStyle={{
            width: windowWidth(90),
            padding: windowWidth(3),
            borderRadius: windowWidth(4),
            backgroundColor: theme.colors.background,
          }}>
          <Text
            style={{
              fontSize: mediumTitle,
              marginBottom: windowWidth(2),
              textAlign: 'center',
            }}>
            Select a Playlist
          </Text>
          {playlists.map((item, index) => (
            <TouchableRipple
              key={index}
              onPress={() => {
                dispatch(addToPlaylist({song: isModalVisible2, id: item.id}));
                setModalVisible3(!isModalVisible3);
              }}
              style={{
                paddingVertical: windowWidth(3),
                paddingHorizontal: windowWidth(3),
              }}>
              <Text style={{fontSize: smallTitle}}>{item.name}</Text>
            </TouchableRipple>
          ))}
        </ModalPaper>
      </Portal>
    </>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: windowPaddingHorizontal,
  },
});
