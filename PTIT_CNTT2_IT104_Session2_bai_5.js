let phoneBooks = [];
const addContact = (name, phone, email) => {
  const contact = { name, phone, email };
  phoneBooks.push(contact);
};
const displayContact = () => {
  console.log("Danh bạ:");
  phoneBooks.forEach((contact, index) => {
    console.log(
      `${index + 1}. Tên: ${contact.name}, SĐT: ${contact.phone}, Email: ${
        contact.email
      }`
    );
  });
};
