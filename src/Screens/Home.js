//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// create a component
const Home = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{borderWidth: 1, paddingHorizontal: 100, paddingVertical: 15}}>
        <Text>camera permission</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          paddingHorizontal: 80,
          paddingVertical: 15,
          marginTop: 10,
        }}>
        <Text>Image Gallery permission</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          paddingHorizontal: 99,
          paddingVertical: 15,
          marginTop: 10,
        }}>
        <Text>Storage permission</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Home;
