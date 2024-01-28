import {View, StyleSheet, Image, ScrollView} from 'react-native';
import {
  Text,
  useTheme,
  Appbar,
  TouchableRipple,
  Menu,
  Portal,
  Modal,
  Button,
  TextInput,
  Divider,
} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {
  mediumTitle,
  windowPaddingHorizontal,
  windowWidth,
  iconSize,
  smallTitle,
  windowHeight,
} from '../Utils/Dimentions';
import {createPlaylist} from '../Redux/Slices/DataSlice';

const Header = ({open}) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Appbar.Header elevated={true}>
      <Appbar.Content title="Library" titleStyle={{fontSize: mediumTitle}} />
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
        <Menu.Item
          onPress={() => {
            closeMenu();
            open(true);
          }}
          title="Create Playlist"
        />
        <Menu.Item onPress={() => closeMenu} title="Item 2" />
      </Menu>
    </Appbar.Header>
  );
};
export default function Library({navigation}) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = useState(false);
  const {favorites, playlists} = useSelector(state => state.data);
  const [pname, setPname] = useState('');
  const createP = () => {
    if (pname) {
      dispatch(createPlaylist(pname));
      setModalVisible(false);
      setPname('');
    }
  };
  return (
    <>
      <Header open={setModalVisible} />
      <ScrollView
        style={[style.container, {backgroundColor: theme.colors.background}]}>
        <TouchableRipple
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
            padding: 5,
          }}
          onPress={() => navigation.navigate('FavoriteSongs')}>
          <>
            <Image
              source={{uri: 'https://picsum.photos/200/300'}}
              width={80}
              height={80}
            />
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: mediumTitle}}>Favorite Songs</Text>
              <Text style={{fontSize: smallTitle}}>
                {favorites.length} Songs
              </Text>
            </View>
          </>
        </TouchableRipple>
        <Divider marginTop={5} />
        {playlists.map((a, i) => (
          <TouchableRipple
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              padding: 5,
            }}
            onPress={() =>
              navigation.navigate('SongList', {
                data: a,
              })
            }>
            <>
              <Image
                source={{uri: 'https://picsum.photos/200/300'}}
                width={65}
                height={65}
              />
              <View style={{marginLeft: 10}}>
                <Text style={{fontSize: mediumTitle}}>{a.name}</Text>
                <Text style={{fontSize: smallTitle}}>
                  {a.tracks.length} Songs
                </Text>
              </View>
            </>
          </TouchableRipple>
        ))}
      </ScrollView>
      <Portal>
        <Modal
          style={{alignItems: 'center'}}
          visible={isModalVisible}
          onDismiss={() => setModalVisible(!isModalVisible)}
          contentContainerStyle={{
            width: windowWidth(90),
            padding: windowWidth(3),
            borderRadius: windowWidth(4),
            alignItems: 'center',
            backgroundColor: theme.colors.background,
          }}>
          <Text style={{fontSize: mediumTitle}}>Create Playlist</Text>
          <TextInput
            style={{
              width: '100%',
              marginTop: windowWidth(3),
            }}
            mode="outlined"
            label="Playlist Name"
            placeholder="Playlist Name"
            value={pname}
            onChangeText={a => setPname(a)}
          />
          <View
            style={{
              flexDirection: 'row',
              marginTop: windowHeight(3),
              width: '100%',
            }}>
            <Button
              mode="outlined"
              onPress={() => setModalVisible(!isModalVisible)}
              labelStyle={{fontSize: smallTitle}}
              style={{
                borderRadius: windowWidth(2),
                flex: 1,
              }}>
              Cancel
            </Button>

            <Button
              mode="contained"
              onPress={createP}
              labelStyle={{fontSize: smallTitle}}
              style={{
                borderRadius: windowWidth(2),
                flex: 1,
                marginLeft: windowWidth(2),
              }}>
              Create
            </Button>
          </View>
        </Modal>
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
