import './App.css'

function App() {

  return (
    <div className='homePage'>
      <div className='navBar'>
        <h1>Thoughts by <a href="https://x.com/josepht273">Joseph Tadesse</a></h1>
      </div>

      <div className='postArea'>
        <textarea rows={5} className='textArea' placeholder='Write note max allowed character is 200' maxLength={200}></textarea>
        <input type="text" placeholder='Display Name' />
        <div>
          <button className='postButton'>Post</button>
        </div>
      </div>
    </div>
  )
}

export default App
