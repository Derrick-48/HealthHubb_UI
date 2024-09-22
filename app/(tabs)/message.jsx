import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, TextInput, Button, Image } from "react-native";
import React, { useState } from "react";

const MessageScreen = () => {
  const [messages] = useState([
    { id: '1', text: 'Hello, how are you?', userImage: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: '2', text: 'Are you coming to the event?', userImage: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: '3', text: 'Let’s catch up soon!', userImage: 'https://randomuser.me/api/portraits/men/2.jpg' },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState('');
  const [replyText, setReplyText] = useState('');

  const openModal = (message) => {
    setSelectedMessage(message);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setReplyText('');
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => openModal(item.text)}>
      <View style={styles.messageItem}>
        <Image source={{ uri: item.userImage }} style={styles.userImage} />
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Reply to Message:</Text>
          <Text style={styles.selectedMessage}>{selectedMessage}</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Type your reply here..."
            value={replyText}
            onChangeText={setReplyText}
          />
          <View style={styles.buttonContainer}>
            <Button title="Send" onPress={() => { /* Handle sending reply */ closeModal(); }} />
            <Button title="Cancel" onPress={closeModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageText: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  selectedMessage: {
    fontSize: 18,
    marginBottom: 20,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
