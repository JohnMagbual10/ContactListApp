import React, { useState } from 'react';
import ContactRow from './ContactRow'; // Import ContactRow component

// Dummy contact data
const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

const ContactList = () => {
  // Set up contacts state using dummyContacts as default value
  const [contacts, setContacts] = useState(dummyContacts);

  // Log out all the contacts
  console.log("Contacts: ", contacts);

  return (
    // Table structure
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {/* Map over contacts array and render ContactRow component for each contact */}
        {contacts.map(contact => (
          <
            ContactRow key={contact.id} contact={contact}
             />

        ))}
      </tbody>
    </table>
  );
};

export default ContactList;
