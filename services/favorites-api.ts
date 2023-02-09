const FAVORITES_KEY = "FAVORITE_COMPANIES";

export const getFavorites = () => {
  try {
    const stringifiedValue = localStorage.getItem(FAVORITES_KEY);

    if (stringifiedValue) return JSON.parse(stringifiedValue) || [];
  } catch (error) {
    return [];
  }
};

export const saveFavorites = (items: any[]) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(items));
};
