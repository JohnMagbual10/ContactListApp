import React from 'react';

// ContactRow component to render a single row of contact information
const ContactRow = ({ contact }) => {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
};

export default ContactRow;
