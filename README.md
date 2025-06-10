# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?

The code that executes when a child element is clicked is contained within the document.addEventListener block in the same module where the Kids() function is defined. 
The EventListener registers click on childs name from     document. it first checks if the clicked element is equal to "child", ensuring the code runs only when a "<li>" text representing a child (created in the Kids() function) is "clicked". "childId" is then extracted from the dataset targeted, and an alert window displays the text describing the child's wish.





2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?

 findCelebrityMatch() must be called within the loop to generate a unique pairing for each kid as loop runs, ensuring that each kid's data is applied to the matching process individually.


3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   
 When user clicks on a celebrity's name, an event listener checks if the clicked element has data-type="celebrity". If so, it retrieves the data-sport value via event.target.dataset.sport. 

4. Can you describe, in detail, the algorithm that is in the `main` module?

This code initializes the main user interface by importing and invoking three functions: Pairings, Celebrities, and Kids. It selects the main container element in DOM and injects a template string containing the page structure, including sections for kids, celebrities, and pairings. After setting main HTML, it specifically targets the .assignments section and populates it with the output of the Pairings function, ensuring the pairings are rendered after the rest of the content. 