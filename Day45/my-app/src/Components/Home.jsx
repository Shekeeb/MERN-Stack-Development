import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'


const fetchData = async (setComments) => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/comments")
        setComments(response.data)
        console.log("Data:",response.data)
    } catch (error) {
        console.log("Error fetching data", error)
    }
}

const Home = () => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        fetchData(setComments)
    }, [])

    return (
        <div>
            {comments.map((value) => {
                return (
                    <div>
                        <h4>Name:{value.name}</h4>
                        <h4>Email:{value.email}</h4>
                        <p>Body:{value.body}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Home