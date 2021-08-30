import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, FlatList, Image, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { DETAIL_SCREEN } from '../../navigators/ROUTES';
// import { getUser } from '../../redux/actions';
import { COUNTRY, EMPTY_ARRAY, ERROR, SOMETHING_WRONG } from '../../utility/appString';
import styles from './style';
import Spinner from '../components/spinner';
import { registrationDateFormate } from '../../utility/helper';
import {getUser} from '../../redux/reducers/getUsers';

export default index = ({ navigation }) => {

    const dispatch = useDispatch();
    const responseData = useSelector(({ getUsers }) => getUsers.users);

    const [userArray, setUserArray] = useState(EMPTY_ARRAY);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0)

    useEffect(() => {
        page===0 && setLoading(true)
        dispatch(getUser(page))
    }, [page])

    const loadMoreData = () => {
        setPage(page + 1)
    }

    useEffect(() => {
        if (responseData) {
            setLoading(false)
            if (responseData.status === 200) {
                setUserArray(page === 0 ? responseData.data.results : [...userArray, ...responseData.data.results])
            }
            else{
                Alert.alert(ERROR, SOMETHING_WRONG)
            }
        }
    }, [responseData])

    const onPressCard = (user) => {
        navigation.navigate(DETAIL_SCREEN, {
            user: user
        })
    }

    const itemSeparatorComponent = () => (
        <View style={styles.separator} />
    )

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => onPressCard(item)} style={styles.card}>
            <Image source={{ uri: item.picture.medium }} style={styles.avatar} />
            <View style={styles.details}>
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{item.name.first} {item.name.last}</Text>
                    <Text style={styles.date}>{registrationDateFormate(item.registered)}</Text>
                </View>
                <Text style={styles.email}>{item.email}</Text>
                <View style={styles.countryContainer}>
                    <Text style={styles.countryTitle}>{COUNTRY} | </Text>
                    <Text style={styles.country}>{item.location.country}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

    return (
        <SafeAreaView>
                <Spinner isLoad={loading}/>
                <FlatList
                    data={userArray}
                    renderItem={renderItem}
                    keyExtractor={item => item.email}
                    ItemSeparatorComponent={itemSeparatorComponent}
                    onEndReachedThreshold={0.9}
                    onEndReached={loadMoreData}
                />
        </SafeAreaView>
    )
}