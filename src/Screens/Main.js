import React, {useEffect, useState} from 'react';
import BottomTabNavigation from '../Navigation/BottomTabNavigation';
import TrackPlayer, {Capability} from 'react-native-track-player';
import Floatsong from '../Components/Floatsong';
import NetInfo from '@react-native-community/netinfo';
import {useDispatch} from 'react-redux';
import {setIsConnected} from '../Redux/Slices/initialSlice';
import {quotes} from '../Utils/Quotes';
import {addQuote} from '../Redux/Slices/DataSlice';
import {AppState} from 'react-native';
export default function Main({navigation}) {
  // useEffect(() => {
  //   const handleAppStateChange = nextAppState => {
  //     if (AppState.currentState === 'active' && nextAppState === 'background') {
  //     }
  //   };

  //   // Subscribe to AppState changes
  //   AppState.addEventListener('change', handleAppStateChange);

  //   // Clean up when component unmounts
  //   return () => {
  //     AppState.removeEventListener('change', handleAppStateChange);
  //   };
  // }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addQuote(quotes[Math.floor(Math.random() * quotes.length - 1)]));
    init_music();
  }, []);

  useEffect(() => {
    // Subscribe to network state changes
    const unsubscribe = NetInfo.addEventListener(s => {
      dispatch(setIsConnected(s.isConnected));
    });

    // Clean up the subscription when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  const init_music = async () => {
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        // Media controls capabilities
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.Stop,
        ],

        // Capabilities that will show up when the notification is in the compact form on Android
        compactCapabilities: [Capability.Play, Capability.Pause],

        // Icons for the notification on Android (if you don't like the default ones)
      });
      // await TrackPlayer.add(songsList);
    } catch (e) {
      console.log('main.js', e);
    }
  };

  return (
    <>
      <Floatsong navigation={navigation} />
      <BottomTabNavigation />
    </>
  );
}
