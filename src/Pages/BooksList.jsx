import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreData, getreadbooksData } from '../utility/localstorage'
import SingleBooks from '../components/SingleBooks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Wishlist from '../components/Wishlist';
import { Link } from 'react-router-dom';


const BooksList = () => {
    const books = useLoaderData();
    const [addbooks, setaddbooks] = useState([]);
    const [displaybooks, setDisplaybooks] = useState([]);

    // console.log(displaybooks.length)


    // for (const id of rating) {
    //     const book = books.map(book => book.bookId == id);
    //     if (book) {
    //         rating.push(book)

    //     }
    // }


    // const rating =displaybooks.map(book=>{book});
    // console.log(rating)


    const handlebookData = filter => {
        const [rating, totalPages, yearOfPublishing] = displaybooks;
        const rat = rating.rating
        const total = totalPages.totalPages
        const year = yearOfPublishing.yearOfPublishing
       

        if (filter === 'all') {
            setaddbooks(displaybooks);
        } else if (filter === 'rating') {
            const rating = displaybooks.filter(book => book.rating === rat);
            console.log(rating)
            setaddbooks(rating);
        } else if (filter === 'totalPages') {
            const totalPages = displaybooks.filter(book => book.totalPages === total);
            console.log(totalPages)
            setaddbooks(totalPages);
        } else if (filter === 'yearOfPublishing') {
            const yearOfPublishing = displaybooks.filter(book => book.yearOfPublishing === year);
            console.log(yearOfPublishing)
            setaddbooks(yearOfPublishing);
        }
    }
    useEffect(() => {
        const storebook = getStoreData()
        const readbook = getreadbooksData()
        if (books.length > 0) {
            const storebooks = [];
            for (const id of storebook) {
                const book = books.find(book => book.bookId == id);
                if (book) {
                    storebooks.push(book)

                }
            }
            setDisplaybooks(storebooks);

        }
        if (books.length > 0) {
            const readbooks = []
            for (const id of readbook) {
                const book = books.find(book => book.bookId == id);
                if (book) {
                    readbooks.push(book)

                }
            }
            setaddbooks(readbooks);
        }



    }, [books])

    return (
        <div>
            <div className='my-9 text-center'>
                <h2 >books</h2>
            </div>
            <div className='text-center'>
                <details className="dropdown ">
                    <summary className="m-1 btn">sort by </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handlebookData('all')}><a>All</a></li>
                        <li onClick={() => handlebookData('rating')}><a>Rating</a></li>
                        <li onClick={() => handlebookData('totalPages')}><a>Numbe of pages</a></li>
                        <li onClick={() => handlebookData('yearOfPublishing')}><a>yearOfPublishing</a></li>
                    </ul>
                </details>
            </div>
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>

                    <TabPanel>

                        <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">

                            <ul className="flex flex-col divide-y dark:divide-gray-300">
                                {
                                    addbooks.map((book, idx) => <SingleBooks key={idx} book={book} ></SingleBooks>)
                                }

                            </ul>

                            <div className="flex justify-end space-x-4">
                                <Link to='/' type="button" className="px-6 py-2 border rounded-md dark:border-violet-600">
                                    Back <span className="sr-only sm:not-sr-only">to shop</span>
                                </Link>
                                <button type="button" className="px-6 py-2 border rounded-md dark:bg-violet-600 dark:text-gray-50 dark:border-violet-600">
                                    <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
                                </button>
                            </div>
                            <ToastContainer />
                        </div>




                    </TabPanel>
                    <TabPanel>
                        <div className="flex flex-col  p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">

                            <ul className="flex flex-col  ">
                                {

                                    displaybooks.map((wishlist, idx) => <Wishlist key={idx} wishlist={wishlist}></Wishlist>)
                                }

                            </ul>

                            <div className="flex justify-end space-x-4">
                                <Link to='/' type="button" className="px-6 py-2 border rounded-md dark:border-violet-600">
                                    Back <span className="sr-only sm:not-sr-only">to shop</span>
                                </Link>

                                <button type="button" className="px-6 py-2 border rounded-md dark:bg-violet-600 dark:text-gray-50 dark:border-violet-600">
                                    <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
                                </button>
                            </div>
                            <ToastContainer />
                        </div>
                    </TabPanel>

                </Tabs>
            </div>
        </div>
    );
};

export default BooksList;