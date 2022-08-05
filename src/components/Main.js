import { useState, useEffect } from 'react'
import "../stylesheets/main.css"
import SearchIcon from '@mui/icons-material/Search';
import Card from "./Card";

export default function Main({ data }) {

    let url = "https://media-content.ccbp.in/website/react-assignment/resources.json"
    const [filteredData, setfilteredData] = useState([...Object.values(data)]);

    useEffect(() => {
        async function settingData() {
            let res = await fetch(url);
            let jsonData = await res.json();
            setfilteredData(await [...Object.values(jsonData)])
        }
        settingData();
    }, []);



    function activeELement(e) {
        let element = document.getElementsByClassName("active")
        element[0].className = "tag"
        e.target.className += " active"
        tagNavigate(e);
    }

    function tagNavigate(e) {
        if (e.target.innerText === "Users") {
            let arr = Object.values(data)
            let filteredData2 = arr.filter((t) => {
                return t.tag === "user"
            })
            setfilteredData([...filteredData2])
        }
        if (e.target.innerText === "Requests") {
            let arr = Object.values(data)
            let filteredData2 = arr.filter((t) => {
                return t.tag === "request"
            })
            setfilteredData([...filteredData2])
        }
        if (e.target.innerText === "Resources") {
            setfilteredData([...Object.values(data)])
        }

    }

    function searchThis(e) {
        let arr = Object.values(data)
        let value = e.target.value
        let filteredData2 = arr.filter((t) => {
            return t.title === value
        })
        if(filteredData2.length === 0 || value === ""){
            setfilteredData([...Object.values(data)])
        }
        else{
            setfilteredData([...filteredData2])
        }
    }


    return (
        <div className="Main">
            <div className="tagsWrapper">
                <ul className="tags">
                    <li className="tag active" onClick={activeELement}>Resources</li>
                    <li className="tag" onClick={activeELement}>Requests</li>
                    <li className="tag" onClick={activeELement}>Users</li>
                </ul>
            </div>
            <div className="mainContent">
                <div className="searchBarWrapper">
                    <span className="searchBarIcon"><SearchIcon /></span>
                    <input className="searchBarInput" type="text" name="searchBar" id="searchBar" placeholder="Search" onChange={searchThis}/>
                </div>
                <div className="mainContentResources">
                    {filteredData.map((ele) => {
                        return <Card ele={ele} />
                    })}
                </div>
            </div>
        </div>
    )
}

