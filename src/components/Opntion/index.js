import React from 'react';

import { View, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

const Opntion = ({ url }) =>
  // console.tron.log(url);
  (
    <View>
      <Image style={styles.image} source={{ uri: url }} />
    </View>
  );
export default Opntion;
