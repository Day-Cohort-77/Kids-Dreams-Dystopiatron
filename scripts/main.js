import { Pairings } from "./Pairings.js"
import { Celebrities } from "./CelebrityList.js"
import { Kids } from "./Kids.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <h1>CELEBRITIES AND KIDS!</h1>
    <h2>Terminal Wish Foundation</h2>
    <article class="details">
        <section class="detail--column list details__kids">
            <h2>Kids</h2>
            ${Kids()}
        </section>
        <section class="detail--column details__celebrities">
            <h2>Celebrities</h2>
            ${Celebrities()}
        </section>
    </article>

    <article class="assignments">
        <h2>Pairings</h2>
    </article>
`

mainContainer.innerHTML = applicationHTML                   
// Render the Pairings component after the main HTML is set
const pairingsContainer = document.querySelector(".assignments")
pairingsContainer.innerHTML = Pairings()


