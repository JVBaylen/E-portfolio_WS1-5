window.onload = function () {
    window.alert("Welcome to my Portfolio!");
}
document.getElementById("name").innerText = "Hi!";
document.getElementById("name").style.fontSize = "40px";

function myFunction() {
    document.body.classList.toggle("dark-mode");

    console.log("Dark Mode On");
}


function showInformation() {
    window.alert(
        "Name: John Vincent L. Baylen\n" +
        "Course: Bachelor of Science in Information Technology (BSIT)\n" +
        "School: Holy Child Central Colleges Inc.\n" +
        "Occupation: Layout Artist\n" +
        "Address: Prk. II Tubi-ala, Surallah, South Cotabato"
    );

    console.log("Personal information displayed.");
}


document.getElementById("infoBtn").onclick = showInformation;
