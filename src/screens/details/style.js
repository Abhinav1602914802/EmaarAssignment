import { StyleSheet } from "react-native"
import { ABSOLUTE, BOLD, CENTER } from "../../utility/cssStrings";
import { fontScale, normalize, normalScale, verticalScale, widthPercentageToDP } from "../../utility/dimension"

const styles = new StyleSheet.create({
    avatar: {
        height: verticalScale(150),
        width: normalScale(150),
    },
    avatarContainer: {
        height: verticalScale(150),
        width: normalScale(150),
        alignSelf: CENTER,
        marginTop: normalize(20)
    },
    diamond: {
        width: 60,
        height: 60,
        backgroundColor: "#ffdab9",
        borderColor: '#ffea00',
        borderWidth: 3,
        transform: [{ rotate: "45deg" }],
        position: ABSOLUTE,
        bottom: '-5%',
        right: '-8%',
        justifyContent: CENTER,
        alignItems: CENTER
    },
    age: {
        transform: [{ rotate: "-45deg" }],
        fontSize: fontScale(16),
        fontWeight: BOLD
    },
    separator: {
        height: verticalScale(2),
        backgroundColor: '#000000',
        width: widthPercentageToDP(90),
        alignSelf: CENTER
    },
    mainContainer: {
        paddingHorizontal: normalize(20)
    },
    details: {
        marginTop: normalize(30)
    },
    text: {
        fontSize: fontScale(14),
        fontWeight: '600'
    },
    topMargin: {
        marginTop: normalize(10)
    },
    heading: {
        marginTop: normalize(20),
        fontSize: fontScale(17),
        fontWeight: BOLD
    }
})

export default styles;