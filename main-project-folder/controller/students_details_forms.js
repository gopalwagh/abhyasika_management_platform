console.log("check_1");
const myForm = document.querySelector("form");
const form_container = document.querySelector(".form-container");
const after_ok = document.querySelector(".after_ok");
const body_2 = document.querySelector(".body_2");
const all_inputs = document.querySelectorAll("form input");
const admissionForm = document.getElementById("admissionForm");

let students_data = JSON.parse(localStorage.getItem("students_data")) || [];

let inputs_set_attribute = () =>{
    all_inputs.forEach(inputs =>{
        inputs.setAttribute('required', true);
    })
}

function save_stu_data_permanent(){
    console.log("database checking:");
    localStorage.setItem("students_data",JSON.stringify(students_data));
    console.log("database updated & saved successfully");
    console.log(students_data);
}

function detail_save_with_owner(studentData){
    //acess present owner ka email
    let present_owner_email = JSON.parse(localStorage.getItem("current_log_owner")).curr_owner_email;
    console.log(present_owner_email);
    
    let ownerFound = false;
    // Check existing owners
    students_data.forEach(ownerObj => {
        if (ownerObj[present_owner_email]) {
            // Owner mila → student add karo
            ownerObj[present_owner_email].push(studentData);
            ownerFound = true;
        }
    });
    // Agar owner pehli baar aa raha hai
    if (!ownerFound) {
        let newOwner = {
        [present_owner_email]: [studentData]
        };
        students_data.push(newOwner);
    }

    save_stu_data_permanent();
    console.log("Student saved successfully ✅");
}

function details_save(){
    let formData = new FormData(admissionForm);
    let studentData = {};

    formData.forEach((value, key) => {
        studentData[key] = value;
    });
    if (formData.get("photo")) {
        studentData.photo = formData.get("photo").name;
    }
    detail_save_with_owner(studentData);
}

let myForm_function = () =>{
    myForm.addEventListener("submit", (event)=>{
        event.preventDefault();
        console.log("this is check once again");
        if (!myForm.checkValidity()) {
            alert("Please fill all required fields!");
            return;
        }
        details_save();
        form_container.style.display = "none";
        body_2.style.display = "flex";
    });
}

let redirecting_home = ()=>{
    after_ok.addEventListener("click", function(){
        document.location = "home.html";
    });
}

function contains_func(){
    inputs_set_attribute();
    myForm_function();
    redirecting_home();
}

contains_func();