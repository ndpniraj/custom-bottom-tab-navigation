import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './app/navigation/TabNavigator';
import TabBarProvider from './app/contexts/TabBarProvider';

export default function App() {
  return (
    <TabBarProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </TabBarProvider>
  );
}
