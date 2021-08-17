import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { DATE_JOINED, EMAIL, DOB, LOCATION, STATE, COUNTRY, POSTCODE, CITY } from '../../utility/appString';
import styles from './style';
import {registrationDateFormate, dobFormate} from '../../utility/helper';

export default index = ({ route, navigation }) => {

    const user = route.params.user;
    useEffect(()=>{
        navigation.setOptions({title: `${user.name.first} ${user.name.last}`})
    }, [user])

    return (
        <SafeAreaView>
            <View style={styles.mainContainer}>
                <View style={styles.avatarContainer}>
                    <Image source={{ uri: user.picture.large }} style={styles.avatar} />
                    <View style={styles.diamond}>
                        <Text style={styles.age}>{user.dob.age}</Text>
                    </View>
                </View>
                <View style={styles.details}>
                    <View style={styles.separator} />
                    <Text style={[styles.text, styles.topMargin]}>{`${EMAIL}: ${user.email}`}</Text>
                    <Text style={styles.text}>{`${DATE_JOINED}: ${registrationDateFormate(user.registered)}`}</Text>
                    <Text style={styles.text}>{`${DOB}: ${dobFormate(user.dob.date)}`}</Text>
                </View>
                <Text style={styles.heading}>{LOCATION}</Text>
                <View style={styles.separator} />
                <Text style={[styles.text, styles.topMargin]}>{`${CITY}: ${user.location.city}`}</Text>
                <Text style={styles.text}>{`${STATE}: ${user.location.state}`}</Text>
                <Text style={styles.text}>{`${COUNTRY}: ${user.location.country}`}</Text>
                <Text style={styles.text}>{`${POSTCODE}: ${user.location.postcode}`}</Text>
            </View>
        </SafeAreaView>
    )
}