let SearchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    SearchForm.classList.toggle('active');
    Navbar.classList.remove('active');
    CartItem.classList.remove('active');
}

