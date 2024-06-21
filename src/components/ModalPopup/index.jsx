import './styles.css';

export default function Modal({id, header, body, footer, onClose}) {
    return (
       <div className="modal-container" id={id}>
        <div className="modal-content">
            <div className="modal-header">
                <span className="close-model-icon" onClick={onClose}>&times;</span>
                <h2>{header ? header: 'Header'}</h2>
            </div>
            <div className="modal-body">
                {
                    body ? (body) : <p>This is modal body</p>
                }
            </div>
            <div className="modal-footer">
                {
                    footer ? (footer) : <p>This is modal footer</p>
                }
            </div>
        </div>
       </div> 
    );
}