import React from 'react';
import {Button, Divider, Layout, StyleService} from '@ui-kitten/components';
import {useNavigation} from "@react-navigation/native";
import useStore from "../store/useStore";

export const HomeScreen = () => {
  const logout = useStore(state => state.logout)
  const navigation = useNavigation();

  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <Layout style={{flex: 1}}>
      <Divider/>
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button onPress={navigateDetails}>Go to details</Button>
        <Button style={styles.button} onPress={() => logout()} appearance='ghost'>Logout</Button>
      </Layout>
    </Layout>
  );
};

const styles = StyleService.create({
  button: {
    marginTop: 5
  }
});
