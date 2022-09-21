import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  back: {
    padding: 5,
  },
  wallet: {
    marginTop: 20,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  contentWallet: {
    marginLeft: 20,
  },
  idWallet: {
    fontSize: 18,
  },
  containerButton: {
    marginTop: 20,
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonSend: {
    backgroundColor: 'blue',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  buttonDelete: {
    marginLeft: 40,
    backgroundColor: 'red',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  textButton: {
    color: 'white',
    fontSize: 18,
  },
  containerAlert: {
    flex: 1,
    position: 'absolute',
    width: 300,
    left: '50%',
    marginTop: '80%',
    transform: [{translateX: -150}],
  },
  alertDelete: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    elevation: 2,
    borderWidth: 0,
  },
  inputPassword: {
    padding: 2,
    borderWidth: 1,
    borderRadius: 5,
  },
  wrapInputPass: {
    marginVertical: 10,
  },
  iconTimes: {
    position: 'absolute',
    top: -50,
    right: 0,
  },
  validation: {
    color: 'red',
  },
});

export default styles;
