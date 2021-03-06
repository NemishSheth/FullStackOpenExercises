import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll =() =>{
  const request = axios.get(baseUrl)
  return request.then(response => response.data)   
}

const create = newObject => {
    return axios.post(baseUrl, newObject).then(response => response.data)
}

const update = (id, newObject) =>{
    console.log(`${baseUrl}/${id}`)
    return axios.put(`${baseUrl}/${id}`, newObject).then(response => response.data)
}

export default{
    getAll,
    create,
    update
}