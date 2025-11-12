import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  return (
    <>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Pressable 
      onPress={() => setModalVisible(true)}
      style={[styles.button, styles.buttonClose]}
      >
        <Text>Show Modal Message</Text>
      </Pressable>
    </View>
    <Modal
      animationType="slide"
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.container}>
        <View style={styles.modalView}>
          <Text>This is a modal</Text>
          <Pressable 
          onPress={() => setModalVisible(false)}
          style={[styles.button, styles.buttonClose]}
          >
            <Text>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
    </>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: '#2196F3',
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
