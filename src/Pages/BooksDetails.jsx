import { useLoaderData, useParams } from "react-router-dom";
import { FaRegStar } from "react-icons/fa6";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {saveStoreData,getStoreData} from '../utility/localstorage'



const BooksDetails = () => {
    const books =useLoaderData();
    const {bookId} = useParams();
    // const idInt = parseInt(bookId);
   
    
    const handleapply = ()=>{
        const idInt = parseInt(bookId);
        const initialbook = getStoreData();
            const book = initialbook.find(book => book == idInt);
            console.log(22,book)
            if(book ){
                console.log(24,book)
                saveStoreData(idInt)
                
            }
    
             
    }
    const handalAddToWishlist = ()=>{
        const idInt = parseInt(bookId);
            const book = books.find(book => book.bookId == idInt);
            if (book) {
                toast.error('book alredey in  wishlist !')
                saveStoreData(idInt)
            } 
    }
   

   const book = books.find(book => book.bookId === bookId);
    return (
        <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col items-center rounded-xl overflow-hidden  shadow-sm lg:flex-row">
			<img src={book.image} alt="" className="h-80 rounded-xl dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col  justify-center flex-1 p-6 dark:bg-gray-50">
				
				<h3 className="text-[40px] leading-8 font-bold">{book.bookName}</h3>
                <p className="text-[#131313cc] text-[20px] font-medium mt-6">By : {book.publisher}</p>
                <hr className="my-4" />
                <p className="text-[#131313cc] text-[20px]  font-medium">{book.category}</p>
                <hr className="my-4 text-[#131313cc]" />
				<p className="my-6 dark:text-gray-600 text-[16px] ">review : {book.review}</p>
                <div className="flex gap-x-2 "> <h2 className="font-bold">tags :</h2> <p className="flex gap-x-2"> {
                book.tags.map((tag,idx) =><span key={idx}><a href="">{tag}</a></span>)
               }</p> </div>
               <hr className="my-6" />
                <div className="">
                    <p className="flex gap-x-2 text-lg text-[#131313b3] font-normal mt-3">Number of Pages : <span className="text-[#131313] font-semibold">{book.totalPages}</span></p>
                    <p className="flex gap-x-2 text-lg text-[#131313b3] font-normal  mt-3">Publisher : <span className="text-[#131313] font-semibold">{book.publisher}</span></p>
                    <p className="flex gap-x-2 text-lg text-[#131313b3] font-normal  mt-3">Year of Publishing : <span className="text-[#131313] font-semibold">{book.yearOfPublishing}</span></p>
                    <p className="flex gap-x-2 text-lg text-[#131313b3] font-normal  mt-3 ">Rating : <span className="text-[#131313] font-semibold flex items-center gap-x-2">{book.rating}<FaRegStar></FaRegStar></span></p>
                </div>
				<div className="buttons mt-3">
                <button onClick={handleapply} className="inline-block py-[14px] px-[17px] bg-[#23BE0A] rounded-lg text-white ">Read </button>
                    <button onClick={handalAddToWishlist} className="inline-block ml-4 py-[14px] px-[17px] bg-[#59C6D2] rounded-lg text-white">Wishlist</button>
                    
                </div>
			</div>
		</div>
		
	</div>
    <ToastContainer />
</section>
    );
};

export default BooksDetails;