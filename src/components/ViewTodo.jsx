import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const ViewTodo = () => {

        const [todo,changeTodo]=useState(
            {"todos":[]}
        )

        const fetchData=()=>{
            axios.get("https://dummyjson.com/todos").then(
                (response)=>{
                    changeTodo(response.data)
                }
            ).catch()
        }

        useEffect(()=>{fetchData()},[])

    return (
        <div>
<Navbar/>
            <div className="container">
                <div className="row">
                    <center><h2>--Todo Details--</h2></center>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            
                        {todo.todos.map(
                            (value,index)=>{
                                return (
                                    <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                                <div class="card border-danger">
                                    <div class="card-body">
                                        <p className="text-primary">User id : {value.userId}</p>
                                        <p className="text-primary">Todo : {value.todo}</p>
                                        <p className="text-primary">Completed : {value.completed ? "yes" : "no"}</p>
                                    </div>
                                </div>

                            </div>
                                )
                            }
                        )}

                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default ViewTodo