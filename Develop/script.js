// TODO: SHow the time on top of the calender, Using moment.js grab the time, and set the text of the P tag with the id of currentDay to be our time from moment.js
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
    

    // need to compare the hours of the rows with the current time--use if statements to compare time! then assign css elements! 
    // give the elements the classes they need ie time is passed, current time, 
    function assignColor(){
        if (hour.text()===moment().format("H")){
            timeBlockEl.addClass("present")
        } else if (hour.text() < moment().format("H")){
            timeBlockEl.addClass("past")
        }else{
            timeBlockEl.addClass("future")
        }}; 
        assignColor(i);
    
     // using a click event you can save user input into (grab input value to a var)------localstorage (setItem, getItem)---I need to be able to save the text to that row...onclick event/saving needs to be specific to that number button

    // $(document).saveBtn.on("click", ".item", function(event) {
    //     event.preventDefault(); 
    //     var toDoItem= $(`#i`)
    //     console.log(toDoItem)
    // })

    // // retrieve infor you saved in local storage  and then show it in the appriorate slot (an array?/object)
    // localStorage.setItem("test", "my first test")
    // // Need different keys!
    // localStorage.setItem("test1", "notes1")
    // localStorage.setItem("test2", "notes2")

    // var textFromLocalStorage=localStorage.getItem("test1")
    // $(".first").text(textFromLocalStorage)

    // eval(“dynamic” + i + " = val[i]");

}   

// need pull just the hour from moment.js to make sure the correct color is working
console.log(moment().format("H"))