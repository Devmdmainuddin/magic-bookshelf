import 'chart.js/auto';

import { getStoreData } from '../utility/localstorage';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  


const PagesToRead = () => {
    
    const [addbooks, setaddbooks] = useState([]);
    const books = useLoaderData();

    useEffect(() => {
        const allstorebook = getStoreData()
        console.log(allstorebook.length)
        if (books.length > 0) {
            const storebooks = [];
            for (const id of allstorebook) {
                const book = books.find(book => book.bookId == id);
                if (book) {
                    storebooks.push(book)
                }
            }
            setaddbooks(storebooks)
            return
        }

    }, [books])

 const data =addbooks.map(book=>{
return {
    name:book.bookName,
    uv:book.totalPages,
}
})
 
    return (
        <div>
            <h2 className='flex gap-x-1 items-center'> <span>bookname :</span>   {addbooks.map((book, idx) => <span key={idx}><a href="" >{`"${book.bookName}"`}</a></span>)}</h2>
            <h2 className='flex gap-x-1 items-center'><span>totalPages :</span> {addbooks.map((book, idx) => <span key={idx}><a href="">{`"${book.totalPages}"`}</a></span>)}</h2>

            <BarChart
      width={900}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
           
        </div>
    );
};

export default PagesToRead;