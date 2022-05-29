import './styles/App.css'
import { useState } from 'react'
import Home from './components/Home'

const App = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [formValues, setFormValues] = useState({ name: '', age: '', email: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
    // Uses bracket notation to access a key in state that is a match to the input's name and set's it to the inputs value
    // This has already been hooked up for you
  }

  const incrementPage = () => {
    setCurrentPage((prevState) => prevState + 1)
    // Already does what you need it to, just have to hook it up to your buttons
  }

  return (
    <div className="App">
      <Home
        currentPage={currentPage}
        name={formValues.name}
        age={formValues.age}
        email={formValues.email}
        incrementPage={incrementPage}
        handleChange={handleChange}
      />
    </div>
  )
}

export default App
