import { jsx as _jsx, jsxs as _jsxs } from "hono/jsx/jsx-runtime";
import './Note.css';
const Note = ({ content, displayName }) => {
    return (_jsx("div", { className: 'card', children: _jsxs("div", { className: 'card-content', children: [_jsx("h4", { children: content }), _jsx("span", { className: 'card-text', children: displayName })] }) }));
};
export default Note;
