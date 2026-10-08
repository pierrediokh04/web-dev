# Lab 1 — Think Answers

## Exercise 1 — Strings

The value of `e` is still `" A@B.org "`.  
This is because strings are immutable in JavaScript, so `trim()` and `toLowerCase()` return a new string instead of changing the original string.


## Exercise 2 — Conditionals and Loops

If `grade >= 10` is tested first, `letter(17)` returns `"D"` instead of `"A"`.  
This happens because 17 is also greater than 10, so JavaScript enters the first matching condition and does not check the following conditions.


## Exercise 3 — Arrays of Objects

The spread syntax creates a new object by copying the properties of the original product before changing the price.  
If we used `product.price = newPrice`, we would modify the original object, so `products[0].price` would also change.


## Exercise 4 — Selecting and Changing Elements

Without `#`, `querySelector("title")` searches for an HTML `<title>` element instead of the element with `id="title"`.  
It therefore finds the `<title>` inside `<head>`, which controls the text displayed in the browser tab.


## Exercise 5 — Creating Elements From Data

If a sixth meal is added to the `meals` array, JavaScript automatically creates and displays another `<li>`, and the meal count increases.  
Building the page from data is useful because we can update the data without manually adding or changing HTML elements.


## Exercise 6 — Events

Writing `plus.addEventListener("click", addOne())` calls `addOne` immediately when the page loads instead of waiting for a click.  
We should write `addOne` without parentheses so that `addEventListener` receives the function and can call it when the click happens.


## Exercise 7 — Forms

Without `event.preventDefault()`, submitting the form performs the browser's default form submission and the page reloads.  
Because the page reloads, the guest list created with JavaScript is lost and returns to its initial state.