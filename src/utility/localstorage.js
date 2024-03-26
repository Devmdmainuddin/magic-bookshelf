const getStoreData = () =>{
    const storedData = localStorage.getItem('storebooks');
    if(storedData){
        return JSON.parse(storedData)
    }
    return [];
}

const saveStoreData = id =>{
    const storedDatas = getStoreData();
    const exists = storedDatas.find(bookId => bookId === id);
    if(!exists){
        storedDatas.push(id)
        localStorage.setItem('storebooks', JSON.stringify(storedDatas))
    }

}
export  { getStoreData, saveStoreData}