
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { useNavigation } from "react-router-dom";
import { FidgetSpinner } from 'react-loader-spinner'
function App() {
  const navigation = useNavigation();

  return (
    <>
     
      <div>
      <Header></Header>
      </div>
      <div className='md:min-h-[calc(100vh-302px)] max-w-[1169px] mx-auto'>
      {navigation.state === "loading" ? <FidgetSpinner
              visible={true}
              height="80"
              width="80"
              ariaLabel="fidget-spinner-loading"
              wrapperStyle={{}}
              wrapperClass="fidget-spinner-wrapper"
            /> : <Outlet></Outlet>}
      </div>
      <div>
        <Footer></Footer>
      </div>
      
    </>
  )
}

export default App
