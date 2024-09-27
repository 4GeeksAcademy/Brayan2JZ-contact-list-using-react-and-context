import React from "react"

export const Modal = ({ closeModal, confirmDelete }) => {
    return (
        <div className="modal d-flex" tabIndex="-1" role="dialog" >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Are you sure?</h5>
                       
                            <button onClick={closeModal} type="button" className="btn" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                    <div className="modal-body">
                        <p>If you delete this thing the entire universe will go down!</p>
                    </div>
                    <div className="modal-footer">
                        <button onClick={closeModal} type="button" className="btn btn-primary">Oh no!</button>
                        <button onClick={confirmDelete} type="button" className="btn btn-secondary" data-dismiss="modal">Yes baby!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

