import ReactDOM from "react-dom";

function Modal(props) {
    return ReactDOM.createPortal(
        <div>
            {props.children}
        </div>,
        document.getElementById('modal')
    )
}

export {
    Modal
}