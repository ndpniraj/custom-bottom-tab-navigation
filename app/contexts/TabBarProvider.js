import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { createContext, useContext, useState } from 'react';

const TabBarContext = createContext();

const TabBarProvider = ({ children }) => {
  const [showTabBar, setShowTabBar] = useState(true);
  return (
    <TabBarContext.Provider value={{ showTabBar, setShowTabBar }}>
      {children}
    </TabBarContext.Provider>
  );
};

export const useTabBar = () => useContext(TabBarContext);

export default TabBarProvider;
