import React, { useState, useEffect } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	const API_URL = "https://playground.4geeks.com/contact/agendas"
	const username = "Brayan2JZ"



	return {
		store: {
			contacts: []
		},
		actions: {
			addUsername: () => {
				fetch(`${API_URL}/${username}`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({})
				})
					.then((resp) => {
						if (!resp.ok) { throw { status: resp.status, statusText: resp.statusText } }
						console.log("Raw data from API: ", resp);
						return resp.json();
					})
					.then
			},


			addContacts: (contactData) => {
				fetch(`${API_URL}/${username}/contacts`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(contactData)
				})
					.then((resp) => {
						if (resp.ok) {
							console.log("Raw data from API: ", resp);
							return resp.json();
						}
						throw { status: resp.status, statusText: resp.statusText }
					})
					.then((data) => {
						console.log("response jsonified", data)
						getActions().getContacts()
					})
					.catch((error) => console.error("add Contact failed", error));
			},
			deleteContacts: (id) => {
				fetch(`${API_URL}/${username}/contacts/${id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					},
				})
					.then((resp) => {
						if (resp.ok) {
							console.log("Raw data from API: ", resp);
							// return resp.json();
							return resp.text().then(text => text ? JSON.parse(text) : {});
						}
						throw { status: resp.status, statusText: resp.statusText }
					})
					.then((data) => {
						console.log("response jsonified", data)
						getActions().getContacts()
					})
					.catch((error) => console.error("failed to delete Contact", error))
			},
			editContact: (id, contactData) => {
				fetch(`${API_URL}/${username}/contacts/${id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(contactData)
				})
					.then((resp) => {
						if (!resp.ok) { throw { status: resp.status, statusText: resp.statusText } }
						console.log("Raw data from API: ", resp);
						return resp.json();
					})
					.then((data) => {
						console.log("respone jsonified", data);
						getActions().getContacts()
					})
					.catch((error) => console.error("failed to edit Contact", error))
			},
			getContacts: () => {
				fetch(`${API_URL}/${username}`)
					.then((resp) => {
						if (!resp.ok) { throw { status: resp.status, statusText: resp.statusText } }
						console.log("Raw data from API: ", resp);
						return resp.json();
					})
					.then((data) => {
						console.log("response jsonified", data);
						if (Array.isArray(data.contacts)) {
							setStore({ contacts: data.contacts })
							console.log("Contacts set in store", data.contacts)
						} else {
							console.error("Fetch data not Array", data.contacts);
							setStore({ contacts: []})
						}
					})
					.catch((error) => {
						console.error("Failed to get contacts", error);
						error.status === 404 && getActions().addUsername();
					})
			}
		}
	};
};

export default getState;
