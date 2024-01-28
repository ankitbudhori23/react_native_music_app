import {Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Onboard = ({navigation}) => {
  return (
    <>
      <Onboarding
        onSkip={() => navigation.replace('Login')}
        onDone={() => navigation.replace('Login')}
        pages={[
          {
            backgroundColor: '#a6e4d0',
            image: <Image source={require('../Assets/Images/img1.png')} />,
            title: 'Connect to the world',
            subtitle: 'A New Way To Connect With The World',
          },
          {
            backgroundColor: '#fdeb93',
            image: <Image source={require('../Assets/Images/img2.png')} />,
            title: 'Share Your Favorites',
            subtitle: 'Share Your Thoughts With Similar Kind Of People',
          },
          {
            backgroundColor: '#e9bcbe',
            image: <Image source={require('../Assets/Images/img3.png')} />,
            title: 'Become The Star',
            subtitle: 'Let The Spot Light Capture You',
          },
        ]}
      />
    </>
  );
};

export default Onboard;
