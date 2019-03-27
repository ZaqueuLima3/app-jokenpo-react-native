import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  component: {
    flex: 1,
    backgroundColor: colors.secundary,
    // justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    marginTop: 10,
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },

  dash: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  poiter: {
    padding: metrics.basePadding,
    borderColor: colors.light,
    alignItems: 'center',
  },

  textScore: {
    color: colors.white,
    fontSize: 14,
  },

  totScore: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },

  panel: {
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: colors.primary,
    justifyContent: 'space-between',
    borderRadius: metrics.baseRadius,
  },

  options: {
    flexDirection: 'row',
    marginTop: 20,
  },

  textEmpate: {
    color: colors.success,
    fontSize: 16,
    fontWeight: 'bold',
  },

  textWinner: {
    color: colors.success,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
