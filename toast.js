function Toast(props) {
    return (
        <div className="position-fixed bottom-0 end-0 p-3" >
            <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                        <strong className="me-auto">{props.title}</strong>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">{props.message}</div>
            </div>
        </div>
    )
};