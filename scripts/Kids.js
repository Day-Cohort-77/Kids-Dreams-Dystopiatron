import { getChildren } from "./database.js"

const children = getChildren()

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

// Get your alert modal elements once
const alertBox = document.getElementById('customAlert');
const alertMessage = document.getElementById('alertMessage');
const closeBtn = document.getElementById('closeAlert');

// Handle clicks on kid names
document.addEventListener("click", (event) => {
    if (event.target.dataset.type === "child") {
        const childName = event.target.textContent;
        const childWish = event.target.dataset.wish;

        // Set the message for your custom alert
        alertMessage.textContent = `Wish for ${childName}: ${childWish}`;

        // Show the custom alert modal
        alertBox.classList.remove('hidden');
    }
});

// Close button to hide the modal
closeBtn.addEventListener('click', () => {
    alertBox.classList.add('hidden');
});
