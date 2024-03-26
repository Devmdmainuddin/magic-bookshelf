import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800 bg-[#1313130d] mt-12">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm  lg:text-left">
			<h1 className="text-[56px] max-w-[526px] font-bold leading-[84px] l text-[#131313]">Books to freshen up your bookshelf
			</h1>
			
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<Link to='/bookslist' className="py-[14px] px-[17px] bg-[#23BE0A] rounded-lg text-white mt-6">View The List</Link>
				
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://i.ibb.co/KG0rB7H/banner-img.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-2xl" />
		</div>
	</div>
</section>
    );
};


//<img src="https://i.ibb.co/KG0rB7H/banner-img.png" 

export default Banner;