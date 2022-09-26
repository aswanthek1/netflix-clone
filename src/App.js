import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import './app.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {originals,action,comedyMovies,horrorMovies,romanceMovies} from './urls'


function App() {
  return (
    <div className="App">
   <Navbar/>
   <Banner/>
   <RowPost url={originals} title='Netflix Originals' />
   <RowPost url={action} title='Action' isSmall />
   <RowPost url={comedyMovies} title='Comedy' isSmall />
   <RowPost url={horrorMovies} title='Horror' isSmall />
   <RowPost url={romanceMovies} title='Romance' isSmall />
    </div>
  );
}

export default App;
