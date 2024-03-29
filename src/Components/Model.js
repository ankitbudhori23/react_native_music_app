import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
const Model = ({open}) => {
  const [isModalVisible, setModalVisible] = useState(open);
  console.log(open);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={{flex: 1}}>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal isVisible={isModalVisible}>
        <View style={{flex: 1}}>
          <Text>Hello!</Text>

          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
};

export default Model;
