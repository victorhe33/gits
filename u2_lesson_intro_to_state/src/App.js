import Tasks from './Tasks'
import Input from './Input'

const App = () => {

  return (
    <div className="app">
      <Input />
      <Tasks tasks={[]} />
    </div>
  )
}

export default App
