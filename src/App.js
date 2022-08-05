import {useEffect, useState} from 'react'
import './App.css';
import Home from './pages/Home';

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
      <Home data = {data}/>
    </div>
  );
}

export default App;
