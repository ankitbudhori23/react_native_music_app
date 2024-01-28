import {
  IconButton,
  Text,
  ProgressBar,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import {useState, useEffect} from 'react';
import {StyleSheet, View, Image, Keyboard} from 'react-native';
import {
  resumeTrack,
  pauseTrack,
  nextTrack,
  prviousTrack,
  setCurrentTrack,
  stopTrack,
} from '../Redux/Slices/DataSlice';
import {useDispatch, useSelector} from 'react-redux';
import TrackPlayer, {
  usePlaybackState,
  useTrackPlayerEvents,
  useProgress,
} from 'react-native-track-player';
import {smallTitle} from '../Utils/Dimentions';
const Floatsong = ({navigation}) => {
  const {currentTrack} = useSelector(state => state.data);
  const {isConnected} = useSelector(state => state.initial);
  const dispatch = useDispatch();
  const playbackState = usePlaybackState();
  const progress = useProgress();
  const [t, sett] = useState({});
  const theme = useTheme();
  useTrackPlayerEvents(['playback-track-changed'], async () => {
    TrackPlayer.getActiveTrack().then(e => {
      dispatch(setCurrentTrack(e));
      // console.log(`Title: ${e.title}`);
    });
    var curr = await TrackPlayer.getActiveTrackIndex();
    var q = await TrackPlayer.getQueue();
    var a = q.length - 1 - curr;
    sett({curr, a});
  });

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <>
      {playbackState.state !== 'stopped' &&
        playbackState.state !== 'none' &&
        !isKeyboardVisible && (
          <TouchableRipple
            style={[
              styles.bottom,
              {backgroundColor: theme.colors.surfaceVariant},
            ]}
            onPress={() => navigation.navigate('Playing')}>
            <>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={{uri: currentTrack?.artwork}}
                    style={{width: 50, height: 50, marginHorizontal: 5}}
                  />
                  <View>
                    <Text style={{fontSize: smallTitle}}>
                      {currentTrack?.title}
                    </Text>
                    <Text style={{fontSize: smallTitle}}>
                      {currentTrack?.artist}
                    </Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {t.curr != 0 && (
                    <IconButton
                      mode="contained"
                      icon="skip-previous"
                      onPress={() => dispatch(prviousTrack())}
                    />
                  )}

                  {'playing' == playbackState.state ? (
                    <IconButton
                      mode="contained"
                      icon="pause"
                      animated={true}
                      onPress={() => dispatch(pauseTrack())}
                    />
                  ) : (
                    <IconButton
                      mode="contained"
                      icon="play"
                      animated={true}
                      onPress={() => dispatch(resumeTrack())}
                    />
                  )}
                  {t.a != 0 && (
                    <IconButton
                      mode="contained"
                      icon="skip-next"
                      onPress={() => dispatch(nextTrack())}
                    />
                  )}
                </View>
              </View>
              <ProgressBar
                progress={
                  progress.position ? progress.position / progress.duration : 0
                }
                style={{marginTop: 3}}
              />
            </>
          </TouchableRipple>
        )}
      {!isConnected &&
        (dispatch(stopTrack()),
        (
          <View
            style={[
              styles.bottom,
              {
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme.colors.surfaceVariant,
              },
            ]}>
            <Text style={{fontSize: smallTitle}}>No Internet Connection</Text>
          </View>
        ))}
    </>
  );
};

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    bottom: 65,
    width: '100%',
    height: 60,
    elevation: 1,
    zIndex: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});

export default Floatsong;
