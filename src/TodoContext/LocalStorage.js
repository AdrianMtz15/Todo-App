import React from 'react';


function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        const setLocalStorage = (itemName, value) => {
          localStorage.setItem(itemName, JSON.stringify(value));
        }
    
        if (localStorageItem) {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        } else {
          setLocalStorage(itemName, initialValue);
          parsedItem = initialValue;
        }
  
        setLoading(false);
      } catch(error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error,
  }
}

export { useLocalStorage };

// const defaultTodos = [
//   { text: "Tarea 1", completed: true, hour: "13:00", id: 1 },
//   { text: "Tarea 2", completed: false, hour: "13:00", id: 2},
//   { text: "Tarea 3", completed: false, hour: "13:00", id: 3 },
//   { text: "Tarea 4", completed: true, hour: "13:00", id: 4},
//   { text: "Tarea 5", completed: true, hour: "13:00", id: 5}
// ]
// localStorage.setItem('TODO_APP', JSON.stringify(defaultTodos))