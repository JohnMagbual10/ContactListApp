import React, { useState, useEffect } from 'react';
import ContactRow from './ContactRow'; // Import ContactRow component

const ContactList = () => {
  // Set up contacts state with an empty array as the default value
  const [contacts, setContacts] = useState([]);

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Define an async function to fetch the data
    const fetchContacts = async () => {
      try {
        // Fetch data from the API
        const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users");
        
        // Check if the response is successful
        if (response.ok) {
          // Parse the JSON response
          const data = await response.json();
          
          // Update the contacts state with the fetched data
          setContacts(data);
        } else {
          // Handle the error if the response is not successful
          console.error("Failed to fetch contacts");
        }
      } catch (error) {
        // Handle any errors that occur during fetching
        console.error("Error fetching contacts:", error);
      }
    };

    // Call the fetchContacts function when the component mounts
    fetchContacts();
  }, []); // Empty dependency array ensures this effect runs only once after component mount

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
          <ContactRow key={contact.id} contact={contact} />
        ))}
      </tbody>
    </table>
  );
};

export default ContactList;
