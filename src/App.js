import React,{useState, Fragment} from 'react';
import { DatePicker, message, Alert, Button } from 'antd';
import 'antd/dist/antd.css';
import Navbar from './layouts/Navbar'
import Cover from './components/Cover'
import Projects from './components/Projects'
import Footer from './layouts/Footer'


const App = () => {
  const [date, setDate] = useState(null);
  const handleChange = value => {
    message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    setDate(value);
  };
  return (
    <Fragment>
      <Navbar></Navbar>
      <Cover></Cover>
      <Projects></Projects>
      <Footer></Footer>
    </Fragment>
    
    // <div style={{ width: 400, margin: '100px auto' }}>
    //   <DatePicker onChange={handleChange} />
    //   <div style={{ marginTop: 16 }}>
    //     {/* Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'} */}
    //     <Alert message="Selected Date" description={date ? date.format('YYYY-MM-DD') : 'None'} />
    //     <Button type="primary"> Press me</Button>
    //   </div>
    // </div>
  );
}


export default App;
