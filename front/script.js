// Inicializa a lista de contatos do localStorage se ela não existir
if (!localStorage.getItem('contacts')) {
    localStorage.setItem('contacts', JSON.stringify([]));
}

// Carrega os contatos do localStorage
let contacts = JSON.parse(localStorage.getItem('contacts'));

// Função para renderizar a lista de contatos
function renderContacts() {
    const contactsList = document.getElementById('contacts-list');
    contactsList.innerHTML = '';
    contacts.forEach((contact, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${contact.name} - ${contact.phone} - ${contact.email} 
                        <button class="btn-edit" onclick="editContact(${index})">Editar</button>
                        <button class="btn-delete" onclick="deleteContact(${index})">Excluir</button>`;
        contactsList.appendChild(li);
    });
}

// Função para adicionar um contato
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    contacts.push({ name, phone, email });
    localStorage.setItem('contacts', JSON.stringify(contacts));
    renderContacts();
});

// Função para editar um contato
function editContact(index) {
    const contact = contacts[index];
    document.getElementById('name').value = contact.name;
    document.getElementById('phone').value = contact.phone;
    document.getElementById('email').value = contact.email;
    contacts.splice(index, 1);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    renderContacts();
}

// Função para excluir um contato
function deleteContact(index) {
    contacts.splice(index, 1);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    renderContacts();
}

// Renderiza os contatos iniciais
renderContacts();
