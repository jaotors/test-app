import logo from './logo.svg'
import './App.css'
import Welcome from './components/Welcome'
import Goodbye from './components/Goodbye'
import Comment from './components/Comment'

const user = {
  name: 'Another Joshua',
  avatarUrl: 'https://avatars.githubusercontent.com/u/7279524?v=4'
}

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Welcome name='Joshua' age={28} />
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <Comment
          user={user}
          date={new Date().toString()}
          text={'comment here test'}
        />
        <Goodbye name='Joshua' />
      </header>
    </div>
  )
}

export default App
