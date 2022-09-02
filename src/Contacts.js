import { useState } from "react";

export default function Contacts({ label }) {
  const [contacts, setContacts] = useState([]);
  const properties = ["name", "tel"];
  const options = { multiple: true };

  async function handleGetContacts() {
    try {
      const contacts = await navigator.contacts.select(properties, options);
      setContacts(contacts);
    } catch (ex) {
      console.log(ex);
    }
  }

  return navigator.contacts ? (
    <div>
      <button onClick={handleGetContacts}>
        <span>{label}</span>
      </button>
      <div>
        <ul>
          {contacts.map((c) => (
            <li key={c.tel}>
              {c.name} {c.tel}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : null;
}
