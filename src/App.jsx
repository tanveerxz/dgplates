import { BrowserRouter } from "react-router-dom";
import {Navbar, Banner, ShowCase, Order, Footer} from "./components"


const App= () => {

  return (

    <BrowserRouter>
    <div className="relative z-0 bg-primary select-none">
      <Navbar/>
       <Banner/>
      <ShowCase/>
        <Order/>
        <Footer />

    </div>
    </BrowserRouter>
   
  )
}

export default App
