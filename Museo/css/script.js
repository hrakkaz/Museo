const container = document.getElementById('container')
const signBtn = document.getElementById('sign')
const loginBtn = document.getElementById('login')

signBtn.addEventListener('click', ()=>
{
    container.classList.add("active");
});

loginBtn.addEventListener('click', ()=>
{
    container.classList.remove("active");
});

