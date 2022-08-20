import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import SortRoundedIcon from '@mui/icons-material/SortRounded';
import ReactTable from '../components/ReactTable';
import "../stylesheets/resource.css"
import BackBtn from '../components/BackBtn';

export default function Resource() {

    const location = useLocation()

    let navigate = useNavigate()

    // to navigate to previous page
    // function navigateBack() {
    //     navigate('/')
    // }

    // to show or hide sort menu
    const [sortMenuClass, setsortMenuClass] = useState("sortMenuHidden");

    function showSortMenu() {
        if (sortMenuClass === "sortMenuHidden") {
            setsortMenuClass("sortMenu")
        }
        else {
            setsortMenuClass("sortMenuHidden")
        }
    }

    // to navigate to items page
    function toAddItemPage() {
        navigate('/additem')
    }

    return (
        <div className='Resource'>
            <BackBtn page={"Resource"} />
            <div className="resourceTop">
                <div className="resourceTitle">
                    <div className="resourceTitleLeft">
                        <div className="resourceIconWrapper">
                            <img className='resourceIcon' src={`${location.state.icon_url}`} alt="slack" />
                        </div>
                    </div>
                    <div className="resourceTitleRight">
                        <div className="resourceName">{location.state.title}</div>
                        <div className="resourceCategory">{location.state.category}</div>
                        <div className="resourceLink"><a href={location.state.link} target="_blank" rel="noreferrer noopener">{location.state.link}</a></div>
                    </div>
                </div>
                <div className="resourceDescWrapper">
                    <div className="resourceDesc">{location.state.description}</div>
                </div>
                <div className="resourceUpdate">
                    <div className="updateBtn">UPDATE</div>
                </div>
            </div>
            <div className="resourceSearch">
                <div className="resourseItems">
                    Items
                </div>
                <div className="resourceSearchSort">
                    <div className="resourceSearchBar searchBarWrapper">
                        <span className="searchBarIcon"><SearchIcon /></span>
                        <input className="searchBarInput" type="text" name="searchBar" id="searchBar" placeholder="Search" />
                    </div>
                    <div className="resourceSort" onClick={showSortMenu}>
                        <SortRoundedIcon className='sortIcon' />SORT
                    </div>
                </div>
                <div className={sortMenuClass}>
                    <ul>
                        <li className='sortMenuItems'>Recnetly Added</li>
                        <li className='sortMenuItems'>Ascending</li>
                        <li className='sortMenuItems'>Descending</li>
                    </ul>
                </div>
            </div>
            <div className="resourceTable">
                <ReactTable/>
            </div>
            <div className="resourceBottom">
                <div className="resourceBottomLeft">
                    <div className="bottomBtns addItemBtn" onClick={toAddItemPage}>ADD ITEM</div>
                    <div className="bottomBtns deleteBtn">DELETE</div>
                </div>
                <div className="resourceBottomRight">1 2 3 4 5 6 7 8 9 10</div>
            </div>
        </div>
    )
}
