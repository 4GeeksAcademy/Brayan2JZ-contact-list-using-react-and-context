import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const ContactForm = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const isEdit = Boolean(id);
    const navigate = useNavigate();

    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
    });

    useEffect(() => {
        if (isEdit) {
            const contact = store.contacts.find(c => c.id === parseInt(id));
            if (contact) {
                setContactData(contact)
            }
        }
    }, [id, isEdit, store.contacts])
    const handleChange = (e) => {
        setContactData({ ...contactData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEdit) {
                await actions.editContact(id, contactData);
            } else {
                await actions.addContacts(contactData);
            }
            await actions.getContacts();
            navigate("/")
        } catch (error) {
            console.error(isEdit ? "error updating contact" : "error adding contact", error);
        }
    }

    return (
        <div className="container d-flex justify-content-center">
            <div className="container">
                <div>
                    <h1 className="text-center mt-5">{isEdit ? "Update Contact" : "Add a new contact"}</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mt-3">
                            <label>Full Name</label>
                            <input type="text" name="name" className="form-control" placeholder="Full Name" onChange={handleChange} value={contactData.name} />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" className="form-control" placeholder="Enter email" onChange={handleChange} value={contactData.email} />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="phone" name="phone" className="form-control" placeholder="Enter phone" onChange={handleChange} value={contactData.phone} />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" name="address" className="form-control" placeholder="Enter address" onChange={handleChange} value={contactData.address} />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary form-control mt-4"
                        >
                            {isEdit ? "Update Contact" : "Save"}
                        </button>
                        <Link className="mt-3 w-100 text-center" to="/">or get back to contacts</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};
