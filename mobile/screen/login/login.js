import {StyleSheet} from 'react-native';
export const IMAGE = 'https://cdn-icons-png.flaticon.com/512/2506/2506683.png';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 30,
  },
  wrapImage: {
    width: '100%',
    height: '44%',
    alignItems: 'center',
  },
  imageBank: {
    width: '60%',
    height: '100%',
  },
  titleLogin: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 25,
    color: '#111111',
  },
  description: {
    marginTop: 4,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f2f2f2',
    borderRadius: 15,
  },
  wrapFormInput: {
    marginTop: 20,
    paddingHorizontal: 30,
  },
  inputPassword: {
    marginVertical: 15,
  },
  buttonSubmit: {
    width: '100%',
    backgroundColor: '#1e90ff',
    borderRadius: 10,
    paddingVertical: 10,
  },
  textButton: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textRegister: {
    flexDirection: `row`,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default styles;
