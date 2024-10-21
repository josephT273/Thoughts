import { jsx as _jsx, jsxs as _jsxs } from "hono/jsx/jsx-runtime";
import { useEffect, useState } from 'react';
import './App.css';
import Note from './components/Note';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;
function App() {
    const [note, setNote] = useState("");
    const [displayName, setDisplayName] = useState("Anonymous");
    const [data, setData] = useState([]);
    const handlePost = async () => {
        const n = {
            note, displayName
        };
        await axios.post(apiUrl + "/api/v1/note", n);
        fetchNotes();
    };
    const fetchNotes = async () => {
        await axios.get(apiUrl + "/api/v1/note").then(res => {
            setData(res.data.data);
        }).catch(e => console.log(e));
    };
    useEffect(() => {
        fetchNotes();
    }, []);
    console.log(data);
    return (_jsxs("div", { className: 'homePage', children: [_jsx("div", { className: 'navBar', children: _jsxs("h1", { children: ["Thoughts by ", _jsx("a", { href: "https://x.com/josepht273", children: "Joseph Tadesse" })] }) }), _jsxs("div", { className: 'postArea', children: [_jsx("textarea", { rows: 5, className: 'textArea link', placeholder: 'Write note max allowed character is 200', maxLength: 200, onChange: (e) => setNote(e.target.value), children: note }), _jsx("input", { type: "text", placeholder: 'Display Name', className: 'link', onChange: (e) => setDisplayName(e.target.value), value: displayName }), _jsx("div", { children: _jsx("button", { className: 'postButton link', onClick: handlePost, children: "Post" }) })] }), _jsx("div", { id: 'cards', children: data.map((res) => (_jsx(Note, { content: res.note, displayName: res.displayName }, res.__id))) })] }));
}
export default App;
