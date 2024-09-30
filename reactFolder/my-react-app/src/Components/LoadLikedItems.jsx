import { useContext } from 'react';
import LikedItemsContext from './LikedItemsContext';

export const LoadLikedItems = () => {
  const context = useContext(LikedItemsContext);
  if (!context) {
    throw new Error('useLikedItems must be used within a LikedItemsProvider');
  }
  return context;
};