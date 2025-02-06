import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const ViewBoxesWithColorAndText = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ height: 50, flexDirection: 'row' }}>
        <View
          style={{
            backgroundColor: '#C7FFD8',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 3,
            borderColor: 'black', 
            borderRadius: 0, 
          }}
        >
          <Text style={{ fontStyle: 'italic', color: 'black' }}>
            <b>Sherwin</b> Relampagos
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ViewBoxesWithColorAndText;