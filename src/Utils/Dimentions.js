import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

// setting Screen constants
const windowPaddingHorizontal = responsiveWidth(1.5);

// Responsive font sizes
const bigTitle = responsiveFontSize(3);
const mediumTitle = responsiveFontSize(2.5);
const smallTitle = responsiveFontSize(2);

// Responsive Icon sizes
const iconSize = responsiveFontSize(2.8);
const mediumIconSize = responsiveFontSize(3.5);
const bigIconSize = responsiveFontSize(4.5);
export {
  responsiveHeight as windowHeight,
  responsiveWidth as windowWidth,
  windowPaddingHorizontal,
  smallTitle,
  bigTitle,
  mediumTitle,
  iconSize,
  bigIconSize,
  mediumIconSize,
};
