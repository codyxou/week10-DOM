let id=0; 

document.getElementById('add').addEventListener('click', () => {
    let table= document.getElementById('scores'); //storing list value from html input into table variable
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`); //assigns an id attribute to each row
    row.insertCell(0).innerHTML = document.getElementById('new-home-team').value; //stores new home team
    row.insertCell(1).innerHTML = document.getElementById('new-home-score').value; // stores new home score
    row.insertCell(2).innerHTML = document.getElementById('new-away-score').value; //stores new away score
    row.insertCell(3).innerHTML = document.getElementById('new-away-team').value; // stores new away team

    // if(document.getElementById('new-home-score').value > document.getElementById('new-away-score').value){
    //     homeC = document.getElementById('td');
    //     homeC.setAttribute('class', 'bg bg-success');
    //     } else if(document.getElementById('new-home-score').value < document.getElementById('new-away-score').value){
    //         document.getElementById('home').setAttribute('class', 'bg bg-success');
    //     } else {
    //         row.insertCell(1).setAttribute('class', 'bg bg-warning');
    //         row.insertCell(2).setAttribute('class', 'bg bg-warning');
    //     } attempted to create an if/else statement to color the cell based on who had the higher score. couldn't quite get it to work before submitting. 
    
    let actions = row.insertCell(4); //actions for button click here and below
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('scores').value = ''; //clears input 
});

createDeleteButton = (id) => {
    let btn = document.createElement('button'); //assign btn variable to create a button element
    btn.className = 'btn btn-info'; //creates a class inside the btn variable
    btn.id= id; //storing variable inside id variable
    btn.innerHTML = 'Delete'; //labeling button
    btn.onclick = () => { //function to delete row.
        console.log(`Deleting row with id: item-${id}`); 
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };

    return btn; //returns one thing after all function methods
}