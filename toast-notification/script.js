const btn= document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener('click', () => {
    createNotification();
});

createNotification = () =>  {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.innerText ="This challange is Awesome";

    container.appendChild(notif);

    setTimeout(()=> {
        notif.remove();
    }, 3000)
}