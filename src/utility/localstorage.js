import {  toast } from 'react-toastify';

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
<<<<<<< HEAD
    if (exists) {
      return  toast.error('book alredey in  wishlist !')
=======
    if(!exists){
        toast.success('books ar added wishlist Book')
        storedDatas.push(id)
        localStorage.setItem('storebooks', JSON.stringify(storedDatas))  
>>>>>>> aa6d981cc713993565e085a0b416e47e186b9f28
    }
    storedDatas.push(id)
    localStorage.setItem('storebooks', JSON.stringify(storedDatas))
    toast.success('books ar added wishlist Book') 

}


const getreadbooksData = () =>{
    const readData = localStorage.getItem('readbooks');
    if(readData){
        return JSON.parse(readData)
    }  
    return [];
}

const savereadbooksData = id =>{
    const readbooksDatas = getreadbooksData();
    const exists = readbooksDatas.find(bookId => bookId === id);
    if (exists) {
      return  toast.error('book alredey in  read book !')
    }
    readbooksDatas.push(id)
    localStorage.setItem('readbooks', JSON.stringify(readbooksDatas))
    toast.success('books ar added read Book') 

}
export  { getStoreData, saveStoreData, getreadbooksData, savereadbooksData }