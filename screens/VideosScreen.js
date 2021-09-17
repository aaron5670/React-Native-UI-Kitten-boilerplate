import React from 'react';
import { Layout, Text } from '@ui-kitten/components';

export const VideosScreen = () => {
  return (
    <Layout style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>Videos</Text>
      </Layout>
    </Layout>
  );
};
