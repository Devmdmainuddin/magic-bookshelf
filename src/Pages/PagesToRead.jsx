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
    const [label,setlabel]= useState([])

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
          
            setaddbooks(storebooks)
           
            return
           
           
        }
        if(storebook.length > 0){
            const bookName=[]
            for(const book of addbooks){
                const bookname =book.map(book =>book.bookName == bookname)
                console.log(bookname)
                bookName.push(bookname)
            } 
            setlabel(bookName)
            console.log(label)
            return
        }
       
    
    }, [books])

    const data = {
        labels: ['Jun', 'Jul', 'Aug', 'Jul', 'Aug'],
        datasets: [{ data: [4, 12, 7, 4, 9], },

        ],
    }


    return (
        <div>
<h2 className='flex gap-x-1 items-center'> <span>bookname :</span>   { addbooks.map((book,idx) =><span key={idx}><a href="" >{`"${book.bookName}"`}</a></span>)}</h2>
   <h2 className='flex gap-x-1 items-center'><span>totalPages :</span> { addbooks.map((book,idx) =><span key={idx}><a href="">{`"${book.totalPages}"`}</a></span>)}</h2>     
       

            <Line datasetIdKey='id' data={data} options={options} />
        </div>
    );
};

export default PagesToRead;