import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale } from 'chart.js';
ChartJS.register(LineController, LineElement, PointElement, LinearScale);
import { getStoreData } from '../utility/localstorage';

import { useEffect ,useState} from 'react';
import { useLoaderData } from 'react-router-dom';






const options = {}
const PagesToRead = () => {
    const [addbooks, setaddbooks] = useState([]);
    const books = useLoaderData();
    useEffect(() => {
        const storebook = getStoreData()

        if (books.length > 0) {
            const storebooks = [];
            for (const id of storebook) {
                const book = books.find(book => book.bookId == id);
                if (book) {
                    storebooks.push(book)

                }

            }
            // const bookName = addbooks.map(book=>{book.bookName})
            // const totalPages = addbooks.map(book=>{book.totalPages})
            // console.log(bookName,totalPages)
            setaddbooks(storebooks)
            // console.log(addbooks)
            return 

           
           
        }}, [books])

    const data = {
        labels: ['Jun', 'Jul', 'Aug', 'Jul', 'Aug'],
        datasets: [{ data: [4, 12, 7, 4, 9], },

        ],
    }


    return (
        <div>

         { addbooks.map((book,idx) =><div key={idx}><a href="">{book.bookName}</a></div>)}


            <Line datasetIdKey='id' data={data} options={options} />
        </div>
    );
};

export default PagesToRead;