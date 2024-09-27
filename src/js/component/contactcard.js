import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";


export const ContactCard = ({ contact }) => {
	const { actions } = useContext(Context); 
	const [showModal, setShowModal] = useState(false);

	const handleDelete = () => setShowModal(true);
	const confirmDelete = () => {
		actions.deleteContacts(contact.id);
		setShowModal(false);
	};
	const closeModal = () => setShowModal(false);

	return (
		<li className="list-group-item">
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" width="160px" />
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<Link to={`/edit-contact/${contact.id}`}>
							<button className="btn"><i className="fas fa-pencil-alt me-3"></i></button>
						</Link>
						<button className="btn" onClick={handleDelete}><i className="fa-solid fa-trash"></i></button>
						{showModal && <Modal closeModal={closeModal} confirmDelete={confirmDelete} />}
					</div>
					<label className="name lead">{contact.name}</label>
					<br />
					<i className="fas fa-map-marker-alt text-muted me-3"></i>
					<span className="text-muted">{contact.address}</span>
					<br />
					<span className="fa fa-phone fa-fw text-muted me-3" data-toggle="tooltip" title="" data-original-title="(870) 288-4149"></span>
					<span className="text-muted small">{contact.phone}</span>
					<br />
					<span className="fa fa-envelope fa-fw text-muted me-3" data-toggle="tooltip" data-original-title="" title=""></span>
					<span className="text-muted small text-truncate">{contact.email}</span>
				</div>
			</div>
		</li>
	)
}