```javascript
// ==========================================
// HEALTHCARE APPOINTMENT PORTAL
// ==========================================


// Form
const patientForm = document.getElementById("patientForm");


// Registration
patientForm.addEventListener("submit", function (event) {

    event.preventDefault();

    if (!patientForm.checkValidity()) {

        patientForm.classList.add("was-validated");

        return;
    }


    // Get patient name
    const patientName =
        document.getElementById("patientName").value;


    // Update health information
    document.getElementById("infoName").textContent =
        patientName;


    // Show Bootstrap Toast
    const toastElement =
        document.getElementById("successToast");

    const toast =
        new bootstrap.Toast(toastElement);

    toast.show();


    // Increase appointment count
    const appointmentCount =
        document.getElementById("appointmentCount");

    let currentCount =
        parseInt(appointmentCount.textContent);

    appointmentCount.textContent =
        currentCount + 1;


    // Scroll to appointment section
    setTimeout(() => {

        document.getElementById("appointments")
            .scrollIntoView({
                behavior: "smooth"
            });

    }, 1200);

});


// ==========================================
// APPOINTMENT SEARCH
// ==========================================

const searchInput =
    document.getElementById("searchAppointment");

const statusFilter =
    document.getElementById("statusFilter");

const tableRows =
    document.querySelectorAll("#appointmentTable tbody tr");


function filterAppointments() {

    const searchValue =
        searchInput.value.toLowerCase();

    const selectedStatus =
        statusFilter.value;


    tableRows.forEach(row => {

        const rowText =
            row.textContent.toLowerCase();

        const status =
            row.querySelector(".status").textContent.trim();


        const searchMatch =
            rowText.includes(searchValue);


        const statusMatch =
            selectedStatus === "all" ||
            status === selectedStatus;


        if (searchMatch && statusMatch) {

            row.style.display = "";

        } else {

            row.style.display = "none";

        }

    });

}


searchInput.addEventListener(
    "input",
    filterAppointments
);


statusFilter.addEventListener(
    "change",
    filterAppointments
);


// ==========================================
// SET MINIMUM APPOINTMENT DATE
// ==========================================

const appointmentDate =
    document.getElementById("appointmentDate");


const today =
    new Date().toISOString().split("T")[0];


appointmentDate.min = today;


// ==========================================
// NAVBAR AUTO CLOSE ON MOBILE
// ==========================================

const navLinks =
    document.querySelectorAll(".nav-link");

const navbarCollapse =
    document.querySelector(".navbar-collapse");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navbarCollapse.classList.contains("show")) {

            new bootstrap.Collapse(
                navbarCollapse
            ).hide();

        }

    });

});


// ==========================================
// RESET FORM
// ==========================================

patientForm.addEventListener("reset", function () {

    patientForm.classList.remove("was-validated");

});
```
