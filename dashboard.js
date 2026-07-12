document.addEventListener("DOMContentLoaded", function(){

    // Get saved member information
    const memberName = localStorage.getItem("memberName") || "Member";
    const memberPhone = localStorage.getItem("memberPhone") || "07XXXXXXXX";
    const memberLocation = localStorage.getItem("memberLocation") || "Kenya";
    const memberID = localStorage.getItem("memberID") || "GLK-000001";


    // Display member information

    const nameElements = document.querySelectorAll("#memberName, #profileName");

    nameElements.forEach(function(element){
        element.textContent = memberName;
    });


    const phoneElement = document.getElementById("memberPhone");

    if(phoneElement){
        phoneElement.textContent = memberPhone;
    }


    const locationElement = document.getElementById("memberLocation");

    if(locationElement){
        locationElement.textContent = memberLocation;
    }


    const idElement = document.getElementById("memberID");

    if(idElement){
        idElement.textContent = memberID;
    }


});
