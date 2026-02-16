document.addEventListener("DOMContentLoaded",function(){

    const signup_form = document.getElementById("sign_up_form");
    const login_form = document.getElementById("login_form");

    function sign_up_btn_click(event){
        console.log(event);
        event.preventDefault();
        console.log("check no.2");
        owners_data();
        signup_form.reset();
    }

    function login_btn_click(event){
        console.log(event);
        event.preventDefault();
        console.log("check no.2 for login");
        searching_owner_data();
    }
    
    signup_form.addEventListener("submit", sign_up_btn_click);
    login_form.addEventListener("submit", login_btn_click);

});