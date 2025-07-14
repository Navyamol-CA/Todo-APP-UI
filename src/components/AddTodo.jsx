import React from 'react'
import Navbar from './Navbar'

const AddTodo = () => {
    return (
        <div>
<Navbar/>
            <div className="container">
                <div className="row">
                    <center><h2>--Add Details--</h2></center>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row">
                            <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">User Id</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Todo</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Completed</label>
                                <input type="checkbox" name="" id="" className="form-control" />
                                <label htmlFor="" className="form-label">Yes</label>
                                <input type="checkbox" name="" id="" className="form-control" />
                                <label htmlFor="" className="form-label">No</label>

                            </div>
                            <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-primary">Submit</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddTodo