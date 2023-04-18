//Create list to store all entries 
let allEntries = []; 
let openedEntries = [];

//Create object for entry 
class Entry{
  
  constructor(entryColor, entryContent, entryKeyword){
    this.color = entryColor; 
    this.content = entryContent; 
    this.keyword = entryKeyword; 
  }
  
}

function addNewEntry(noteColor, noteContent, noteKeyword){
  const entry = new Entry(noteColor, noteContent, noteKeyword); 
  allEntries.push(entry); 
}

//retrieve from local storage and append each item to the DOM 
function retrieveFromLocalStorage() {
  const entriesArrayString = localStorage.getItem('storedEntries');
  const entriesArray = JSON.parse(entriesArrayString);
  allEntries = entriesArray; 

  /* create a circle inside the 'entries-box' class for each entry and set the color accordingly */ 

  for (const entryData of entriesArray){
    const para = document.createElement("p"); 
    para.classList.add('entry-circle'); 
    para.style.backgroundColor = entryData.color; 

    const containerElem = document.querySelector(".entries-box"); 
    containerElem.appendChild(para); 
  }
}


if (localStorage.getItem('storedEntries') != null){
  retrieveFromLocalStorage(); 
}

/*----------------------------------------------------------------------------*/

const open = document.getElementById('open'); 

const modal_container = document.getElementById('modal_container'); 

const close = document.getElementById('close'); 

open.addEventListener('click', () => {
 modal_container.classList.add('show');
 showModalEntry()
}); 

close.addEventListener('click', () => {
modal_container.classList.remove('show');

saveToLocalStorage();
const containerElem = document.querySelector(".entries-box");
containerElem.remove(); 
const newContainer = document.createElement('div'); 
newContainer.className = "entries-box"; 
document.body.appendChild(newContainer); 
retrieveFromLocalStorage();
});

/* randomly choose an entry from 'entriesArray' and display it in the pop up */

function saveToLocalStorage(){
  const entriesArrayString = JSON.stringify(allEntries);
  localStorage.setItem('storedEntries', entriesArrayString);    
}



function showModalEntry(){
  if (allEntries.length > 0){
    const randomIndex = Math.floor(Math.random() * allEntries.length);
    const randomEntry = allEntries[randomIndex];
    const popupBox = document.querySelector('.entry-box'); 
    popupBox.style.backgroundColor = randomEntry.color;
    popupBox.textContent = randomEntry.content;  

    openedEntries.push(allEntries[randomIndex]); 
    allEntries = rebuildArray(randomIndex, allEntries); 
  

    console.log(allEntries);
    console.log(openedEntries);
  }
}


/* use function to delete opened entry from the entries collection*/ 
function rebuildArray(index, array){
  let newArray = []; 
  for (let i=0; i < array.length; i++){
    if (i != index){
      newArray.push(array[i]); 
    }
  }

  return newArray; 
}






// make sure that openedEntries stays the same even when changing pages 







