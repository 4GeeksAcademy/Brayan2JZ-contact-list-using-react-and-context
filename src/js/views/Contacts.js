import React from "react";
import "../../styles/home.css";

export const Contacts = () => (


    <li className="list-group-item">
        <div className="container">
            <div>
                <p className="text-right my-3">
                    <Link className="btn btn-success" to="/add">Add new contact</Link>
                </p>
                <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                    <ul className="list-group pull-down" id="contact-list">
                        <ContactCard onDelete={() => this.setState({ showModal: true })} />
                    </ul>
                </div>
            </div>
            <Modal show={this.state.showModal} onClose={() => this.setState({ showModal: false })} />
        </div>
    </li>

);