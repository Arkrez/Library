class Book {
    constructor(title, author, read)
    {
        this.title = title;
        this.author = author;
        this.read = read;
    }
}

const LibraryMod = (()=>{
    LibraryController = {};
    const addBook = document.querySelector(".create-book");
    const library = document.querySelector(".library");
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const hasRead = document.getElementById('hasRead');
    addBook.addEventListener('click', () => {
        const newBook = new Book(title.value, author.value, hasRead.checked? "Read":"Not Read")
        CreateBookCard(newBook);
        resetValues();
    });
    function resetValues(){
        title.value = "";
        author.value = "";
        hasRead.checked = false;
    }
    
    function CreateBookCard(newBook){
        const bookCard = document.createElement("div");
        const bTitle = document.createElement("div");
        const bAuthor = document.createElement("div");
        const bHasRead = document.createElement("button");
        const bRemove = document.createElement("button");

        if(newBook.title == ''|| newBook.author == '') return;

        bookCard.classList.add("book-card");
        bTitle.classList.add("title");
        bAuthor.classList.add("author");

        if(newBook.read.toLowerCase() == "read")
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
        bTitle.textContent = `${newBook.title}`;
        bAuthor.textContent = newBook.author;
        bHasRead.textContent = newBook.read;
        bRemove.textContent = 'Remove';
        bookCard.append(bTitle, bAuthor, bHasRead, bRemove);
        library.appendChild(bookCard);
    }
    
    return LibraryController;

})();

const ModalMod = (()=>{
    ModalController = {};

    const openModalButtons = document.querySelectorAll("[data-modal-target]");
    const closeModalButtons = document.querySelectorAll("[data-close-button]");
    const overlay = document.getElementById('overlay');
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
    return ModalController;
})();