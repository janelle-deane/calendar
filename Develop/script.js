// TODO: Show the time on top of the calender, Using moment.js grab the time, and set the text of the P tag with the id of currentDay to be our time from moment.js
var currentDay= $("#currentDay");
currentDay.text(moment().format("MMMM Do, YYYY"));

// Create one row with time, text area & button using JQ
var timeBlock= $(".time-block");
var hour= $(".hour");
var saveBtn=$(".saveBtn")
// var toDo=$(".toDo");

//  using a for loop I can: Create a div for a row, create a div for textarea, and a button, give then some content, and append them to the page and them append the the row to the page(can i use a method to make this less repitive? for loop?)
// Start at 9am and go until 5pm or 17
// Specfic id # will be used for grabbing and storing content
for (let i = 9; i < 18; i++) {
    var timeBlockEl= $(`<div class="row time-block">`);
    
    var hourEl =$(`<div class="col-md-2 hour">`);
    var toDoEl=$(`<textarea class="col-md-8 1 toDo" id=`+ i+ ">")
    var saveBtnEl =$(`<button class="col-md-2 saveBtn"> <i class="far fa-save fa-3x"></i>`)
    
    hourEl.text(i);
    toDoEl.text();
    saveBtnEl.text();

    timeBlockEl.append(hourEl, toDoEl, saveBtnEl);
    $(".container").append(timeBlockEl);
    
    // console.log(typeof toDoEl.attr("id")); 
    // console.log(typeof moment().format("H")); 
    // need to compare the hours of the rows with the current time--use if statements to compare time! then assign css elements! 
    // give the elements the classes they need ie time is passed, current time, 
    function assignColor(){
        if (parseInt(toDoEl.attr("id"))=== parseInt(moment().format("H"))){
            timeBlockEl.addClass("present")
        } else if (parseInt(toDoEl.attr("id")) < parseInt(moment().format("H"))){
            timeBlockEl.addClass("past")
        }else if (parseInt(toDoEl.attr("id")) > parseInt(moment().format("H"))){
            timeBlockEl.addClass("future")
            console.log("future if ar")
        }}; 

        assignColor();
    
     // using a click event you can save user input into (grab input value to a var)------localstorage (setItem, getItem)---I need to be able to save the text to that row...onclick event/saving needs to be specific to that number button

   // // retrieve info you saved in local storage  and then show it in the appriorate slot (an array?/object)
     $(document).on("click", ".saveBtn", function(event) {
        event.preventDefault(); 
        console.log("you clicked me")
        
        // var toDoItemKey= $(`#${i}`);
        // var toDoItem= $(`#${i}`).val();
        // var textFromLocalStorage=localStorage.getItem(toDoItemKey, toDoItem);

    //     console.log(toDoItem);
    //     localStorage.setItem(toDoItemKey, JSON.stringify(toDoItem));
    
    //     textFromLocalStorage.forEach(score => {
    //     toDoItem.append(toDoItemKey);
    // })
    })

}   
console.log(moment().format("H"))