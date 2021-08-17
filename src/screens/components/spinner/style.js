import { Dimensions, StyleSheet } from "react-native";
import { CENTER } from "../../../utility/cssStrings";
import { normalScale } from "../../../utility/dimension";

const height = Dimensions.get('window').height;

const styles = new StyleSheet.create({
    background:{ 
        height: height, 
        justifyContent: CENTER, 
        alignItems: CENTER, 
        backgroundColor: '#00000040' 
    },
    activityIndicatorWrapper: { 
        backgroundColor: '#ffffff', 
        height: normalScale(80), 
        width: normalScale(80), 
        justifyContent: CENTER, 
        alignItems: CENTER, 
        elevation: 2, 
        borderRadius: 8 
    }
})

export default styles