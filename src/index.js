document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (x) => {
      x.preventDefault()
      addAll(x.target.new_task_description.value)
      form.reset()
   })})

   function addAll(everything) {
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.addEventListener('click', toDelete)
    btn.textContent = 'x'
    p.textContent = `${everything}  `
    p.appendChild(btn)
    document.querySelector('#list').appendChild(p)
   }

   function toDelete(e) {
    e.target.parentNode.remove()
   }