import './Note.css'

type NoteType = {
    content: string,
    displayName: string,
}

const Note = ({content, displayName} : NoteType) => {
    console.log(content)
    console.log(displayName)
    return (
        <div className='card'>
            <div className='card-content'>
                <h4>{content}</h4>
                <span className='card-text'>{displayName ? displayName : "Anonymous"}</span>
            </div>
        </div>
    )
}

export default Note;