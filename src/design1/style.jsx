import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A6D5DF',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    marginBottom: 10,
    fontSize: 16,
  },
  header: {
    marginTop: 100,
    alignItems: 'center',
  },
  footer: {
    alignItems: 'center',
    marginBottom: 65,
  },
  //Login
  containerLogin: {
    flex: 1,
    backgroundColor: '#A6D5DF',
    justifyContent: 'space-between',
    padding: 30,
  },
  titleLogin: {
    color: '#fff',
    fontSize: 40,
  },
  subtitle: {
    color: '#fff',
    marginBottom: 10,
    fontSize: 25,
  },
  textLogin: {
    color: '#fff',
    fontSize: 16,
  },
  headerLogin: {
    marginTop: 100,
  },
  footerLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 65,
    alignItems: 'center',
  },
  hr: {
    borderColor: '#fff',
    borderLeftWidth: 1,
    height: 40,
    marginHorizontal: 15,
  },
  containerInput: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#6DA7B2',
    borderRadius: 30,
    height: 45,
    alignItems: 'center',
    paddingLeft: 20,
    marginBottom: 20,
  },
  input: {
    marginLeft: 18,
    // color: '#fff',
    // fontSize: 14,
    // marginBottom: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'red',
    // width: '100%',
  },
  btn: {
    paddingLeft: 0,
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 30,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontWeight: '600',
    color: '#6DA7B2',
    fontSize: 16,
  },
});
