import { useState } from "react";

import { createUser } from "../Services/Service";
import { useNavigate } from "react-router-dom";

function From() {
    // render the custom the url 
    const navegator = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    // save the use 
    function saveUser(e) {
        e.preventDefault();
        const user = { name, email }
        console.log(user);

        // send the service  and store the back-end database 
        createUser(user).then((response) => {
            console.log(response.data);
            navegator('/')
        })
    }
    return (
        <div className="formgroup" >
            <div className="container">
                <br/>
                <br/>
                <div className="row">
                    <div className="card  col-md-6 offset-md-3">
                        <h1 className="text-center">User</h1>
                        <div className="card-body" >
                            <from >
                                <div className="form-group md-2">
                                    <label className="form-label ">  Name : </label>
                                    <input type="text"
                                        placeholder=" Name"
                                        name="Name"
                                        value={name}
                                        className="form-control"
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group md-2">
                                    <label className="form-label "> Email: </label>
                                    <input type="email"
                                        placeholder="email" 
                                        name="FirstName"
                                        value={email}
                                        className="form-control"                
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <button type="submit" className="btn btn-primary" onClick={saveUser}>Submit</button>
                                </div>

                            </from>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default From