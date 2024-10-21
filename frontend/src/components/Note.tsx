import './Note.css'
type NoteType = {
    content: string,
    displayName?: string
}

const Note = ({content, displayName} : NoteType) => {
    return (
        <div className='card'>
            <div className='card-content'>
                <h4>{content}</h4>
                <span className='card-text'>{displayName}</span>
            </div>
        </div>
    )
}

export default Note;