import React from "react";

function useLocalStorage(itemName, itemData) {
    let localItems = JSON.parse(localStorage.getItem(itemName));

    if(!localItems) {
        localItems = itemData
    } 

    const [item, setItems] = React.useState(localItems);

    const saveItem = (items) => {
        localStorage.setItem(itemName, JSON.stringify(items));
        setItems(items);
    }

    return [item, saveItem];
}

export { 
    useLocalStorage
}

