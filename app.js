const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById('overlay');
const addBook = document.querySelector(".create-book");
const library = document.querySelector(".library");
const title = document.getElementById('title');
const author = document.getElementById('author');
const hasRead = document.getElementById('hasRead');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    });
});

overlay.addEventListener('click', () =>{
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => closeModal(modal));
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    });
});

addBook.addEventListener('click', () => {
    CreateBookCard(title.value, author.value, hasRead.checked? "Read":"Not Read");
    resetValues();
});
function resetValues(){
    title.value = "";
    author.value = "";
    hasRead.checked = false;
}


function openModal(modal){
    if(modal === null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}
function closeModal(modal){
    if(modal === null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}


function CreateBookCard(title, author, read){
    
    const bookCard = document.createElement("div");
    const bTitle = document.createElement("div");
    const bAuthor = document.createElement("div");
    const bHasRead = document.createElement("button");
    const bRemove = document.createElement("button");
    if(title == ''|| author == '') return;
    bookCard.classList.add("book-card");
    bTitle.textContent = `${title}`;
    bTitle.classList.add("title");
    bAuthor.classList.add("author");
    if(read.toLowerCase() == "read")
        bHasRead.classList.add("read");
    else
        bHasRead.classList.add("not-read");
    bRemove.classList.add("remove-card");
    bHasRead.addEventListener('click', () =>{

        if(bHasRead.textContent.toLowerCase() == "read"){
            bHasRead.classList.remove("read");
            bHasRead.textContent = "Not Read";
            bHasRead.classList.add("not-read")
        }
        else
        {
            bHasRead.classList.remove("not-read");
            bHasRead.textContent = "Read";
            bHasRead.classList.add("read");
        }
            
    });
    bRemove.addEventListener('click', () =>{
        bookCard.remove();
    });
    bAuthor.textContent = `${author}`;
    bHasRead.textContent = `${read}`;
    bRemove.textContent = 'Remove';
    bookCard.append(bTitle, bAuthor, bHasRead, bRemove);
    library.appendChild(bookCard);
}