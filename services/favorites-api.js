const FAVORITES_KEY = "FAVORITE_COMPANIES";

export const getFavorites = () => {
  try {
    const stringifiedValue = localStorage.getItem(FAVORITES_KEY);

    return JSON.parse(stringifiedValue) || [];
  } catch (error) {
    return [];
  }
};

export const saveFavorites = (items) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(items));
};
