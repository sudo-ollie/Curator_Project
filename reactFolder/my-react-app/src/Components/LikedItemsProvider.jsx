import { useState } from 'react';
import LikedItemsContext from './LikedItemsContext';

export const LikedItemsProvider = ({ children }) => {
  const [likedItems, setLikedItems] = useState([]);

  const addLikedItem = (item) => {
    setLikedItems((prevItems) => {
      if (!prevItems.some(existingItem => existingItem.ArticleId === item.ArticleId)) {
        return [...prevItems, item];
      }
      return prevItems;
    });
  };

  const removeLikedItem = (articleId) => {
    setLikedItems((prevItems) => prevItems.filter(item => item.ArticleId !== articleId));
  };

  const isItemLiked = (articleId) => {
    return likedItems.some(item => item.ArticleId === articleId);
  };

  return (
    <LikedItemsContext.Provider value={{ likedItems, addLikedItem, removeLikedItem, isItemLiked }}>
      {children}
    </LikedItemsContext.Provider>
  );
};