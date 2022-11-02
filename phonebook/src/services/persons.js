import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl)
    .then((response) => {
      return response.data
    })
}

const create = (newPerson) => {
  return axios.post(baseUrl, newPerson)
    .then((response) => {
      return response.data
    })
}

const remove = (id) => {
  axios.delete(`${baseUrl}/${id}`)
}

const update = (name, newNumber, id) => {
  const data = {
    name,
    number: newNumber,
    id,
  }
  axios.put(`${baseUrl}/${id}`, data)
}

export default {
  getAll,
  create,
  remove,
  update,
};