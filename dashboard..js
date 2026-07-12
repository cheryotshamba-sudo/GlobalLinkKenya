// ===========================
// MEMBER DETAILS
// ===========================

const fullName = localStorage.getItem("fullname") || "Member";
const phone = localStorage.getItem("phone") || "-";
const city = localStorage.getItem("city") || "";
const county = localStorage.getItem("county") || "";
const age = localStorage.getItem("age") || "-";
const gender = localStorage.getItem("gender") || "-";

// Display member details
document.getElementById("memberName").textContent = fullName;

const profileName = document.getElementById("profileName");
if (profileName) profileName.textContent = fullName;

const memberPhone = document.getElementById("memberPhone");
if (memberPhone) memberPhone.textContent = phone;

const memberLocation = document.getElementById("memberLocation");
if (memberLocation) {
    memberLocation.textContent =
        city && county ? `${city}, ${county}` : city || county || "Kenya";
}

// Generate or retrieve Member ID
let memberID = localStorage.getItem("memberID");

if (!memberID) {
    memberID = "GLK-" + Math.floor(100000 + Math.random() * 900000);
    localStorage.setItem("memberID", memberID);
}

document.getElementById("memberID").textContent = memberID;

// ===========================
// COPY REFERRAL LINK
// ===========================

const copyBtn = document.querySelector(".copy-btn");

if (copyBtn) {
    copyBtn.addEventListener("click", function () {

        const input = document.querySelector(".referral-card input");

        input.select();
        input.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(input.value);

        copyBtn.textContent = "✓ Copied!";

        setTimeout(() => {
            copyBtn.textContent = "Copy Link";
        }, 2000);

    });
}

// ===========================
// COMMUNITY BUTTON
// ===========================

const joinBtn = document.querySelector(".join-btn");

if (joinBtn) {

    joinBtn.addEventListener("click", function () {

        alert("Connect this button to your WhatsApp community invite link.");

    });

}
