let sign_up_input_text = document.querySelectorAll(".signup_input_text");
let login_input_text = document.querySelectorAll(".login_input_text");

let owners_name_list = JSON.parse(localStorage.getItem("owners_name_list")) || [];

function save_data_permanent(){
    console.log("database checking:");
    localStorage.setItem("owners_name_list",JSON.stringify(owners_name_list));
    console.log("database updated & saved successfully");
    console.log(owners_name_list);
}

function owners_data(){
    console.log("data_filling_1");
    let owners_database = {};
    sign_up_input_text.forEach(inputs=>{
        if(inputs.name){
            owners_database[inputs.name] = inputs.value.trim();
        }
    }) 

    owners_name_list.push(owners_database);
    save_data_permanent();
    console.log("after saving data")
    document.location = "../views/owner's_form.html"
}

function checkLogin(user_email, user_passwords) {
    const old_data = JSON.parse(localStorage.getItem("owners_name_list")) || [];
    
    for(let i=0;i<old_data.length;i++){
        const {email,password} = old_data[i];
        if(user_email == email){
            if(user_passwords == password){
                console.log("data matched successfully");
                return true;
            }else{
                alert("passwords is wrong...try again");
                console.log("password is wrong");
                return;
            }
        }
    }
    alert("your are not sign in\n first sign in !!");
    console.log("your are not sign in..");
    return false;
}

function searching_owner_data(){
    let user_email;
    let user_passwords;
    console.log("data_searching_1");
    login_input_text.forEach((inputs)=>{
        if(inputs.name=="email"){
           user_email = inputs.value;
        }else{
            user_passwords = inputs.value;
        }
    })

    console.log(user_email,user_passwords);
    if(checkLogin(user_email,user_passwords)){
        console.log("access granted");
        login_form.reset();
        alert("you login successfull")
        document.location = "../views/home.html";
    }else{
        login_form.reset();
        console.log("access is denied...try again");
    }
}
