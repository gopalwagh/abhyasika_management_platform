const current_log_owner = JSON.parse(localStorage.getItem("current_log_owner"));
const students_data = JSON.parse(localStorage.getItem("students_data"))

let dashboard_with_email = () => {
    const { curr_owner_email } = current_log_owner;
    const ownerObj = students_data.find(obj => obj[curr_owner_email]);
    if (ownerObj) {
        console.log(ownerObj);
        return ownerObj[curr_owner_email]; 
    }
    
};

function renderStudents() {
    const students = dashboard_with_email();
    const container = document.getElementById("students_container");

    container.innerHTML = "";

    if (students.length === 0) {
        container.innerHTML = "<p>No students found</p>";
        return;
    }

    students.forEach(student => {
        const card = document.createElement("div");
        card.classList.add("student-card");

        card.innerHTML = `
            <div class="photo">
                <img src="${student.photo}" alt="student">
            </div>

            <div class="info">
                <h3>${student.fullName}</h3>
                <p><strong>Age :</strong> ${student.age}</p>
                <p><strong>Education :</strong> ${student.education}</p>
                <p><strong>Course :</strong> ${student.course}</p>
                <p><strong>Shift :</strong> ${student.shift}</p>
                <p><strong>Start Date :</strong> ${student.admissionStart}</p>
                <p><strong>End Date :</strong> ${student.endDate}</p>
                <p><strong>Fees Status :</strong> ${student.feesStatus}</p>
                <p><strong>Mobile :</strong> ${student.mobile}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

renderStudents();
