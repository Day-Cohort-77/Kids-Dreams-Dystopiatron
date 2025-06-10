import { getChildren, getCelebrities } from "./database.js"

const kids = getChildren()
const celebrities = getCelebrities()

const findCelebrityMatch = (kidObject, celebrityArray) => {
    // Match by wishSport property (case-insensitive)
    return celebrityArray.find(c => 
        c.sport && kidObject.wishSport &&
        c.sport.toLowerCase() === kidObject.wishSport.toLowerCase()
    ) || null // Return null if no match
}

export const Pairings = () => {
    let html = "<ul>"

    for (const kid of kids) {
        const kidsStar = findCelebrityMatch(kid, celebrities)
        if (kidsStar) {
            html += `
                <li>
                    ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish}
                </li>
            `
        } else {
            html += `
                <li>
                    ${kid.name} could not be paired with a celebrity for ${kid.wishSport}.
                </li>
            `
        }
    }

    html += "</ul>"

    return html
}