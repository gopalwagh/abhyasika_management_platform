const nav_links_list = document.querySelectorAll("li");
const container = document.querySelector(".container");
const sidebar_content = document.querySelector(".sidebar_content");
const box_container = document.querySelector(".box_container");
const chart_box_container = document.querySelector(".chart_box_container");
const memeber_add = document.querySelector(".member_add_form");
const Students_dashboard = document.querySelector(".Students_dashboard");
const owner_name = document.getElementById("user_name");

const current_log_owner = JSON.parse(localStorage.getItem("current_log_owner"));
const owners_lab_data = JSON.parse(localStorage.getItem("owners_lab_data"));

let nav_link = ()=>{
    nav_links_list.forEach(items => {
        items.addEventListener("click",()=>{
            console.log(items);
            document.location = "coming_soon.html"
        });
    });
};

let sidebar = ()=>{
    container.addEventListener("click",()=>{
        console.log("ya it's work perfectly");
        sidebar_content.classList.toggle("active");
    });
};

let dashboard_with_email = () => {
    const { curr_owner_email } = current_log_owner;
    let details_obj = owners_lab_data.find(details =>
        details.email === curr_owner_email
    );
    return details_obj;
};

let main_box_creation = ()=>{
    
    const {ownerName,premiumSeats,totalSeats,premiumFees,fees}= dashboard_with_email() || {};
    const boxData = [
        `Total Seats: ${totalSeats}`,
        `Premium Seats: ${premiumSeats}`,
        `Normal Fees: ₹${fees}`,
        `Premium Fees: ₹${premiumFees}`,
        `Available Seats: ${totalSeats - premiumSeats}`,
        `Total Revenue: ₹${(totalSeats * fees) + (premiumSeats * premiumFees)}`
    ];
    
    box_container.innerHTML = ""; 
    owner_name.innerText = ownerName;
    boxData.forEach(data => {
        const newBox = document.createElement("div");
        newBox.classList.add("box");
        newBox.innerText = data;
        box_container.appendChild(newBox);
    });
}

let last_box_creation = ()=>{
    let max_box_create = 2;
    let boxCount = 0;
    for(let i=0;i<max_box_create;i++){
        boxCount++;
        const newBox = document.createElement('div');
        newBox.classList.add("chart_box");
        newBox.innerText = `Box ${boxCount}`
        chart_box_container.appendChild(newBox);
    }
}

function nav_list(){
    memeber_add.addEventListener("click",()=>{
        document.location = "../views/students_forms.html";
    })
    Students_dashboard.addEventListener("click",()=>{
        document.location = "../views/students_cards.html";
    })
}

function loaded(){
    nav_link();
    sidebar();
    main_box_creation();
    last_box_creation();
    nav_list();
}
loaded();