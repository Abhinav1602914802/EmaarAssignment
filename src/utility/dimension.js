import { Dimensions, Platform, PixelRatio } from 'react-native';

const { height, width } = Dimensions.get("window");
const guidelinebaseheight = 568;
const guidelinebasewidth = 320;
const normalScale = size => width / guidelinebasewidth * size;
const verticalScale = size => height / guidelinebaseheight * size;
const scale = width / guidelinebasewidth;

function  fontScale(size) {
  const newSize = size * scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}
function normalize(size) {
  let scale = width / 320;
  return Math.round(scale * size);
}
const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  // Convert string input to decimal number
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};
const heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent);
return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};

export { normalScale, verticalScale, fontScale, normalize,widthPercentageToDP,heightPercentageToDP };



/// normalScale for width
/// vertical for height 
/// fontScale for font
/// normalize for margin , padding 