import React, { useState } from "react";
import { loginRequest ,generalRequest } from "../../service/apiService";
import "./Home.scss"
const HomePage = () => {
    const [userData, setUserData] = useState({
        userName: "",
        passWord: "",
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
        const response = await loginRequest(userData);
        console.log(response);
    }

    const checkMe = async () => {
        console.log("check me");
        const response = await generalRequest("test", "GET");
        console.log(response);
    }

    return (
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-md-6">
              <form onSubmit={submit}>
                <div className="mb-3">
                  <label htmlFor="userName" className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    name="userName"
                    value={userData.userName}
                    onChange={onChange}
                    placeholder="Enter your username"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={userData.passWord}
                    onChange={onChange}
                    placeholder="Enter your password"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Sign in</button>
              </form>
            </div>
          </div>
        </div>
      );
};

export default HomePage;