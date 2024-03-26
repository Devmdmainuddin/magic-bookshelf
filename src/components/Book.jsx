import { FaRegStar } from "react-icons/fa6";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const Book = ({book}) => {
    const {bookId,bookName,image,publisher,category,rating}=book
    return (
        <Link to={`/book/${bookId}`} className="flex flex-col mx-auto max-w-lg p-6 space-y-6 overflow-hidden  border-2 rounded-2xl dark:bg-gray-50 dark:text-gray-800">

            <div>
                <img src={image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500 rounded-2xl" />

            </div>
            <div className="flex items-center gap-x-6 my-1">
                <p className=" text-[16px] font-semibold text-[#23BE0A]">Young Adult </p>
                <p className="text-[16px] font-semibold text-[#23BE0A]">Identity </p>
            </div>
            <h2 className="text-[24px] font-bold">{bookName}</h2>
            <p className="text-[#131313cc]">By : {publisher}</p>
            <div className="flex flex-wrap justify-between">
                <p className="text-[#131313cc]">{category}</p>
                <div className="flex space-x-2 text-sm dark:text-gray-600 items-center">
                    <span>{rating}</span>
                    <FaRegStar></FaRegStar>
                </div>
            </div>
        </Link>
    );
};
Book.propTypes = {
    book:PropTypes.object,
}
export default Book;