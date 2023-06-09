function resetAll(){
  let blue = document.querySelector('.select-blue');
  let green = document.querySelector('.select-green');
  let yellow = document.querySelector('.select-yellow');
  let orange = document.querySelector('.select-orange');
  let pink = document.querySelector('.select-pink');
  let purple = document.querySelector('.select-purple');
  blue.style.opacity = 0.5;
  green.style.opacity = 0.5;
  yellow.style.opacity = 0.5;
  orange.style.opacity = 0.5;
  pink.style.opacity = 0.5;
  purple.style.opacity = 0.5; 

  let entryContainer = document.querySelector('.entry-box'); 
  let keywordContainer = document.querySelector('.keyword-entry-box'); 
  entryContainer.style.backgroundColor = "white"; 
  keywordContainer.style.backgroundColor = "white"; 
}

function clickBlue(){
  resetAll(); 
  let blue = document.querySelector('.select-blue');
  blue.style.opacity = 1;

  let entryContainer = document.querySelector('.entry-box'); 
  let keywordContainer = document.querySelector('.keyword-entry-box'); 
  entryContainer.style.backgroundColor = "#AFCBFF"; 
  keywordContainer.style.backgroundColor = "#AFCBFF"; 
}

function clickGreen(){
  resetAll(); 
  let green = document.querySelector('.select-green');
  green.style.opacity = 1;

  let entryContainer = document.querySelector('.entry-box'); 
  let keywordContainer = document.querySelector('.keyword-entry-box'); 
  entryContainer.style.backgroundColor = "#DBFFD6"; 
  keywordContainer.style.backgroundColor = "#DBFFD6"; 
}

function clickYellow(){
  resetAll(); 
  let yellow = document.querySelector('.select-yellow');
  yellow.style.opacity = 1;

  let entryContainer = document.querySelector('.entry-box'); 
  let keywordContainer = document.querySelector('.keyword-entry-box'); 
  entryContainer.style.backgroundColor = "#FFFFD1"; 
  keywordContainer.style.backgroundColor = "#FFFFD1"; 
}

function clickOrange(){
  resetAll(); 
  let orange = document.querySelector('.select-orange');
  orange.style.opacity = 1;

  let entryContainer = document.querySelector('.entry-box'); 
  let keywordContainer = document.querySelector('.keyword-entry-box'); 
  entryContainer.style.backgroundColor = "#FFBEBC"; 
  keywordContainer.style.backgroundColor = "#FFBEBC"; 
}

function clickPink(){
  resetAll(); 
  let pink = document.querySelector('.select-pink');
  pink.style.opacity = 1;

  let entryContainer = document.querySelector('.entry-box'); 
  let keywordContainer = document.querySelector('.keyword-entry-box'); 
  entryContainer.style.backgroundColor = "#FFB5E8"; 
  keywordContainer.style.backgroundColor = "#FFB5E8";
}

function clickPurple(){
  resetAll(); 
  let purple = document.querySelector('.select-purple');
  purple.style.opacity = 1;

  let entryContainer = document.querySelector('.entry-box'); 
  let keywordContainer = document.querySelector('.keyword-entry-box'); 
  entryContainer.style.backgroundColor = "#ECD4FF"; 
  keywordContainer.style.backgroundColor = "#ECD4FF";
}


/*----------------------------------------------------------------------------*/


//Create list to store all entries 
let allEntries = []; 

//Create object for entry 
class Entry{
  
  constructor(entryColor, entryContent, entryKeyword){
    this.color = entryColor; 
    this.content = entryContent; 
    this.keyword = entryKeyword; 

    // //automatically record date

  }

}

function onSelectValueChange(){
  const newEntry = new Entry(); 

  var entryBox = document.querySelector(".entry-box"); 
  var keywordBox = document.querySelector('.keyword-entry-box'); 
  
  newEntry.color = entryBox.style.backgroundColor; 

  if (newEntry.color === ""){
    newEntry.color = "rgb(175, 203, 255)"; 
  }

  newEntry.content = entryBox.value; 
  newEntry.keyword = keywordBox.value; 

  // content box and keyword box should not be empty when submitting
  if (newEntry.content != "" && newEntry.keyword != ""){
    allEntries.push(newEntry); 
  }

  //if content box is empty change placeholder color to red


  //if keyword box is empty change placeholder color to red 

  console.log(allEntries);
  saveToLocalStorage(); 
}

