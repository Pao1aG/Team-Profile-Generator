// FUNCTION TO CREATE CARD
function appendCard () {
    let placeCard = document.querySelector(".appendCards");

    let teamCard = document.createElement("div");
    teamCard.setAttribute("class", "teamCards");
    teamCard.setAttribute("id", "role"); //Setting id by role for now
    placeCard.append(teamCard);

    let header  = document.createElement("div");
    header.setAttribute("class", "cardHeader");
    teamCard.append(header);

    let name = document.createElement("div");
    name.setAttribute("class", "memberName");
    name.textContent= '"Member Name"'; //`${data.name}`
    header.append(name);

    let role = document.createElement("div");
    role.setAttribute("class", "memberRole");
    role.textContent="Role"; //`${data.role}`
    header.append(role);

    let cardContent = document.createElement("div");
    cardContent.setAttribute("class", "cardContent");
    teamCard.append(cardContent);

    let cardContentDivs1 = document.createElement("div");
    let cardContentDivs2 = document.createElement("div");
    let cardContentDivs3 = document.createElement("div");

    cardContent.append(cardContentDivs1);
    cardContent.append(cardContentDivs2);
    cardContent.append(cardContentDivs3);
    
    let cardContentP1 = document.createElement("p");
    cardContentP1.setAttribute("class", "memberID");
    cardContentP1.textContent = "ID: Number"; //`${data.id}`

    let cardContentP2 = document.createElement("p");
    cardContentP2.setAttribute("class", "memberEmail");
    cardContentP2.textContent= "Email"; //`${data.email}`

    let cardContentP3 = document.createElement("p");
    cardContentP3.setAttribute("class", "memberDetail");
    cardContentP3.textContent = "Other details"; //`${data.office}` `${data.github}` `${data.school}`

    cardContentDivs1.append(cardContentP1);
    cardContentDivs2.append(cardContentP2);
    cardContentDivs3.append(cardContentP3);
    
    console.log("card should appear")
}

// TEST FOR HARDCODED HTML FILE
button = document.querySelector("button");

button.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("going to appendCard function")

    appendCard();
})

//FUNCTION TO SAVE TO LOCAL STORAGE ---------------
//Need to create object out of this first, 
//Then, this object needs to be sent to array, then set item
//Whenever the window reloads, this needs to be retrieved from local storage


