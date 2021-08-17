import React from 'react';
import { View, Modal, ActivityIndicator} from 'react-native';
import { LARGE, NONE } from '../../../utility/appString';

import styles from './style';

const index = (props) => {
    return (
        <Modal 
        visible={props.isLoad}
        transparent={true}
        animationType={NONE}>
            <View style={styles.background}>
                <View style={styles.activityIndicatorWrapper}>
                    <ActivityIndicator size={LARGE} color="#0000ff" />
                </View>
            </View>
        </Modal>
    )
}

export default index;