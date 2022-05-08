const studentName = document.getElementById("name");
const courseName = document.getElementById("course");
const courseAmount = document.getElementById("amount");
const addBtn = document.querySelector(".submit");
const studentList = document.getElementById("studentList")

addBtn.addEventListener("click", function (event) {
    // console.log("it's working")
    event.preventDefault();

    if (studentName.value == "" || courseName.value == "" || courseAmount.value == "") {
        alert("Please fill out all the field in the form");
    } else {
        // console.log(studentName.value, courseAmount.value, courseName.value)

        // creating table row 
        const newRow = document.createElement('tr');

        // creating new student name data 
        const newStudentName = document.createElement("td");
        newStudentName.innerHTML = studentName.value;
        newRow.appendChild(newStudentName);

        // creating new course list  
        const newCourse = document.createElement("td");
        newCourse.innerHTML = courseName.value;
        newRow.appendChild(newCourse);

        // creating new course list  
        const newCourseAmount = document.createElement("td");
        newCourseAmount.innerHTML = courseAmount.value;
        newRow.appendChild(newCourseAmount);

        // creating a delete field 
        const newDeleteField = document.createElement("td");
        newRow.appendChild(newDeleteField);

        //creating a delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("btn");
        deleteBtn.classList.add("btn-danger");
        deleteBtn.classList.add("delete");
        deleteBtn.innerHTML = "Delete Item";
        newDeleteField.appendChild(deleteBtn);
        
        // display the value in the table
        studentList.appendChild(newRow);

        studentName.value = "";
        courseName.value = "";
        courseAmount.value = "";

        let deleteItems = document.querySelectorAll(".delete")

        for (const btn of deleteItems){
            btn.onclick = (e)=>{
                e.target.parentElement.parentElement.remove();
            }
        }        
    }

})