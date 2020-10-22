const notes = document.getElementById('notes');

notes.value = localStorage.getItem('notes');

notes.addEventListener('input', (event) => {
    localStorage.setItem('notes', notes.value);
})