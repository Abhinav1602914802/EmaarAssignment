import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import list from '../screens/list';
import { DETAIL_SCREEN, LIST_SCREEN } from './ROUTES';
import details from '../screens/details';

const Stack = createNativeStackNavigator();

function index() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={LIST_SCREEN} component={list} />
        <Stack.Screen name={DETAIL_SCREEN} component={details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default index;