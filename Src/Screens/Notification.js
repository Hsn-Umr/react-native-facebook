import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function Notification() {
  return (
    <View style={styles.container}>
      <Text>Notifications</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {Notification};