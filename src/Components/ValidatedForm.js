import React, { useState } from "react";

function ValidatedForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contacts, setContacts] = useState([]);

  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("Please fill all fields");
      return;
    }
    const newContact = { name, email,id: Date.now() };
    setContacts([...contacts, newContact]);
    setName("");
    setEmail("");
    console.log(newContact);

    
  };

  return (
    <div>
      <h1>Simple Form with Validation</h1>
      <form onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      <div>
        <h3>Contact List</h3>
        <ul>
          {contacts.map((contact) => (
            <li  key={contact.id}>
              {contact.name} - {contact.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ValidatedForm;
