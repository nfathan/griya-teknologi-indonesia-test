import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import config from "../../config";
import Cover from './Cover';

const Dashboard = () => {
  const [dashboard, setDashboard] = useState(null);
  const history = useHistory();

  const logout = () => {
    /* eslint-disable */
    const toLogout = confirm("Apakah Anda yakin untuk logout ?");
    /* eslint-enable */
    if (toLogout) {
      localStorage.clear();
      history.push("/login");
    }
  };

  useEffect(() => {
    fetch(`${config.baseUrl}/profile`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "bearer" + console.log(localStorage.getItem("token")),
      },
    })
      .then((res) => res.json())
      .then(({ errors, data }) => {
        errors ? history.push('/login') : setDashboard(data);
      });
  }, [history]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Profile Page
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              {/* <a className="nav-link" href="/dashboard">
                Dashboard <span className="sr-only">(current)</span>
              </a> */}
            </li>
          </ul>
          
          <span className="navbar-text">Welcome! {dashboard?.user?.name}</span>
          <span
                className="nav-link cursor-pointer"
                onClick={() => logout()}
              >
                Logout
              </span>
        </div>
      </nav>
      <Cover />

      <div className="container2">
        <div className="card ">
          <div className="card-body">
            <button className="btn btn-info m-3" data-toggle="modal" data-target="#editProfile">Edit Profile</button>
            {/* <!-- The Modal --> */}
            <div className="modal" id="editProfile">
              <div className="modal-dialog">
                <div className="modal-content">
                
                  {/* <!-- Modal Header --> */}
                  <div className="modal-header">
                    <h4 className="modal-title">Edit Profile</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                  </div>
                  
                  {/* <!-- Modal body --> */}
                  <div className="modal-body">
                  <form noValidate autoComplete='off'>
                        <div className="form-group">
                            <label htmlFor="inputForUsername">Username</label>
                            <span className="mandatory">*</span>
                            <input
                                id="inputForUsername"
                                name='username'
                                type="string"
                                className="form-control"
                                aria-describedby="Enter Username Baru"
                                placeholder="Enter Username"
                                
                            />

                        </div>
                        <div className="form-group">
                            <label htmlFor="inputForPassword">Password</label>
                            <span className="mandatory">*</span>
                            <input
                                name='password'
                                type="password"
                                className="form-control"
                                id="inputForPassword"
                                placeholder="Enter password Baru"
                                
                            />
                            
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="inputForRole">Role</label>
                            <span className="mandatory">*</span>
                            <select 
                                name="role" 
                                id="inputForRole"
                                className="form-control"
                            >
                                <option value="selectRole">Select Role</option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </select>
                        </div>
                        
                        {/* <div className="d-flex align-items-center justify-content-center">
                            <button type="submit" className="btn btn-outline-primary">
                                Submit
                            </button>
                            <button className="btn btn-link">
                                <Link to="/login">Login</Link>
                            </button>
                        </div> */}
                    </form>
                  </div>
                  
                  {/* <!-- Modal footer --> */}
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Update</button>
                  </div>
                  
                </div>
              </div>
            </div>

            <button className="btn btn-info m-3">Deactive Akun</button>
            <button className="btn btn-info m-3">Delete Akun</button>
          </div>
          
        </div>
        
        <h1>{dashboard?.title}test</h1>
        <p>{dashboard?.content}test 2</p>
      </div>
    </div>
  );
};

export default Dashboard;