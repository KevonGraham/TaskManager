function taskValidity(taskName) {
  // body...

 var name = document.getElementById('taskName') ;
 //TaskItem.taskName ;
 

 var description= document.getElementById("taskDescription");
 //TaskItem.taskDescription;

 var category = document.getElementById("taskCategory");
 //TaskItem.taskCategory;

 var dueDate = document.getElementById("taskDueDate");
 //TaskItem.taskDueDate;

 var dueTime = document.getElementById("taskDueTime");
  //TaskItem.taskDueTime;

 var recurDate = document.getElementById("taskRecurringDate");
 //TaskItem.taskRecurringDate;

 var recurTime= document.getElementById("taskRecurringTime");
 //TaskItem.taskRecurringTime;

 var mail= document.getElementById("email");
 //TaskItem.email;

 //var database= firebase.database().ref();

 //var formID= document.getElementById("TaskItem");



//var form=formID.value;

  if(name.value == ""){
    alert( "Please Enter Task Name");
    name.focus();
    return false;
  }

  if(description.value == ""){
    alert( "Please write a description for your task");
    description.focus();
    return false;
  }


  if(category.value == ""){
    alert( "Please select from Category from dropdown menu");
    category.focus();
    return false;
  }

if(dueDate.value == ""){
    alert( "Please set Due Date");
    dueDate.focus();
    return false;
  }

if(dueTime.value == ""){
    alert( "Please set Due Time");
    dueTime.focus();
    return false;
  }

  /*if(recurDate.value == ""){
    alert( "Please Select Recurring Date");
  }

  if(recurTime.value == ""){
    alert( "Please Select Recurring Time ");
  }*/

if (mail.value == "")
{
    alert("Please enter a valid e-mail address.");
    mail.focus();
    return false;
}

if (mail.value.indexOf("@", 0) < 0)
{
    alert("Please enter a valid e-mail address.");
    mail.focus();
    return false;
}

if (mail.value.indexOf(".", 0) < 0)
{
    alert("Please enter a valid e-mail address.");
    mail.focus();
    return false;
}
var nodeClass={
	TaskName: name.value,
	Description: description.value,
	Category: category.value,
	DueDate:dueDate.value,
	DueTime: dueTime.value,
	Mail: mail.value
};

var obj = firebase.database().ref().child('Testing Phase').push().key;

var updates ={};
updates[obj]=nodeClass;

return firebase.database().ref().update(updates);

  }






 // var userId = firebase.auth().currentUser.uid;
 //firebase.database().ref('value' + TaskName).once('TaskName').then(function(snapshot) {
 // var TaskName = "John"
  //(snapshot.val() && snapshot.val().name) || 'Anonymous';
  // ...

  var taskTitle = firebase.database().ref('task-manager-f7b54/data/-L3db0HrL4DNzL2-Z7x4' + TaskName );
taskTitle.once('value', function(snapshot) {
  updateTaskTitle(TaskName , snapshot.val());
});

var app = angular.module('myApp', []);
var fren = taskTitle;
app.controller('myCtrl', function($scope) {
    //$scope.showMe = true;
    $scope.display = fren;
    $scope.myFunc = function() {
        return $scope.display;

};


});