let addtoEntries = document.querySelector("#submit-button"); 
addtoEntries.addEventListener("click", onSelectValueChange); 

/*----------------------------------------------------------------------------*/
//create test entries for mock purposes and add to entries list

function addNewEntry(entryColor, entryContent, entryKeyword){
  const entry = new Entry(entryColor, entryContent, entryKeyword); 
  allEntries.push(entry); 
}

const entryOne = addNewEntry(
  "rgb(175, 203, 255)", //blue 
  "Had breakfast sandwich from Starbucks and it was delicious!",
  "Starbucks Breakfast Sandwich" 
); 

const entryTwo = addNewEntry(
  "rgb(219, 255, 214)", //green 
  "Got over seven hours of sleep and had really good dirty chai :)",
  "Dirty Chai" 
); 

const entryThree = addNewEntry(
  "rgb(255, 255, 209)", //yellow 
  "Class ended really early and had fries 🍟",
  "Short Class Day" 
); 

const entryFour = addNewEntry(
  "rgb(255, 190, 188)", //orange 
  "Weather was sunny but breezy so I went for a walk. It really felt like spring today 🌸 Went out for dinner and got sushi 🍣 ate icecream after 🍦 Everything was super yummy. Took a hot bath to end the day 😎",
  "Sunny Breezy Weather" 
); 

const entryFive = addNewEntry(
  "rgb(255, 181, 232)", //pink 
  "Celebrated mom's birthday 🥳 We got strawberry cake and went out for a buffet 🎂 Ended the day with a movie 🍿",
  "Mom's Birthday" 
); 

const entrySix = addNewEntry(
  "rgb(236, 212, 255)", 
  "📓 Today was such a productive day! 💪 I woke up early, went for a 🏃‍♀️ and finished a big project at work. I feel like I can take on the world. 🌎",
  "Productive Day" 
); 

const entrySeven = addNewEntry(
  "rgb(236, 212, 255)", 
  "📓 I had a job interview today, and I think it went pretty well! 🤞 Fingers crossed that I get the job. 🤞",
  "Job Inteview Went Well" 
); 

const entryEight = addNewEntry(
  "rgb(255, 190, 188)",  
  "📓 I had a great time hanging out with my friends today. We went to a new restaurant 🍴 and laughed until our stomachs hurt. 😂 It's moments like these that make life worth living.",
  "Quality Time with Friends" 
); 

const entryNine = addNewEntry(
  "rgb(219, 255, 214)",  
  "📓 I spent the day cleaning and organizing my apartment. It feels so good to have everything in its place. 🧹🧼",
  "New Place, Cleaning Day" 
); 

const entryTen = addNewEntry(
  "rgb(175, 203, 255)",  
  "📓 Today was my sister's birthday, so I called her to wish her a happy birthday. 🎂 I miss her so much, but I'm glad we can still keep in touch. 📞",
  "Happy Birthday to My Sister" 
); 

const entryEleven = addNewEntry(
  "rgb(255, 255, 209)",  
  "📓 I tried a new hobby today and loved it! 🎨 I think I'm going to make it a regular part of my routine. 💕",
  "New Drawing Hobby" 
); 


const entryTwelve = addNewEntry(
  "rgb(175, 203, 255)", //blue 
  "📓 I had a really tough conversation with a friend today. 😔 It's never easy to confront someone, but I'm glad we were able to work things out. 🤝",
  "Conversation" 
); 

const entryThirteen = addNewEntry(
  "rgb(219, 255, 214)", 
  "📓 I'm feeling really grateful for my family today. ❤️ They always know how to make me feel better when I'm feeling down.",
  "Grateful for My Family" 
); 

const entryFourteen = addNewEntry(
  "rgb(255, 255, 209)", 
  "📓 I had a great workout today 💪 and I feel so energized! 🏋️‍♀️ I love the feeling of pushing myself to my limits.",
  "Great Workout" 
); 

const entryFifteen = addNewEntry(
  "rgb(255, 190, 188)", 
  "📓 Today was such a beautiful day ☀️ and I took a long walk outside. 🚶‍♀️ The fresh air and sunshine always make me feel better.",
  "Fresh Air and Sunshine" 
); 

