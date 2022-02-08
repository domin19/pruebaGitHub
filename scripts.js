const pendingTasks = document.getElementById('pending-tasks')
const finishedTasks = document.getElementById('finished-tasks')

pendingTasks.addEventListener('dragstart', (e)=>{
    console.log(e.target);
})

pendingTasks.addEventListener('drag', (e)=>{
    e.target.classList.add('active')
})

pendingTasks.addEventListener('dragend', (e)=>{
    e.target.classList.add('active')//cambia de color en el css
})

finishedTasks.addEventListener('dragover', (e)=>{
    e.preventDefault()
})

finishedTasks.addEventListener('drop', (e)=>{
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    finishedTasks.appendChild(pendingTasks.removeChild(element))
})