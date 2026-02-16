const nav_links_list = document.querySelectorAll("li");
const container = document.querySelector(".container");
const sidebar_content = document.querySelector(".sidebar_content");
const box_container = document.querySelector(".box_container");
const chart_box_container = document.querySelector(".chart_box_container");
const memeber_add = document.querySelector(".member_add_form");

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

let main_box_creation = ()=>{
    let max_box_create = 6;
    let boxCount = 0;
    for(let i=0;i<max_box_create;i++){
        boxCount++;
        const newBox = document.createElement('div');
        newBox.classList.add("box");
        newBox.innerText = `Box ${boxCount}`
        box_container.appendChild(newBox);
    }
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

function forms(){
    memeber_add.addEventListener("click",()=>{
        document.location = "../views/students_forms.html";
    })
}

function loaded(){
    nav_link();
    sidebar();
    main_box_creation();
    last_box_creation();
    forms();
}
loaded();