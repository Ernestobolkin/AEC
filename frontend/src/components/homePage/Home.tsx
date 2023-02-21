import React, { useState } from "react";
import apiService from "../../service/apiService";
import "./Home.scss"
const HomePage = () => {
    const [userData, setUserData] = useState({
        userName: "",
        password: "",
    });




    // useEffect(() => {
    // })
    // If there is no extra use for this function, you can just use onChange={event => setUserData({ ...userData, [event.target.name]: event.target.value })} on the input
    const onChange = (event: any) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });
    }

    const submit = async (event: any) => {
        event.preventDefault();
        const response = await apiService.loginRequest(userData);
        console.log(response);
    }

    const checkMe = async () => {
        console.log("check me");
        const response = await apiService.generalRequest("test", "GET");
        console.log(response);
    }
    return (
        <div>
            <div className="conatiner">
                <form className="row g-3" onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="UserName" className="form-label">UserName</label>
                        <input 
                            type="text" 
                            onChange={onChange}
                            value={userData.userName} 
                            className="form-control userName" 
                            name="userName" 
                            placeholder="Enter your username"
                            />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input 
                            type="password" 
                            onChange={onChange} 
                            value={userData.password} 
                            className="form-control password" 
                            name="password" 
                            placeholder="Enter your password" />
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                </form>
                <div className="row">
                    <button className="btn btn-secondary" onClick={checkMe}>check-me</button>
                </div>
            </div>

        </div>
    );
};

export default HomePage;