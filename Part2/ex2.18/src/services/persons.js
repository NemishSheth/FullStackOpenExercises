import axios from 'axios'

const baseUrl = "http://localhost:3001/persons"

const getAll = async () =>{
    const request = axios.get(baseUrl)
    const response = await request
    return response.data
}

const add = async (newPerson) =>{
    const request= axios.post(baseUrl, newPerson)
    const response = await request
    return response.data
}

const update = (id,newNameObject) =>{
    const request = axios.put(`${baseUrl}/${id}`,newNameObject)
    return request.then(response => response.data)
}


const remove = async (id) =>{
    const request = axios.delete(`${baseUrl}/${id}`)
    const response = await request
    return response.data
}

export default {getAll, add, remove, update}