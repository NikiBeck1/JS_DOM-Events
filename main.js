/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

  // Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
  let node1 = document.getElementById("node1");
    node1.innerText = 'I used the getElementById("node1") method to access this.'
    console.log(node1);

//Select Node #2 using the getElementsByClassName() method, and change the text to: "I used the getElementByClassName("node2") method to access this"
    let node2 = document.getElementsByClassName("node2");
    node2[0].innerText = 'I used the getElementByClassName("node2") method to access this.'
    console.log(node2);

//Select ALL the h3 tags using the getElementsByTagName() method, and change the text to: "I used the getElementByTagName("h3") method to access all of these"
let h3Tags = document.getElementsByTagName("h3");

for (let tag of h3Tags) {
    tag.innerText = 'I used the getElementByTagName("h3") method to access all of these.'
    console.log(tag);
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

 // 1. Create a paragraph element using this element.createElement() and put this text inside "This node was created using the createElement() method"
  let pTag = document.createElement('p');
  pTag.innerHTML = "This node was created using the createElement() method";
  console.log(pTag);
 // 2. Append the created node to the parent node using the element.appendChild() method (Keep in mind that you’ll need to select the parent node first)
    let parentNode = document.getElementById("parent");
    parentNode.appendChild(pTag);
    console.log(parentNode);

 // 3. Create a <a> element using this element.createElement() and put this text inside "I am a <a> tag"
 let aTag = document.createElement('a');
 aTag.textContent = "I am a <a> tag"; // I only got the correct string when using the textContent property. Not innerText or innerHTML
 
 // 4. Insert the created <a> in the parent node, but before the <p> you just created using the element.insertBefore() method
  parentNode.insertBefore(aTag, pTag)
  console.log(parentNode);
 
 // 5. Add a link href to the <a> by selecting the anchorElement.link property
aTag.href = "https://www.example.com";
console.log(aTag);


/*----------- Exercise #3: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/
 // 1. Replace the "Child Node" with a new <p> element that reads "New Child Node" using the replaceChild() method.
    let childNode = document.getElementById("N1");
    let newChildNode = document.createElement('p');
    newChildNode.textContent = "New Child Node";
    childNode.replaceWith(newChildNode);
    console.log(childNode);
 
    // 2. Remove the "New Child Node" using the remove() method or removeChild() method.
    newChildNode.remove();
    console.log(newChildNode);

/*----------- Exercise #4: ELEMENTS FROM AN ARRAYS -----------*/
let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];
 // 1. Create an unordered list element
 // 2. Iterate over the array values, and create a list item element for each
 // 3. Append the new list items to the unordered list element
 // 4. Append the unordered list to the div#container under exercise 4

 let unorderList = document.createElement('ul');
 let listContainer = document.getElementById('container');

 for (let item of list) {
    let listItem = document.createElement('li');
    listItem.innerHTML = item;
    unorderList.appendChild(listItem);
 }

 listContainer.appendChild(unorderList);
 console.log(listContainer);

 /*----------- Exercise #5: DOM EVENTS -----------*/
 // 1. Write a function called show which creates a new div with an alerting message to the user with this message -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
 
 function show() {
     let message = document.createElement('div');
     message.id = 'modal';
     let modalOpened = false;
     message.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
     
     let exitButton = document.createElement('button');
     exitButton.textContent = "Close";
     exitButton.onclick = function() {
                 document.body.removeChild(message);
                 modalOpened = false;
             };
    
     if (!modalOpened) {
        modalOpened = true;
        document.body.appendChild(message);
        message.appendChild(exitButton);
    } else {
        window.alert('Modal is already open');
    }
}


let button = document.getElementById('btn');
button.addEventListener('click', show);


 // 2. This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality