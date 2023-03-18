# Web Accessibility

- **What is WCAG 2.1 ?**

    WCAG 2.1 stands for Web Content Accessibility Guidelines 2.1. These guidelines are a set of standards developed by the World Wide Web Consortium (W3C) that help ensure that web content is accessible to everyone, including people with disabilities.

 - **What are the principles of WCAG ?**

    - **Perceivable:** This principle focuses on making sure that web content can be perceived by all users, including those with visual, auditory, and other sensory disabilities. It includes guidelines for providing text alternatives for non-text content, using color contrast to improve legibility, and ensuring that content can be presented in different ways (such as larger fonts or high-contrast modes).
    - **Operable:** This principle focuses on making sure that web content is operable by all users, including those with physical or motor disabilities. It includes guidelines for making content keyboard accessible, providing enough time for users to interact with content, and avoiding content that causes seizures or physical reactions.
    - **Understandable:** This principle focuses on making sure that web content is understandable by all users, including those with cognitive or learning disabilities. It includes guidelines for using clear and simple language, organizing content in a logical way, and avoiding content that is confusing or misleading.
    - **Robust:** This principle focuses on making sure that web content is compatible with different technologies and can be accessed using different devices and software. It includes guidelines for using standard coding practices, providing fallbacks for unsupported features, and testing for accessibility.
<br><br>

- **What are the different level of conformance related to WCAG?** 
    - **Level A:** This is the lowest level of conformance and represents the minimum level of accessibility that a website should meet. Level A conformance means that the website meets all the mandatory guidelines in WCAG 2.1 at Level A. This includes guidelines related to providing alternative text for images, ensuring that text can be resized without losing content or functionality, and ensuring that all content is accessible via a keyboard.

    - **Level AA:** This is a higher level of conformance that includes all Level A guidelines as well as some additional guidelines. Level AA conformance means that the website meets all the mandatory guidelines in WCAG 2.1 at Level A and Level AA. This includes guidelines related to providing captions for videos, ensuring that color is not the only means of conveying information, and providing a mechanism for users to skip repetitive content.

    - **Level AAA:** This is the highest level of conformance and includes all Level A and Level AA guidelines as well as some additional guidelines. Level AAA conformance means that the website meets all the mandatory guidelines in WCAG 2.1 at Level A, Level AA, and Level AAA. This includes guidelines related to providing sign language interpretation for videos, ensuring that content can be navigated in a variety of ways, and providing additional ways for users to access content, such as through audio descriptions.

-   **Most Important areas for accessibilty :**

    - Images
    - Text
    - Links
    - Lists
    - Media
    - Visual Design
    - Landmarks
    <br><br>

    **Images**: Images are single-sense content which only can be seen, Audio can only be heard whereas text can be seen and also heard via screen reader and also felt using Braille display.

    **So using alt text in images we can also make our website more accessible to the users.**

    We can make our Alt text good and useful if we follow certain guidelines :
    - Concise and descriptive
    - Conveys the meaning of the image
    - Describe the subject of the image
    - Describe action/or emotion of the image

        <br>
     Some best practices include:
      - Avoid add "Image of" > Will be repetitive as screen reader will append image itself.
      - Logos can include the word "logo"
      - Avoid images of text > As we have to explain whole image with text in alt.
      - Be mindful of charts and graphs> As it can be complex to describe so mention like growth of 50% in alt text.
      - Decorative images can have empty alt text. 


## Steps to setup react app for accessibility:

- Install **eslint-plugin-jsx-a11y** plugin as a dev dependency. This plugin does **a static evaluation of the JSX to spot accessibility issues in React apps**. Because it only catches errors in static code, use it in combination with **@axe-core/react** to test the accessibility of the rendered DOM.

- Setup eslint configuration for the **eslint-plugin-jsx-a11y** in .eslintrc.json

- Setup **axe-core/react** in the main file i.e _app.js > It will report error in the browser console related to accesibility for react elements i.e jsx per page.

- We can also use browser extensions which can help in figuring out accessibility issues.
    - WAVE 
    - Color Blindly
    - tota11y
    <br><br>

