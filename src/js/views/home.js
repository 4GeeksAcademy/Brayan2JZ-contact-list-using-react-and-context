import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { ContactCard } from "../component/contactcard";

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<>
			<div className="d-flex justify-content-end my-5" style={{marginRight: "15%"}}>
				<Link to="/addContact">
					<button className="btn btn-success">Add New Contact</button>
				</Link>
			</div>
			<div className="container">

				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{/* <ContactCard onDelete={() => this.setState({ showModal: true })} /> */}
						{store.contacts.map((contact, index) => (
							<ContactCard key={index} contact={contact} />
						))}
						
					</ul>
				</div>
			</div>
		</>


	);
};