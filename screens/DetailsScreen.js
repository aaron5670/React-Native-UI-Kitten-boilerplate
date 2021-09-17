import React from 'react';
import {Divider, Layout, StyleService, Text} from '@ui-kitten/components';

export const DetailsScreen = () => {
  return (
    <Layout style={{flex: 1}}>
      <Divider/>
      <Layout style={styles.layout}>
        <Text category='h1'>Details</Text>
      </Layout>
    </Layout>
  );
};

const styles = StyleService.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
