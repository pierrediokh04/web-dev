const form   = document.querySelector("#guestForm");
const input  = document.querySelector("#guest");
const error  = document.querySelector("#error");
const guests = document.querySelector("#guests");


  // TODO 1 — Stop the page from reloading.
form.addEventListener("submit", (event) => {
    event.preventDefault()});

 // TODO 2 — Read the name from the input and remove the spaces around it.
 input.value.trim();

// TODO 3 — If the name is empty: show "Please enter a name." in #error and stop (return).
function errorname (){
    const errorNme = input.value.trim();
    if ( errorNme === ""){
        error.textContent="please enter a name";
     return ;
    }
}
// TODO 4 — Otherwise:
  //   - empty #error
error.textContent="";
  //   - create an <li> with the name (textContent) and append it to #guests
const li = document.createElement("li");
li.textContent = `${input.value}`;
guests.append(li);
  //   - empty the input
input.focus();