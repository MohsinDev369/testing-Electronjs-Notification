var notificationBtn = document.getElementById('notificationBtn')

var notification = {
  title : 'This is Mohsin ☻',
  body : 'Click Me',
  message: 'Clicked!!!',
  icon: 'Assets/icons/png/icon.png'

}
notificationBtn.addEventListener('click',()=>{
  new window.Notification( notification.title, notification )
  .onclick = () => document.getElementById("output").innerText = notification.message
})
   

    