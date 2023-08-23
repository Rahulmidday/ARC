let userType = null;

function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.7749, lng: -122.4194 }, // Default to San Francisco
        zoom: 12,
    });
    
    // Add markers for doctors' and medical shops' locations
    // Replace with your actual data
}

document.addEventListener("DOMContentLoaded", () => {
    const doctorButton = document.getElementById("doctor-button");
    const patientButton = document.getElementById("patient-button");
    const doctorRegistration = document.getElementById("doctor-registration");
    const patientRegistration = document.getElementById("patient-registration");
    const locationSection = document.getElementById("location");

    doctorButton.addEventListener("click", () => {
        userType = "doctor";
        doctorRegistration.classList.remove("hidden");
        patientRegistration.classList.add("hidden");
        locationSection.classList.remove("hidden");
    });

    patientButton.addEventListener("click", () => {
        userType = "patient";
        patientRegistration.classList.remove("hidden");
        doctorRegistration.classList.add("hidden");
        locationSection.classList.remove("hidden");
    });

    // Handle doctor and patient registration form submissions

    // Simulate real-time doctor location updates and map markers
    setInterval(() => {
        if (userType === "doctor") {
            // Update doctor's location and map marker
        }
    }, 5000); // Update every 5 seconds
});
