
function setLocalStorage(itemName, itemData) {
    localStorage.setItem(itemName, JSON.stringify(itemData));
}

function getLocalStorage(itemName) {
    let localStorageItem = JSON.parse(localStorage.getItem(itemName));
    
    if(!localStorageItem) {
        return false;
    }else {
        return localStorageItem;
    }
}

export { 
    setLocalStorage,
    getLocalStorage
}

