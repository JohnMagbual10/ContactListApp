import React, { useState, useEffect } from 'react';

export default function SelectedContact({ selectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        if (response.ok) {
          const data = await response.json();
          setContact(data);
        } else {
          console.error('Failed to fetch contact');
        }
      } catch (error) {
        console.error('Error fetching contact:', error);
      }
    };

    if (selectedContactId) {
      fetchContact();
    }
  }, [selectedContactId]);

  console.log('Contact:', contact);

  return (
    <div>
      <h2>Contact Details</h2>
      {contact ? (
        <div>
          <p><strong>Name:</strong> {contact.name}</p>
          <p><strong>Email:</strong> {contact.email}</p>
          <p><strong>Phone:</strong> {contact.phone}</p>
          {contact.address && (
            <div>
              <p><strong>Address:</strong></p>
              <p><strong>Street:</strong> {contact.address.street}</p>
              <p><strong>Suite:</strong> {contact.address.suite}</p>
              <p><strong>City:</strong> {contact.address.city}</p>
              <p><strong>Zipcode:</strong> {contact.address.zipcode}</p>
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
