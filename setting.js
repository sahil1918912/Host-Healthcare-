const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");


// // Get today's date
// var today = new Date().toISOString().split('T')[0];

// // Set the default value of the input field to today's date
// document.getElementById('datePicker').value = today;

// // Set the min attribute to today's date to disable dates after today
// document.getElementById('datePicker').setAttribute('max', today);

// Show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

// close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

// change theme
themeToggler.addEventListener('click', () =>{
    alert("hello")
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})
