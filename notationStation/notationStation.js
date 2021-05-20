/*
    Commits field data into localStorage according to subject/body key
    and prints it out to the console
*/
function commit_note() {
    localStorage.setItem('subject', document.getElementById('subject').value);
    localStorage.setItem('body', document.getElementById('body').value);
    console.log(localStorage.getItem('subject'));
    console.log(localStorage.getItem('body'));
}
document.getElementById('submit_note').addEventListener('click', commit_note)