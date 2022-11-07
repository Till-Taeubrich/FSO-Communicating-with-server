import axios from "axios";
const baseUrl = 'http://localhost:3001'
const personUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
  return axios.get(personUrl)
    .then((response) => {
      return response.data
    })
}

const create = (newPerson) => {
  return axios.post(personUrl, newPerson)
    .then((response) => {
      return response.data
    })
}

const remove = (id) => {
  axios.delete(`${personUrl}/${id}`)
}

const update = (name, newNumber, id, setErrorMessage, setMessage, resetMessage) => {
  const data = {
    name,
    number: newNumber,
    id,
  }
  axios.put(`${personUrl}/${id}`, data)
    .then(() => {})
    .catch((error) => {
      setErrorMessage(true)
      setMessage(`Information of ${name} has already been removed from server`)
      resetMessage()
    })
}

export default {
  getAll,
  create,
  remove,
  update,
};