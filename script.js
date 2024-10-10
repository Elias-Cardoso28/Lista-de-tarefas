
function addTask() {
    let input = document.querySelector('input').value

    let li = document.createElement('li')

    li.innerHTML = input + '<span onclick="deleteTask(this)">❌</span>'


    document.querySelector('ul').appendChild(li)

    document.querySelector('input').value = ""
    
}


function deleteTask(li) {
    li.parentElement.remove()
}