const entrySixteen = addNewEntry(
  "rgb(255, 181, 232)", //pink 
  "📓 I finally finished that book I've been meaning to read! 📚 It feels good to accomplish something. 🥳",
  "Finished a Book" 
); 

const entrySeventeen = addNewEntry(
  "rgb(236, 212, 255)", 
  "📓 I had a delicious meal today 🍲 and tried a new recipe. 🍽️ Cooking is such a relaxing and enjoyable hobby.",
  "Should I make Cooking another Hobby?" 
); 

const entryEighteen = addNewEntry(
  "rgb(236, 212, 255)", 
  "📓 I got a surprise package in the mail today! 📦 It was so nice to receive something unexpected. 😍",
  "Surprise Package" 
); 

const entryNineteen = addNewEntry(
  "rgb(255, 190, 188)",  
  "📓 I went to a concert tonight 🎶 and had so much fun! It's been a while since I've been to a live show. 🎉",
  "Concert" 
); 

const entryTwenty = addNewEntry(
  "rgb(219, 255, 214)",  
  "📓 I'm feeling really proud of myself today! 🥰 I accomplished a goal that I've been working towards for a long time. 🏆",
  "Proud of Myself" 
); 

const entryTwentyOne = addNewEntry(
  "rgb(175, 203, 255)",  
  "📓 Today was a lazy day, but sometimes those are the best days. 😴 I spent the day watching movies and snacking on junk food. 🍿🍫",
  "Movies and Junk Food" 
); 

const entryTwentyTwo = addNewEntry(
  "rgb(255, 255, 209)",  
  "📓 I went for a hike today and it was so beautiful! 🌳 Nature has a way of putting things into perspective. 🌿",
  "Nature Hike" 
); 

const entryTwentyThree = addNewEntry(
  "rgb(255, 190, 188)", 
  "📓 I got a new haircut today and I love it! 💇‍♀️ It's amazing how a small change can make such a big difference. 💇‍♀️💕",
  "New Haircut" 
); 

const entryTwentyFour = addNewEntry(
  "rgb(255, 190, 188)", 
  "📓 I had a long conversation with my mom today. 💕 She always knows how to make me feel better. 📞",
  "Long Call with Mom" 
); 

const entryTwentyFive = addNewEntry(
  "rgb(175, 203, 255)",  
  "📓 I spent the day volunteering at a local charity. ❤️ It feels good to give back to the community. 🤝",
  "Volunteer at Local Charity" 
); 

const entryTwentySix = addNewEntry(
  "rgb(236, 212, 255)", 
  "📓 I'm feeling really inspired today! 🤩 I read a book that really resonated with me and it's given me a new perspective on life. 📚",
  "INSPIRATION" 
); 

const entryTwentySeven = addNewEntry(
  "rgb(175, 203, 255)", 
  "📓 I went shopping today and found some amazing deals! 🛍️ It's always nice to treat myself to something new. 💸",
  "Shopping" 
); 

const entryTwentyEight = addNewEntry(
  "rgb(219, 255, 214)", 
  "📓 I had a really productive day at work today. 💼 It feels good to be making progress towards my goals. 💪",
  "Productive Day at Work" 
); 

const entryTwentyNine = addNewEntry(
  "rgb(255, 255, 209)",
  "📓 I'm feeling really nostalgic today. 🤔 I've been looking through old photos and reminiscing about the good times. 📷",
  "Nostalgia" 
); 

const entryThirty = addNewEntry(
  "rgb(255, 181, 232)", //pink 
  "Went to the amusement park today! There was so many people but we still got to ride five attractions including the huge rollercoaster 🎢. We also visted the zoo inside. The pandas were super cute 🐼. Can't wait to go back 🎡",
  "Amusement Park Trip" 
); 

/*----------------------------------------------------------------------------*/
//store all entries in "local storage"

let tempArray = []; 

function saveToLocalStorage(){
  const entriesArrayString = JSON.stringify(allEntries);
  localStorage.setItem('storedEntries', entriesArrayString); 
}

if (allEntries.length == 0 && localStorage.getItem('storedEntries') != null){
  const entriesArrayString = localStorage.getItem('storedEntries');
  const entriesArray = JSON.parse(entriesArrayString);
  for (const entry of entriesArray){
    allEntries.push(entry); 
  }
}

// Note: the updating when changing from page to page not in function when we artificially code in entries for testing purposes  