//  Part I

// ----------------------------
// write your own forEach() function. 
// your function should take an array and a callback as input.
// it should run the callback on each element in the array.
// ----------------------------

var forEach = function(array, callback) {
	for (var i = 0; i < array.length; i++) {
		callback(array[i])
	}
}

//  Part II
// ----------------------------
// write your own map() function.
// your function should take an array and a callback as input.
// it should return a new array, where every element in the 
// original has been transformed by the callback. .
// ----------------------------

var map = function(array, callback) {
	var newArray = []
	for (var i = 0; i < array.length; i++) {
		newArray.push(callback(array[i]))
	}
	return newArray
}


//  Part III
// ----------------------------
// write your own filter() function.
// your function should take an array and a callback as input.
// it should return a new array, where elements have been 
// kept or excluded according to the callback. 
// ----------------------------

var filter = function(array, callback) {
	var newArray = []
	for (var i = 0; i < array.length; i++) {
		if (callback(array[i])) {
			newArray.push(array[i])
		}
	}
	return newArray
}


//  Part IV
// ----------------------------
// write your own reduce() function.

// this one's new. it should take an array, a callback and 
// a starting value as input.

// calling .reduce() should combine all the elements of the 
// array into a single value. the starting value tells what to 
// start with. 

// the callback should take as input a "running total" and 
// an array element, in that order. it should return an update
// to the running total. 

// look at the tests for clarification.
// ----------------------------

var reduce = function(array, callback, value) {
	var acc = value
	for (var i = 0; i < array.length; i++) {
		acc = callback(acc, array[i])
	}
	return acc
}

var array = [1,2,3]

var callback = function(input1, input2) {
	return input1 + input2
}


//  HARD MODE
// ----------------------------
// using the built-in array.sort(), sort the following array
// of people by name
// ----------------------------

var people = [
    {name:"Matt", alma_mater:"Univ of Texas - Austin"},
    {name:"Brian", alma_mater:"Texas A&M"},
    {name:"Jesse", alma_mater:"Univ of Texas - Austin"},
    {name:"Justin", alma_mater:"Univ of Florida"}
]

people.sort(function(a,b) {
    return a.name > b.name
})


// ----------------------------
// Using array.map(), array.filter(), and array.sort() on the
// array below:
// - filter for customers whose first-names start with 'J',
// - map to their fullnames,
// - and then sort the items alphabetically by fullname

// store the resulting mapped, filtered, and sorted array
// under the variable name `newCustomers`. i'll look 
// for that name in my tests.
// ----------------------------

var customers = [
    { first: 'Joe', last: 'Blogs'},
    { first: 'John', last: 'Smith'},
    { first: 'Dave', last: 'Jones'},
    { first: 'Jack', last: 'White'}
]


