import {StyleSheet} from 'react-native';
import { BOLD, CENTER, LEFT, SPACE_BETWEEN, ROW, RIGHT } from '../../utility/cssStrings';
import { fontScale, normalize, normalScale, verticalScale, widthPercentageToDP } from '../../utility/dimension';

const styles = StyleSheet.create({
    card: {
        paddingVertical: normalize(10),
        paddingHorizontal: normalize(16),
        flexDirection: ROW,
        alignItems: CENTER
    },
    avatar:{
        width: normalScale(60),
        height: normalScale(60)
    },
    name: {
        fontSize: fontScale(16),
        fontWeight: BOLD,
        textAlign: LEFT,
        width: normalScale(120)
    },
    details:{
        marginLeft: normalize(10),
    },
    countryContainer:{
        flexDirection: ROW
    },
    countryTitle: {
        fontSize: fontScale(14),
        fontWeight: BOLD,
    },
    email: {
        marginTop: normalize(8),
        fontSize: fontScale(14)
    },
    country: {
        fontSize: fontScale(14)
    },
    separator:{
        height: verticalScale(1),
        backgroundColor: '#CDCDCD',
        width: widthPercentageToDP(90),
        alignSelf: CENTER
    },
    textContainer: {
        flexDirection: ROW, 
        justifyContent: SPACE_BETWEEN
    },
    date:{
        textAlign: RIGHT,
        width: normalScale(100)
    }
})

export default styles;