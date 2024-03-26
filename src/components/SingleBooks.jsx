import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";


const SingleBooks = ({ book }) => {
	const {  bookName,rating, image,category, publisher, totalPages, yearOfPublishing } = book

	return (
		<li className="flex flex-col py-6 sm:flex-row sm:justify-between border-2 my-6 p-4">
			<div className="flex w-full space-x-2 sm:space-x-4">
				<img className="flex-shrink-0 object-cover w-20 h-20  sm:w-32 sm:h-32 dark:bg-gray-500" src={image} alt="Polaroid camera" />
				<div className="flex flex-col justify-between w-full pb-4">
					<div className=" w-full pb-2 ">
						<div className="space-y-1">
							<h3 className="text-2xl font-bold leading-[32px] sm:pr-8">{bookName}</h3>

						</div>
						<div className="flex gap-x-2 items-center text-lg font-medium leading-[19px] mt-4">
							<IoIosContact></IoIosContact>by : {publisher}
						</div>
					</div>
					<div className="flex items-center justify-between mt-4">
						<h3 className="flex gap-x-2 text-lg font-bold">tags : {
							book.tags.map((tag, idx) => <span key={idx}><a className="text-[16px] font-semibold text-[#23BE0A]" href="">{tag}</a></span>)
						}</h3>

						<p className="flex items-center gap-x-2"><CiLocationOn></CiLocationOn> Year of Publishing :  {yearOfPublishing}</p>
					</div>
					<div className="flex items-center justify-between mt-6">
						<p> Publisher : {publisher} </p>
						<p>page {totalPages}</p>
					</div>
					<hr className=" my-4"></hr>


					<div className="flex  items-center justify-between ">
						<p className="py-[11px] px-5 bg-[#328eff26] rounded-3xl text-[#328eff]">Category : {category} </p>
						<p className="py-[11px] px-5 bg-[#ffac3326] rounded-3xl text-[#ffac33]">Rating : {rating}</p>

						<button type="button" className="py-[11px] px-5 bg-[#23be0a] rounded-3xl text-[white]">
							
						View Details
						</button>
					
					</div>
				</div>
			</div>
		</li>


	);
};
SingleBooks.propTypes = {
    book:PropTypes.object,
}
export default SingleBooks;