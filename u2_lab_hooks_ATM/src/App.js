import logo from './ga.png'
import './styles/App.css'
import Account from './components/Account'

const App = () => {

  return (
    <div id="content">
      <div id="nav">
        <div id="logo">
          <img src={logo} alt="General Assembly Logo" />
        </div>
        <div id="title">Bank of GA</div>
      </div>
      <div className="bank">
        <Account name="Checking" />
      </div>
    </div>
  )
}

export default App
