const button= button.querySelector('add')

button.addEventListener('click', () => {
    function newElement() {
        const li = document.createElement('li')
        const  choreInput = doucment.getElementById('listitem').value
        const chore = docoument.createTextNode(choreInput);
        li.appendChild(chore);
        if (choreInput === '') {
            alert('Please enter a new chore');
    
        } else {
            document.getElementById('list').appendChild(li);
        }
        function newElement() {
    const li = document.createElement('li')
    const  choreInput = doucment.getElementById('listitem').value
    const chore = docoument.createTextNode(choreInput);
    li.appendChild(chore);
    if (choreInput === '') {
        alert('Please enter a new chore');

    } else {
        document.getElementById('list').appendChild(li);
    }
}
document.getElementById('addChore').value = "";
    }
})
