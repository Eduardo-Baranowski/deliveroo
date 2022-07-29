import React from 'react';
import { ScrollView } from 'react-native';

import logo from '../assets/logo.png';
import CategoryCard from './CategoryCard';

function Categories() {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard imgUrl={logo} title="Testing 1" />
      <CategoryCard imgUrl={logo} title="Testing 2" />
      <CategoryCard imgUrl={logo} title="Testing 3" />
      <CategoryCard imgUrl={logo} title="Testing 4" />
      <CategoryCard imgUrl={logo} title="Testing 5" />
      <CategoryCard imgUrl={logo} title="Testing 6" />
    </ScrollView>
  );
}

export default Categories;
