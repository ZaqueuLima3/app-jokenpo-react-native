import { StyleSheet } from 'react-native';
import { colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    alignItems: 'center',
  },

  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },

  textName: {
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default styles;
