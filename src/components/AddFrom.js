import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import validator from 'validator';
import 'react-toastify/dist/ReactToastify.css';
import BackBtn from './BackBtn'

export default function AddFrom() {
    let Api = "https://media-content.ccbp.in/website/react-assignment/add_resource.json"

    const [userInput, setuserInput] = useState({ "itemName": "", "link": "", "resourceName": "", "desc": "" });

    function getUserInput(e) {
        if (e.target.name === "itemName") {
            setuserInput({ ...userInput, "itemName": e.target.value })
        }

        if (e.target.name === "link") {
            setuserInput({ ...userInput, "link": e.target.value })
        }

        if (e.target.name === "resourceName") {
            setuserInput({ ...userInput, "resourceName": e.target.value })
        }

        if (e.target.name === "description") {
            setuserInput({ ...userInput, "desc": e.target.value })
        }
    }



    // to notify
    async function notifyUser() {

        if (userInput.itemName !== "" && userInput.link !== "" && userInput.resourceName !== "" && userInput.desc !== "") {
            if (validator.isURL(userInput.link)) {
                try{
                    const response = await fetch(Api);

                    if(response.status === 200 || response.status === 201){
                        toast.success("Resource Item Added", { position: "bottom-center", })
                        console.log(response.status)
                    }
                    else{
                        console.log("something went wrong")
                        console.log(response)
                    }
                }
                catch(error){
                    toast.error("Something went wrong, please wait")
                }
                
            }
            else{
                toast.info("Please enter proper LINK",{ position: "bottom-center", })
            }

        }
        else {
            toast.error("Please enter all data", { position: "bottom-center"})
        }


    }

    return (
        <div className='AddFrom'>
            <div className="addFormBackBtn">
                <BackBtn page={"Users"} />
            </div>
            <div className="addFormFormWrapper">
                <div className="addFormForm">
                    <div className="formHeading">Item Details</div>
                    <div className="form">
                        <div className="addItemInput">
                            <label htmlFor="itemName">ITEM NAME</label>
                            <input type="text" name='itemName' className="formInput" onChange={getUserInput} />
                        </div>
                        <div className="addItemInput">
                            <label htmlFor="link">LINK</label>
                            <input type="url" name='link' className="formInput" onChange={getUserInput} />
                        </div>
                        <div className="addItemInput">
                            <label htmlFor="resourceName">RESOURCE NAME</label>
                            <input type="text" name='resourceName' className="formInput" onChange={getUserInput} />
                        </div>
                        <div className="addItemInput">
                            <label htmlFor="description">DESCRIPTION</label>
                            <textarea name="description" id="desciption" onChange={getUserInput}></textarea>
                        </div>
                        <div className='addItemInput createBtnWrapper'>
                            <div className="createBtn" onClick={notifyUser}>
                                CREATE
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
