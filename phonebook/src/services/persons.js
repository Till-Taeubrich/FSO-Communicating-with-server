import axios from "axios";
const personUrl = '/api/persons'

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
  .catch(() => {
    return
  });
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