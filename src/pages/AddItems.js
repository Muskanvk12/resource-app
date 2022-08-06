import '../stylesheets/addItems.css'
import Header from '../components/Header'
import SideImage from '../components/SideImage'
import AddFrom from '../components/AddFrom'

export default function AddItems() {
    return (
        <div className='AddItems'>
            <Header />
            <div className="addItemMain">
                <AddFrom />
                <SideImage />
            </div>
        </div>
    )
}
