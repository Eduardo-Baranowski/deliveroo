import React, { useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import {
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
  AdjustmentsIcon,
} from 'react-native-heroicons/outline';

import { useNavigation } from '@react-navigation/native';

import logo from '../assets/logo.png';

function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <View className="flex-row pb-3 items-center mx-4 space-x-2 mt-10">
        <Image source={logo} className="h-7 w-7 bg-gray-300 p-4 rounded-full" />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
