const HISTORY_KEY = 'clearbg_history';
const MAX_HISTORY_ITEMS = 12;

export const saveToHistory = (imageData) => {
  try {
    const existingHistory = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
    const newItem = {
      id: Date.now(),
      image: imageData,
      timestamp: new Date().toISOString(),
    };
    
    // Add to beginning and limit size
    const newHistory = [newItem, ...existingHistory].slice(0, MAX_HISTORY_ITEMS);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));
    
    // Dispatch custom event to notify components
    window.dispatchEvent(new Event('historyUpdated'));
  } catch (error) {
    console.error('Failed to save to history:', error);
    // If quota exceeded, clear some old items and try again
    if (error.name === 'QuotaExceededError') {
      const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
      if (history.length > 1) {
        localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, history.length / 2)));
      }
    }
  }
};

export const getHistory = () => {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
  } catch (error) {
    console.error('Failed to get history:', error);
    return [];
  }
};

export const clearHistory = () => {
  localStorage.removeItem(HISTORY_KEY);
  window.dispatchEvent(new Event('historyUpdated'));
};

export const removeFromHistory = (id) => {
  const existingHistory = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
  const newHistory = existingHistory.filter(item => item.id !== id);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));
  window.dispatchEvent(new Event('historyUpdated'));
};
