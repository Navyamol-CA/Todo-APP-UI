import React from 'react'
import Navbar from './Navbar'

const SearchTodo = () => {
    return (
        <div>

            <div className="container">
<Navbar/>
                <div className="row">
                    <center><h2>--Search--</h2></center>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">User Id</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success">Search</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default SearchTodo