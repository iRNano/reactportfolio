import React,{Fragment} from 'react';
import Navbar from './layouts/Navbar'
import Cover from './components/Cover'
import Projects from './components/Projects'
import Footer from './layouts/Footer'


const App = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Cover></Cover>
      <Projects></Projects>
      <Footer></Footer>
    </Fragment>
    
  );
}


export default App;
