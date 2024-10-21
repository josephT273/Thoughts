import { useEffect, useState } from 'react'
import './App.css'
import Note from './components/Note'
import axios from 'axios';

interface DataType {
  _id: string,
  note: string,
  displayName: string,
}
const apiUrl = import.meta.env.VITE_API_URL;

function App() {

  const [note, setNote] = useState("");
  const [displayName, setDisplayName] = useState("Anonymous");
  const [data, setData] = useState<DataType[]>([]);

  const handlePost = async() => {
    if (!note.trim()) {
      alert("Note cannot be empty");
      return;
    }

    const noteData = {
      note: note.trim(),
      displayName: displayName.trim() || "Anonymous"
    }
    await axios.post(apiUrl+"/api/v1/note", noteData);
    setNote("");
    fetchNotes()
  }
  const fetchNotes = async () => {
    await axios.get(apiUrl+"/api/v1/note")
      .then((res) => {
        setData(res.data.data);
        console.log(data)
      }).catch(
        e => console.error(e)
      );
  };

  useEffect(()=> {
    fetchNotes();
  }, []);

  console.log(data);


  return (
    <div className='homePage'>
      <div className='navBar'>
        <h1>Thoughts by <a href="https://x.com/josepht273">Joseph Tadesse</a></h1>
      </div>

      <div className='postArea'>
        <textarea rows={5} className='textArea link' value={note} placeholder='Write note max allowed character is 200' maxLength={200} onChange={(e) => setNote(e.target.value)}>{note}</textarea>
        <input type="text" placeholder='Display Name' className='link' onChange={(e) => setDisplayName(e.target.value)} value={displayName} />
        <div>
          <button className='postButton link' onClick={handlePost}>Post</button>
        </div>
      </div>
      <div id='cards'>
        {data.map((res) => (
          <Note key={res._id} content={res.note} displayName={res.displayName}/>
        ))}
      </div>
    </div>
  )
}

export default App
