import Banner from "../components/Banner";
import Books from "../components/Books";
// import { useLoaderData } from "react-router-dom";

const Home = () => {
   
    return (
        <div>


            <div>
            <Banner></Banner>
            </div>
            <div className="my-6 ">
                <h2 className="text-center font-bold text-[40] text-[#131313]">books</h2>
                <div className="mt-[100px]">
                <Books></Books>
                </div>
                
            </div>
            
        </div>
       
    );
};

export default Home;