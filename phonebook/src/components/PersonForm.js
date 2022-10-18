import React from 'react'

export default function PersonForm({handleNameChange, handleNumberChange, addPerson}) {
  return (
    <form>
      <div>
        name: <input onChange={handleNameChange} />
      </div>
      <div>
        number: <input onChange={handleNumberChange} />
      </div>
      <div>
        <button onClick={addPerson} type="submit">
          add
        </button>
      </div>
    </form>
  );
}
