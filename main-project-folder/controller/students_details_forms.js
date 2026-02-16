document.addEventListener("DOMContentLoaded",()=>{
    console.log("check_1");
    const myForm = document.querySelector("form");
    const form_container = document.querySelector(".form-container");
    const after_ok = document.querySelector(".after_ok");
    const body_2 = document.querySelector(".body_2");
    const all_inputs = document.querySelectorAll("form input");
    
    let inputs_set_attribute = () =>{
        all_inputs.forEach(inputs =>{
            inputs.setAttribute('required', true);
        })
    }

    let myForm_function = () =>{
        myForm.addEventListener("submit", (event)=>{
            event.preventDefault();
            console.log("this is check once again");
            if (!myForm.checkValidity()) {
                alert("Please fill all required fields!");
                return;
            }
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
})