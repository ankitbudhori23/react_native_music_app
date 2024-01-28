import {View, Image, StyleSheet} from 'react-native';
import Slider from 'react-native-slider';
import React, {useState} from 'react';
import TrackPlayer, {
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';
import {useTheme, Text, Divider, IconButton} from 'react-native-paper';
import {
  bigIconSize,
  mediumIconSize,
  mediumTitle,
  smallTitle,
  windowPaddingHorizontal,
  windowWidth,
} from '../Utils/Dimentions';
import {useDispatch, useSelector} from 'react-redux';
import {
  pauseTrack,
  playTrack,
  nextTrack,
  prviousTrack,
  addToFavorites,
  removeFromFavorites,
} from '../Redux/Slices/DataSlice';
const Playing = () => {
  const playbackState = usePlaybackState();
  const progress = useProgress();
  const theme = useTheme();
  const dispatch = useDispatch();
  const {currentTrack, favorites} = useSelector(state => state.data);

  function secondsToMinutes(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = remainingSeconds.toString().padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  }

  return (
    <View
      showsVerticalScrollIndicator={false}
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <Image
        source={{uri: currentTrack?.artwork}}
        style={{
          width: '90%',
          height: '40%',
          alignSelf: 'center',

          borderRadius: 10,
        }}
      />
      <View
        style={{
          alignSelf: 'center',
          width: '90%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: windowWidth(4),
        }}>
        <View>
          <Text style={{fontSize: mediumTitle}}>{currentTrack?.title}</Text>
          <Text style={{fontSize: smallTitle}}>{currentTrack?.artist}</Text>
        </View>
        <View>
          {favorites.some(song => song.id === currentTrack.id) ? (
            <IconButton
              icon="heart"
              size={mediumIconSize}
              onPress={() => {
                dispatch(removeFromFavorites(currentTrack.id));
              }}
            />
          ) : (
            <IconButton
              icon="heart-outline"
              size={mediumIconSize}
              onPress={() => {
                dispatch(addToFavorites(currentTrack));
              }}
            />
          )}
        </View>
      </View>
      <Divider />
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          marginTop: 10,
          justifyContent: 'space-between',
          alignSelf: 'center',
        }}></View>
      <Slider
        minimumValue={0}
        maximumValue={progress.duration}
        value={progress.position}
        onSlidingComplete={e => TrackPlayer.seekTo(e)}
        thumbTintColor={theme.colors.primary}
        minimumTrackTintColor={theme.colors.tertiary}
      />

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontSize: smallTitle}}>
          {secondsToMinutes(progress.position.toFixed(0))}
        </Text>
        <Text style={{fontSize: smallTitle}}>
          {secondsToMinutes(progress.duration.toFixed(0))}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginVertical: windowWidth(4),
        }}>
        <IconButton
          icon="skip-previous"
          size={bigIconSize}
          onPress={() => dispatch(prviousTrack())}
        />
        <View>
          {playbackState.state !== 'playing' ? (
            <IconButton
              icon="play"
              mode="contained"
              animated={true}
              size={bigIconSize}
              onPress={() => dispatch(playTrack())}
            />
          ) : (
            <IconButton
              icon="pause"
              mode="contained"
              size={bigIconSize}
              animated={true}
              onPress={() => dispatch(pauseTrack())}
            />
          )}
        </View>

        <IconButton
          icon="skip-next"
          size={bigIconSize}
          onPress={() => dispatch(nextTrack())}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: windowPaddingHorizontal,
  },
});

export default Playing;
