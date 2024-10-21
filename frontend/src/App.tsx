import './App.css'
import Note from './components/Note'

function App() {

  return (
    <div className='homePage'>
      <div className='navBar'>
        <h1>Thoughts by <a href="https://x.com/josepht273">Joseph Tadesse</a></h1>
      </div>

      <div className='postArea'>
        <textarea rows={5} className='textArea link' placeholder='Write note max allowed character is 200' maxLength={200}></textarea>
        <input type="text" placeholder='Display Name' className='link' />
        <div>
          <button className='postButton link'>Post</button>
        </div>
      </div>
      <div id='cards'>
        <Note content="Hello World" displayName="Someone"/>
        <Note content="Hello World" displayName="Someone"/>
        <Note content="Hello World" displayName="Someone"/>
      </div>
    </div>
  )
}

export default App
