import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  textHello: {
    marginVertical: 10,
    fontSize: 20,
    color: 'green',
  },
  createCard: {
    marginTop: 30,
  },
  textCreateCard: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  boxAdd: {
    marginTop: 10,
    width: 140,
    height: 40,
    backgroundColor: '#fff',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  textAdd: {
    fontSize: 22,
    marginRight: 6,
  },
});

export default styles;
