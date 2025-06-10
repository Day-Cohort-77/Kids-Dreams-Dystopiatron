import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const star of celebrities) {
        html += `<li 
                    data-id="${star.id}" 
                    data-type="celebrity"
                    data-sport="${star.sport}"
                    data-star="${star.id}">
                    ${star.name}
                </li>`
    }

    html += "</ol>"
    return html
}
// Get references to alert box elements once
const alertBox = document.getElementById('customAlert');
const alertMessage = document.getElementById('alertMessage');
const closeBtn = document.getElementById('closeAlert');

// Show custom alert when a celebrity element is clicked
document.addEventListener("click", (event) => {
    if (
        event.target.dataset.type === "celebrity" &&
        alertBox &&
        alertMessage
    ) {
        const celebritySport = event.target.dataset.sport;

        // Set the alert message
        alertMessage.textContent = `Celebrity ${event.target.textContent} is a star in ${celebritySport}.`;

        // Show the alert modal
        alertBox.classList.remove('hidden');
    }
});

// Hide the alert when close button is clicked
if (closeBtn && alertBox) {
    closeBtn.addEventListener('click', () => {
        alertBox.classList.add('hidden');
    });
}
