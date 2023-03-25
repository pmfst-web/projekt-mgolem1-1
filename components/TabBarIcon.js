import React from 'react';
import MCI from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import ADI from '@expo/vector-icons/AntDesign';

type TabBarIconProps = {
  color: '#6A665F';
  size: number;
  type: 'wallet' | 'home' | 'add' | 'settings';
};

export const TabBarIcon = ({ type, color, size }: TabBarIconProps) => {
  switch (type) {
    case 'wallet':
      return <MCI name='wallet' color={color} size={size} />;
    case 'home':
      return <Ionicons name='home' size={size} color={color} />;
    case 'add':
      return <ADI name='plus' size={size} color={color} />;
    case 'settings':
      return <MCI name='cog' size={size} color={color} />;
    default:
      return null;
  }
};
