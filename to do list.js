let deleteBtn = document.querySelector('#class')
let addtask = document.querySelector('.submit')
let list = document.querySelector('ul')
let savetask = document.querySelector('#save')
let taskobj = []
showtask()

// setting entered task into the local storage
addtask.addEventListener('click', function (event) {
  event.preventDefault()
  let value = document.querySelector('#add-task').value
  if(value !== ""){
  local()
  taskobj.push(value)
  localStorage.setItem('localtask', JSON.stringify(taskobj))
  document.querySelector('#add-task').value = ''
  showtask()
  }
  else{

    
  }
})

// showing task in user view
function showtask () {
  local()
  let html = ''
  taskobj.forEach((item, index) => {
  html += ` <li class="li">
            <span >${index+1}</span>
            <span class='task'>${item}</span>
            <input type="button" value="delete" class="delete" onclick=deletetask(${index})>
            <input type="button" value="edit" class="edit" onclick=edittask(${(item,
            index)})>
            </li>`

  })
  list.innerHTML = html
}

// delete button task
let deletetask = index => {
  local()
  taskobj.splice(index, 1)
  localStorage.setItem('localtask', JSON.stringify(taskobj))
  showtask()
}

// Edit task

function edittask (index) {
  local()
  document.querySelector('#add-task').value = taskobj[index]
  savetask.style.display = 'inline-block'
  addtask.style.display = 'none'
  document.querySelector('#hidden').value = index
}

//save task button
savetask.addEventListener('click', function (e) {
  e.preventDefault()
  local()
  let saveindex = document.querySelector('#hidden').value
  let value = document.querySelector('#add-task').value
  taskobj[saveindex] = value
  localStorage.setItem('localtask', JSON.stringify(taskobj))
  savetask.style.display = 'none'
  addtask.style.display = 'inline-block'
  document.querySelector('#add-task').value = ''
  showtask()
})

//function for local storage
function local () {
  let webtask = localStorage.getItem('localtask')
  if (webtask === null) {
    taskobj = []
  } else {
    taskobj = JSON.parse(webtask)
  }
}

// delete all button
let dltall = document.querySelector('.dltall')
dltall.addEventListener('click', function (e) {
  e.preventDefault()
  local()
  localStorage.clear('localtask')
  showtask()
})

//line through condition

list.addEventListener('click', function (event) {
  let li = document.querySelectorAll('ul li .task')
  if (event.target.className === 'task') {
    if (event.target.className === 'task') {
      event.target.classList.add('checked')
    }
  } else if (event.target.className === 'task checked') {
    if (event.target.className === 'task checked') {
      event.target.classList.remove('checked')
    }
  }
})
//date showing

const time = new Date();

document.querySelector("label").textContent = time.toDateString();