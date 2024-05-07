import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import News from './component/News';
import Test from './component/Test';
import LoadingBar from 'react-top-loading-bar'
export default function App() {
  const [progress, setProgress] = useState(0);
  const apiKey=process.env.REACT_APP_NEWS_API;
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <LoadingBar
            color='blue'
            progress={progress}
          />
          <div className='container'>
            {/* The following line seems to be incorrect, you might want to replace it with the actual component or content you want to render */}
            {/* {this.c} */}
          </div>
          <Routes>{/*this given remounting issue as we load news component again and again*/}
            <Route path='/' element={<News setProgress={setProgress} apiKey={apiKey}  key="home" pageSize={15} category={"general"}/>} />{/*ye hum news.js me props semd krre h*/}
            <Route path='/bussiness' element={<News setProgress={setProgress} apiKey={apiKey} key="bussiness" pageSize={15} category={"bussiness"}/>} />
            <Route path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={15} category={"entertainment"}/>} />
            <Route path='/general' element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={15} category={"general"}/>} />
            <Route path='/health' element={<News setProgress={setProgress}  apiKey={apiKey} key="health" pageSize={15} category={"health"}/>} />
            <Route path='/science' element={<News setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={15} category={"science"}/>} />
            <Route path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={15} category={"sports"}/>} />
            <Route path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={15} category={"technology"}/>} />
            
            {/* Add more routes as needed */}
          </Routes>
          <Routes>
          <Route path='/test' element={<Test/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}
