import { useState, useCallback, useMemo, useEffect } from 'react';
import LikedItemsContext from './LikedItemsContext';

export const LikedItemsProvider = ({ children }) => {
  const [likedItems, setLikedItems] = useState(() => {
    const savedItems = localStorage.getItem('likedItems');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem('likedItems', JSON.stringify(likedItems));
  }, [likedItems]);

  const addLikedItem = useCallback((item) => {
    setLikedItems((prevItems) => {
      if (!prevItems.some(existingItem => existingItem.ArticleId === item.ArticleId)) {
        console.log("Adding item:", item);
        return [...prevItems, item];
      }
      return prevItems;
    });
  }, []);

  const removeLikedItem = useCallback((articleId) => {
    setLikedItems((prevItems) => prevItems.filter(item => item.ArticleId !== articleId));
  }, []);

  const isItemLiked = useCallback((articleId) => {
    return likedItems.some(item => item.ArticleId === articleId);
  }, [likedItems]);

  const contextValue = useMemo(() => ({
    likedItems,
    addLikedItem,
    removeLikedItem,
    isItemLiked
  }), [likedItems, addLikedItem, removeLikedItem, isItemLiked]);

  return (
    <LikedItemsContext.Provider value={contextValue}>
      {children}
    </LikedItemsContext.Provider>
  );
};