const water1 = localStorage.getItem('WATER');
const sleep1= localStorage.getItem('SLEEP');
const blood1 = localStorage.getItem('BLOOD');
const sugar1 = localStorage.getItem('SUGAR');
const steps1 = localStorage.getItem('STEPS');
const calories1 = localStorage.getItem('CALORIES');

document.getElementById('result-water' ).innerHTML = water1;
document.getElementById('result-sleep').innerHTML = sleep1;
document.getElementById('result-blood' ).innerHTML = blood1;
document.getElementById('result-sugar').innerHTML = sugar1;
document.getElementById('result-steps' ).innerHTML = steps1;
document.getElementById('result-calories').innerHTML = calories1;
 




//   // script.js 

const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");


// Get today's date
var today = new Date().toISOString().split('T')[0];

// Set the default value of the input field to today's date
document.getElementById('datePicker').value = today;

// Set the min attribute to today's date to disable dates after today
document.getElementById('datePicker').setAttribute('max', today);

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
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})








const editIcon = `<i class="fas fa-edit"></i>` 

const deleteIcon = `<i class="fas fa-trash"></i>` 

function clearInputs() { 
	waterInput.value = ""
	sleepInput.value = ""
	bloodInput.value = ""
	sugarInput.value = ""
	stepsInput.value = ""
	caloriesInput.value = ""
} 

function addToLocalStorage(){ 
	localStorage.setItem("date", JSON.stringify(date)) 
	localStorage.setItem("water", JSON.stringify(water)) 
	localStorage.setItem("sleep", JSON.stringify(sleep)) 
	localStorage.setItem("blood", JSON.stringify(blood)) 
	localStorage.setItem("sugar", JSON.stringify(sugar)) 
	localStorage.setItem("steps", JSON.stringify(steps)) 
	localStorage.setItem("calories", JSON.stringify(calories)) 
} 

function activateEdit(i){ 
	waterInput.value = water[i] 
	sleepInput.value = sleep[i] 
	bloodInput.value = blood[i] 
    sugarInput.value = sugar[i] 
	stepsInput.value = steps[i] 
    caloriesInput.value = calories[i] 
	editIndex = i 
	submitButton.classList.add("hidden") 
	editSection.classList.remove("hidden") 
} 

function cancelEdit() { 
	clearInputs() 
	editIndex = -1 
	submitButton.classList.remove("hidden") 
	editSection.classList.add("hidden") 
} 

function editRow(){ 
	if(editIndex==-1) return
	water[editIndex] = waterInput.value 
	sleep[editIndex] = sleepInput.value 
	blood[editIndex] = bloodInput.value 
	sugar[editIndex] = sugarInput.value 
	steps[editIndex] = stepsInput.value 
	calories[editIndex] = caloriesInput.value 
	fillTable() 
	addToLocalStorage() 
	cancelEdit() 
} 

function deleteRow(i){ 
	if(!confirm( 
	`Confirm that you want to delete the entry: 
	\n ${date[i]}: ${water[i]}ml, ${sleep[i]}hours, 
${blood[i]}mm Hg,${sugar[i]}mg/dL, ${steps[i]}steps, 
${calories[i]}calories`)) 
return
	date.splice(i, 1) 
	water.splice(i, 1) 
	sleep.splice(i, 1) 
	blood.splice(i, 1) 
	sugar.splice(i, 1) 
	steps.splice(i, 1) 
	calories.splice(i, 1) 
document.querySelector(`#output > tr:nth-child(${i+1})`) 
	.classList.add("delete-animation") 
	addToLocalStorage() 
	setTimeout(fillTable, 500) 
} 

function fillTable(){ 
	const tbody = document.getElementById("output") 
	const rows = Math.max(water.length, sleep.length, blood.length, sugar.length, steps.length, calories.length) 
	let html = ""
	for(let i=0; i<rows; i++){ 
		let w = water[i] || "N/A"
		let sl = sleep[i] || "N/A"
		let b = blood[i] || "N/A"
        let su = sugar[i] || "N/A"
		let st = steps[i] || "N/A"
		let c = calories[i] || "N/A"
		let d = date[i] || "N/A"
		html+=`<tr> 
			<td>${d}</td> 
			<td>${w}</td> 
			<td>${sl}</td> 
            <td>${b}</td> 
			<td>${su}</td> 
			<td>${st}</td> 
			<td>${c}</td> 
			<td> 
				<button onclick="activateEdit(${i})"
						class="edit">${editIcon} 
				</button> 
			</td> 
			<td> 
				<button 
					onclick="deleteRow(${i})"
					class="delete">${deleteIcon} 
				</button> 
			</td> 
		</tr>`		 
	} 
	tbody.innerHTML = html; 
} 

let editIndex = -1; 

let date = 
	JSON.parse(localStorage.getItem("date")) || [] 
let water = 
	JSON.parse(localStorage.getItem("water")) || [] 
let sleep = 
	JSON.parse(localStorage.getItem("sleep")) || [] 
let blood = 
	JSON.parse(localStorage.getItem("blood")) || [] 
let sugar = 
	JSON.parse(localStorage.getItem("sugar")) || [] 
let steps = 
	JSON.parse(localStorage.getItem("steps")) || [] 
let calories = 
	JSON.parse(localStorage.getItem("calories")) || [] 

const waterInput = document.getElementById("water") 
const sleepInput = document.getElementById("sleep") 
const bloodInput = document.getElementById("blood") 
const sugarInput = document.getElementById("sugar") 
const stepsInput = document.getElementById("steps") 
const caloriesInput = document.getElementById("calories") 

const submitButton = document.getElementById("submit") 
const editSection = document.getElementById("editSection") 

fillTable() 

submitButton.addEventListener("click", ()=>{ 
	const w = waterInput.value || null; 
	const sl = sleepInput.value || null; 
	const b = bloodInput.value || null; 
	const su = sugarInput.value || null; 
	const st = stepsInput.value || null; 
	const c = caloriesInput.value || null; 
	if(w===null || sl===null || b===null || su===null || st===null || c===null) 
    { 
		alert("Please enter all the fields.") 
		return
	} 
	const d = new Date().toLocaleDateString() 
	date = [d, ...date] 
	water = [w, ...water] 
	sleep = [sl, ...sleep] 
	blood = [b, ...blood] 
	sugar = [su, ...sugar] 
	steps = [st, ...steps] 
	calories = [c, ...calories] 
	// date.push(d) 
	// water.push(w) 
	// sleep.push(e) 
	// blood.push(b) 
	clearInputs() 
	fillTable() 
	addToLocalStorage() 
})