- We can find mostly issues in these areas:
    - **Landmarks:** Landmarks help assistive technology (AT) users orient themselves to a page and help them navigate easily to various sections of a page. They also provide an easy way for users of assistive technology to skip over blocks of content that are repeated on multiple pages and notify them of programmatic structure of a page.

      Ex: ```role="main" or <main> ``` 
      Semantic HTML are preferred choice for it but it can be also done using aria-role.

    - **Heading Levels:** Use headings to describe content and use them consistently and semantically. This will help all users to better find the content they are looking for. 
        - Use one unique h1 per page that describes what that page is about. 
        That h1 preferably starts just above the main content.
        - Use headings to describe the content below. Do not use an HTML heading just to make the text appear bigger or stand out.
        - Use heading levels like the index of a book: hierarchical.
        - Do not choose a heading by its size, but by its level in the context of the content.
        - Do not skip a heading level from the top down.

    - **Form Labels:** Provide labels to identify all form controls, including text fields, checkboxes, radio buttons, and drop-down menus. In most cases, this is done by using the ```<label>``` element.  
        - Use the label element to associate text with form elements explicitly. The for attribute of the label must exactly match the id of the form control. 

        ```html  
         <label for="firstname">First name:</label>
         <input type="text" name="firstname" id="firstname">
        ```
       - Using aria-label
       ```html 
       <input type="text" name="search" aria-label="Search">
        <button type="submit">Search</button>
       ```
      - Using aria-labelledby
      ```html
      <input type="text" name="search" aria-labelledby="searchbutton">
        <button id="searchbutton" type="submit">Search</button> 
        ```
      - Using the title attribute
      ```html
      <input title="Search" type="text" name="search">
        <button type="submit">Search</button>  
        ```
    - Use **aria-labelled-by** to group elements so that they can be read together as a whole sentence by screen readers.
        ```html
        <div aria-labelled-by="no-movies add link">
       <span id="no-movies"> No movies in your wish list </span> <Link id="add-link" to="/browse"> Add some!</Link>
        </div> 
        ``` 

- Use alt text for images
- Have sufficient Contrast ratio for foreground and background. It should be 4.5:1 for AA and 7:0 for AAA for normal text and 3:1 for larger text
- Use more than color to convey information for an element
- ```role="alert" ``` this allows you to tell the screen reader to vocalize the element automatically when it is created.

    ```html
     <span role="alert"> This is an alert message. </span>
    ```

- ```aria-live``` the aria-live attribute is used to indicate to the screen reader that any modification made to its content will result in vocalization by the screen reader.

    ```html 
    <span aria-live="polite">5 selected items</span> 
    ```

    Three values ​​are possible:

    - **Off:** no vocalization
    - **Polite:** the vocalization will take place when the screen reader has finished the current task
    - **Assertive:** the screen reader interrupts the current task to inform the user
    <br><br>

    Additional attributes allow fine modification of the default behavior of aria-live:

    - **aria-atomic:** true or false (default), used to indicate whether the whole of the live zone must be read (true) or only the modified part (false).
    - **aria-relevant:** indicates which type of change triggers a vocalization, possible values: additions (default), removals, all.

- Appropriately set focus on each page load of web application

- **aria-labelledby:** aria-labelledby will overwrite any existing labelling including any semantically derived label.

    ```html
    <button aria-labelledby="lbl1 lbl2">This text will not be read</button>
    <p id="lbl1">first label</p>
    <p id="lbl2">Further information</p>
    ```
    In the following example if you tab to the button (using the mouse over will read the button text in some screen readers) it will read "first label" then "Further information" instead of "this text will not be read".

- **aria-describedby :** aria-describedby on the other hand will read the linked information as additional information. It will read this after the button semantically derived information.
    ```html
    <button aria-describedby="lbl1 lbl2">This text will now be read</button>
    <p id="lbl1">first label</p>
    <p id="lbl2">Further information</p>
    ```
    In this example it will read "This text will now be read", "first label" then "Further information". Yet again you need to focus the button (not mouse over) to see this behaviour.

- *Web Access Tools for the Visually Impaired*:

    - **Screen Readers**: A screen reader is a web accessibility software tool which reads text on the screen with a speech synthesizer or (less frequently) translates it into Braille.
        - COBRA
        - Hal
        - JAWS (Job Access with Speech)
    - **Braille Keyboards:** A Braille keyboard is a piece of assistive technology that is very different from a standard QWERTY keyboard. There are 8 keys which are used to compose the Braille letters
    - **Screen Magnifiers**: Screen magnifying technology refers to web accessibility software that helps people who are visually impaired but not blind to view information on a computer screen.
- *Web Access Tools for people with Physical Disabilities:*
    - **Sip and Puff Systems**: A person in a wheelchair controlling movement by breathing into a straw is called a puff-and-sip system. 
    The technology has been adapted to allow people with physical disabilities, such as paralyzed people, to also access the computer.It recognizes sips or puffs and translates these into commands such as mouse clicks or keyboard characters.
    - **Hands-Free Mouse Tracking**: One option is FaceMouse, which turns a standard web camera into a mouse operator. It does this by recognizing face or head movements and translating them into commands, like clicks.
    - **Voice Controls**: Voice control accessibility software includes programs that convert Speech to Text, and also allow you to command the computer with your voice. One of the most well-known and feature-rich **web accessibility software programs is Dragon**.    
    

- [Best practices for aria attributes](https://www.w3.org/WAI/ARIA/apg/)

- Interview questions for [accessibility](https://uilicious.com/blog/accessibility-testing-interview-questions/)

        


          
       