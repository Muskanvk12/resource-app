import {useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddItems from './pages/AddItems';
import Home from './pages/Home';
import Resource from './pages/Resource';

function App() {
  let url = "https://media-content.ccbp.in/website/react-assignment/resources.json"
  const [data, setdata] = useState("");

  async function getData(){
    let res = await fetch(url);
    setdata(await res.json())
  }

  useEffect(() => {
   
    getData()
    
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home data = {data}/>}/>
        <Route path='/resource' element={<Resource/>}/>
        <Route path='/additem' element={<AddItems/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
