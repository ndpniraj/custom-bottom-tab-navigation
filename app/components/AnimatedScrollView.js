import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useTabBar } from '../contexts/TabBarProvider';

let offsetY = 0;
const AnimatedScrollView = ({ children, ...restProps }) => {
  const { setShowTabBar } = useTabBar();
  return (
    <ScrollView
      {...restProps}
      onScroll={({ nativeEvent }) => {
        const newOffset = nativeEvent.contentOffset.y;
        if (newOffset <= 0) return setShowTabBar(true);
        offsetY < newOffset ? setShowTabBar(false) : setShowTabBar(true);
        offsetY = newOffset;
      }}
    >
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AnimatedScrollView;
