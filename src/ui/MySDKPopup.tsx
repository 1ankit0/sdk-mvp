import React from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {useMySDK} from '../hooks/useMySdk';

export function MySDKPopup() {
  const {visible, title, message, hideUI} = useMySDK();

  return (
    <>
    <Modal transparent visible={visible} animationType="fade" onRequestClose={hideUI}>
      <View style={styles.backdrop}>
        <View style={styles.card}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>

          <Pressable style={styles.button} onPress={hideUI}>
            <Text style={styles.buttonText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
    color: '#111',
  },
  message: {
    fontSize: 15,
    color: '#444',
    marginBottom: 16,
    lineHeight: 21,
  },
  button: {
    backgroundColor: '#111',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
