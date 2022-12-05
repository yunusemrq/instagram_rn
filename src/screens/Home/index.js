import React from 'react';
import Header from './components/Header';
import {SafeAreaView, Text, View} from 'react-native';
import {styles} from './styles';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
      </View>
    </SafeAreaView>
  );
};

export default Home;
