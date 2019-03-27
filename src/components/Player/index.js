import React from 'react';

import { View, Image, Text } from 'react-native';

import styles from './styles';

const Player = ({ whois, url }) =>
  // console.tron.log(whois);
  (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: url }} />
      <Text style={styles.textName}>{whois}</Text>
    </View>
  );
export default Player;
