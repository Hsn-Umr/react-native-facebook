import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function Groups() {
  return (
    <View style={styles.container}>
      <Text>Groups</Text>
      
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

export {Groups};