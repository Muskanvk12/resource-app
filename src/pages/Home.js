import Header from "../components/Header";
import Main from "../components/Main";


export default function Home({data}) {
  return (
    <div  className="Home">
        <Header/>
        <Main data = {data}/>
    </div>
  )
}
