document.addEventListener("DOMContentLoaded",()=>{
    
    const photosInput = document.getElementById('photos');
    const photosStatus = document.getElementById('photosStatus');
    const ownerInput = document.getElementById('ownerPhoto');
    const ownerStatus = document.getElementById('ownerStatus');

    const ownerForm = document.getElementById("ownerForm");

    let owners_lab_data = JSON.parse(localStorage.getItem("owners_lab_data")) || [];

    function owner_pic_validation(){
        if (ownerInput.files.length > 0) {
            ownerStatus.textContent = "✔ Uploaded";
        } else {
            ownerStatus.textContent = "";
        }
    };
 
    function lab_pic_validation(){
        const files = Array.from(photosInput.files);

        if(files.length > 3) {
            alert("You can upload a maximum of 3 files.");
            photosInput.value = "";
            photosStatus.textContent = "";
            return;
        }
        if(files.length > 0) {
            photosStatus.textContent = "✔ Uploaded";
        } else{
            photosStatus.textContent = "";
        }
    };
   
    function save_data_permanent(){
        console.log("database checking:");
        localStorage.setItem("owners_lab_data",JSON.stringify(owners_lab_data));
        console.log("database updated & saved successfully");
    }

    function collecting_lab_data(event) {
        console.log("data_check_1");
        event.preventDefault(); 
        // it's create a new form which collect sare inputs
        const formData = new FormData(ownerForm);
        // Saare values ek object me convert karna
        // formData.entries() => it's a iterative return karta hai jo [key,value]pairs deta hai key==name
        // object. => yah data t=ko ek Json object ki tarah store karta hai 
        const data = Object.fromEntries(formData.entries());
        owners_lab_data.push(data);
        // this is a function from this file only
        save_data_permanent();

        ownerForm.reset();
        document.location = "../views/home.html";
    };

    function all_callable_control(){
        ownerForm.addEventListener("submit", collecting_lab_data);
        photosInput.addEventListener('change', lab_pic_validation);
        ownerInput.addEventListener('change', owner_pic_validation);
    }
    all_callable_control();
    
})