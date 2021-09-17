import React from 'react';
import {Button, Divider, Layout, StyleService} from '@ui-kitten/components';
import useStore from "../../store/useStore";
import {useNavigation} from "@react-navigation/native";

export const RegisterScreen = () => {
  const login = useStore(state => state.login)
  const navigation = useNavigation();

  const navigateLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <Layout style={{flex: 1}}>
      <Divider/>
      <Layout style={styles.layout}>
        <Button onPress={() => login()}>Create account</Button>
        <Button style={styles.button} onPress={navigateLogin} appearance='ghost'>Back to login</Button>
      </Layout>
    </Layout>
  );
};

const styles = StyleService.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 5
  }
});
