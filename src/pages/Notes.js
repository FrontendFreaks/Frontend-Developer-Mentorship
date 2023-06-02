export const HTMLBasicNotes = [
    {
        heading: "Basic Structure",
        code: `<!DOCTYPE html>
<html>
  <head>
    <title>Title of the document</title>
  </head>
  <body>
    Content goes here
  </body>
</html>`,
    },
    {
        heading: "Headings",
        code: `
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
`,
    },
    {
        heading: "Paragraphs",
        code: `<p>This is a paragraph</p>`,
    },
    {
        heading: "Line Break",
        code: `<p>This is the first line.<br>This is the second line.</p>`,
    },
    {
        heading: "Horizontal Line",
        code: `<hr>`,
    },
    {
        heading: "Links",
        code: `<a href="https://www.example.com">Link text</a>`,
    },
    {
        heading: "Lists",
        code: `
<!-- Unordered List -->
<ul>
  <li>List item 1</li>
  <li>List item 2</li>
</ul>
 <!-- Ordered List -->
<ol>
  <li>List item 1</li>
  <li>List item 2</li>
</ol>
`,
    },
    {
        heading: "Tables",
        code: `
<table>
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row 1, Column 1</td>
      <td>Row 1, Column 2</td>
    </tr>
    <tr>
      <td>Row 2, Column 1</td>
      <td>Row 2, Column 2</td>
    </tr>
  </tbody>
</table>
`,
    },
    {
        heading: "Forms",
        code: `
<form>
  <label for="input">Input Label:</label>
  <input type="text" id="input" name="inputName">
  
  <label for="checkbox">Checkbox Label:</label>
  <input type="checkbox" id="checkbox" name="checkboxName" value="checkboxValue">
  
  <label>Radio Label 1:</label>
  <input type="radio" name="radioName" value="radioValue1">
  
  <label>Radio Label 2:</label>
  <input type="radio" name="radioName" value="radioValue2">
  
  <label for="date">Date:</label>
  <input type="date" id="date" name="dateName">
  
  <label for="number">Number:</label>
  <input type="number" id="number" name="numberName">
  
  <label for="color">Color:</label>
  <input type="color" id="color" name="colorName">
  
  <label for="file">File:</label>
  <input type="file" id="file" name="fileName">
  
  <button type="reset">Reset</button>
  <button type="submit">Submit</button>
</form>
`,
    },
    {
        heading: "Images",
        code: `<img src="image.jpg" alt="Image description">`,
    },
    {
        heading: "Iframes",
        code: `
<!-- Youtube Video -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>

<!-- External Webpage -->
<iframe src="https://www.example.com"></iframe>
`,
    },
    {
        heading: "Audio",
        code: `<audio src="audio_file.mp3" controls></audio>`,
    },
    {
        heading: "Video",
        code: `<video src="video_file.mp4" controls></video>`,
    },
];

export const CSSBasicNotes = [
    {
        heading: "Adding CSS to HTML (3 methods & precedence)",
        code: `<!-- Inline CSS -->
  <h1 style="color: red;">Hello World</h1>
  
  <!-- Internal CSS -->
  <head>
    <style>
      h1 {
        color: red;
      }
    </style>
  </head>
  
  <!-- External CSS -->
  <head>
    <link rel="stylesheet" href="styles.css">
  </head>
  `,
    },
    {
        heading: "Understanding CSS syntax",
        code: `selector {
    property: value;
  }`,
    },
    {
        heading: "CSS selectors and specificity",
        code: `/* Element selector */
  h1 {
    color: red;
  }
  
  /* Class selector */
  .heading {
    color: blue;
  }
  
  /* ID selector */
  #title {
    color: green;
  }
  
  /* Specificity example */
  .heading#title {
    color: yellow;
  }`,
    },
    {
        heading: "Working with CSS fonts",
        code: `/* Font family */
  body {
    font-family: Arial, sans-serif;
  }
  
  /* Font size */
  h1 {
    font-size: 3rem;
  }
  
  /* Font weight */
  h2 {
    font-weight: bold;
  }`,
    },
    {
        heading: "Using CSS colors effectively",
        code: `/* Hex code */
  h1 {
    color: #ff0000;
  }
  
  /* RGB */
  .heading {
    color: rgb(0, 255, 0);
  }
  
  /* HSL */
  #title {
    color: hsl(240, 100%, 50%);
  }`,
    },
    {
        heading: "CSS backgrounds and gradients",
        code: `/* Background color */
  body {
    background-color: #fff;
  }
  
  /* Background image */
  .container {
    background-image: url(bg.jpg);
  }
  
  /* Linear gradient */
  .heading {
    background-image: linear-gradient(to bottom, #ff0000, #0000ff);
  }
  
  /* Radial gradient */
  .title {
    background-image: radial-gradient(circle, #ff0000, #0000ff);
  }`,
    },
    {
        heading: "Creating CSS borders and Shape",
        code: `/* Border */
  .container {
    border: 1px solid black;
  }
  
  /* Border radius */
  .box {
    border-radius: 10px;
  }
  
  /* Box shadow */
  .heading {
    box-shadow: 5px 5px 10px #888888;
  }
  
  /* Triangle */
  .triangle {
    width: 0;
    height: 0;
    border-top: 50px solid red;
    border-right: 50px solid transparent;
  }
  
  /* Circle */
  .circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: red;
  }`,
    },
    {
        heading: "Understanding the CSS box model",
        code: `/* Content box */
  .container {
    width: 300px;
    height: 200px;
  }
  
  /* Padding box */
  .container {
    padding: 10px;
  }
  
  /* Border box */
  .container {
    border: 1px solid black;
  }
  
  /* Margin box */
  .container {
    margin: 10px;
  }`,
    },
    {
        heading: "Formatting CSS text",
        code: `/* Text alignment */
  h1 {
    text-align: center;
  }
  
  /* Text decoration */
  a {
    text-decoration: none;
  }
  
  /* Text transformation */
  .heading {
    text-transform: uppercase;
  }
  
  /* Letter spacing */
  .title {
    letter-spacing: 2px;
  }
  
  /* Line height */
  p {
    line-height: 1.5;
  }`,
    },
    {
        heading: "Creating CSS Links",
        code: `/* unvisited link */
  a:link {
    color: blue;
  }
  
  /* visited link */
  a:visited {
    color: purple;
  }
  
  /* mouse over link */
  a:hover {
    color: red;
  }
  
  /* selected link */
  a:active {
    color: green;
  }`,
    },
    {
        heading: "Using CSS Display Property",
        code: `/* block-level element */
  div {
    display: block;
  }
  
  /* inline-level element */
  span {
    display: inline;
  }
  
  /* inline-block element */
  img {
    display: inline-block;
  }`,
    },
    {
        heading: "Positioning Elements with CSS",
        code: `/* static positioning (default) */
  div {
    position: static;
  }
  
  /* relative positioning */
  div {
    position: relative;
    top: 10px;
    left: 20px;
  }
  
  /* absolute positioning */
  div {
    position: absolute;
    top: 10px;
    left: 20px;
  }
  
  /* fixed positioning */
  div {
    position: fixed;
    top: 10px;
    left: 20px;
  }`,
    },
    {
        heading: "CSS Media Queries",
        code: `/* Small screens (mobile devices) */
  @media only screen and (max-width: 767px) {
    /* Styles go here */
  }
  
  /* Medium screens (tablets) */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    /* Styles go here */
  }
  
  /* Large screens (desktops) */
  @media only screen and (min-width: 1024px) and (max-width: 1279px) {
    /* Styles go here */
  }
  
  /* Extra large screens (large desktops) */
  @media only screen and (min-width: 1280px) {
    /* Styles go here */
  }`,
    },
];

export const CSSFlexboxNotes = [
    {
        heading: "Display Property",
        code: `/* Set the container to a flexbox */
  .container {
    display: flex;
  }`,
    },
    {
        heading: "Flex Direction Property",
        code: `/* Set the main axis direction */
  .container {
    flex-direction: row | row-reverse | column | column-reverse;
  }`,
    },
    {
        heading: "Flex Wrap Property",
        code: `/* Allow items to wrap */
  .container {
    flex-wrap: nowrap | wrap | wrap-reverse;
  }`,
    },
    {
        heading: "Flex Flow Property",
        code: `/* Combine flex-direction and flex-wrap */
  .container {
    flex-flow: row wrap;
  }`,
    },
    {
        heading: "Justify Content Property",
        code: `/* Align items along the main axis */
  .container {
    justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
  }`,
    },
    {
        heading: "Align Items Property",
        code: `/* Align items along the cross axis */
  .container {
    align-items: stretch | flex-start | flex-end | center | baseline;
  }`,
    },
    {
        heading: "Align Content Property",
        code: `/* Align wrapped lines along the cross axis */
  .container {
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;
  }`,
    },
    {
        heading: "Gap Property",
        code: `/* Set the gap between flex items */
  .container {
    gap: 10px;
  }`,
    },
    {
        heading: "Order Property",
        code: `/* Change the order of flex items */
  .item {
    order: 2;
  }`,
    },
    {
        heading: "Flex Grow Property",
        code: `/* Allow an item to grow to fill available space */
  .item {
    flex-grow: 1;
  }`,
    },
    {
        heading: "Flex Shrink Property",
        code: `/* Allow an item to shrink to fit available space */
  .item {
    flex-shrink: 1;
  }`,
    },
    {
        heading: "Flex Basis Property",
        code: `/* Set the initial main size of an item */
  .item {
    flex-basis: auto | 0 | 50%;
  }`,
    },
    {
        heading: "Flex Property",
        code: `.item {
      flex: 3 5 500px; /* shorthand for flex-grow flex-shrink flex-basis */
  }`,
    },
    {
        heading: "Align Self Property",
        code: `.item {
    align-self: auto | flex-start | flex-end | center | baseline | stretch;
  }`,
    },
];

export const CSSGridNotes = [
    {
        heading: "Grid Template Columns",
        code: `/* Defines the columns of the grid. */
  .container {
    grid-template-columns: 100px 100px 100px;
  }`,
    },
    {
        heading: "Grid Template Rows",
        code: `/* Defines the rows of the grid. */
  .container {
    grid-template-rows: 100px 100px;
  }`,
    },
    {
        heading: "Grid Template Areas",
        code: `/* Defines the areas of the grid. */
  .container {
    grid-template-areas: 
      "header header"
      "sidebar content"
      "footer footer";
  }`,
    },
    {
        heading: "Gap",
        code: `/* Specifies the size of the gap between grid items. */
  .container {
    gap: 10px;
  }`,
    },
    {
        heading: "Justify Items",
        code: `/* Aligns items along the inline (row) axis. */
  .container {
    justify-items: center;
  }`,
    },
    {
        heading: "Align Items",
        code: `/* Aligns items along the block (column) axis. */
  .container {
    align-items: center;
  }`,
    },
    {
        heading: "Justify Content",
        code: `/* Aligns the grid along the inline (row) axis. */
  .container {
    justify-content: center;
  }`,
    },
    {
        heading: "Align Content",
        code: `/* Aligns the grid along the block (column) axis. */
  .container {
    align-content: center;
  }`,
    },
    {
        heading: "Grid Column Start",
        code: `/* Specifies the start position of a grid item along the inline (row) axis. */
  .item {
    grid-column-start: 1;
  }`,
    },
    {
        heading: "Grid Column End",
        code: `/* Specifies the end position of a grid item along the inline (row) axis. */
  .item {
    grid-column-end: 3;
  }`,
    },
    {
        heading: "Grid Row Start",
        code: `/* Specifies the start position of a grid item along the block (column) axis. */
  .item {
    grid-row-start: 1;
  }`,
    },
    {
        heading: "Grid Row End",
        code: `/* Specifies the end position of a grid item along the block (column) axis. */
  .item {
    grid-row-end: 3;
  }`,
    },
    {
        heading: "Grid Area",
        code: `/* Specifies both the start and end positions of a grid item. */
  .item {
    grid-area: 1 / 1 / 3 / 3;
  }`,
    },
    {
        heading: "Justify Self",
        code: `/* Aligns a grid item along the inline (row) axis. */
  .item {
    justify-self: center;
  }`,
    },
    {
        heading: "Align Self",
        code: `/* Aligns a grid item along the block (column) axis. */
  .item {
    align-self: center;
  }`,
    },
];

export const JSBasicNotes = [
    {
        heading: "Adding JavaScript to a web page",
        point: "JavaScript can be added to an HTML file using the script tag:",
        code: `<script src="script.js"></script>`,
    },
    {
        heading: "Comments in JavaScript",
        point:
            "Single-line comments in JavaScript start with //, while multi-line comments start with /* and end with */.",
        code: "// This is a single-line comment /* This is a multi-line comment */",
    },
    {
        heading: "Printing to the console",
        point:
            "You can print to the console in JavaScript using the console.log() function:",
        code: 'console.log("Hello, world!");',
    },
    {
        heading: "Variables in JavaScript",
        point:
            "Variables in JavaScript can be declared using let, const, or var.",
        code: "let x = 5;\nconst y = 10;\nvar z = 15;",
    },
    {
        heading: "Declaring and assigning variables",
        point:
            "Variables in JavaScript can be declared and assigned in the same line:",
        code: "let x=5;",
    },
    {
        heading: "Arithmetic Operators",
        point:
            "JavaScript supports arithmetic operators such as addition, subtraction, multiplication, division, and modulus:",
        code: "let x = 5;\nlet y = 10;\nlet z = x + y; // addition\nlet a = x - y; // subtraction\nlet b = x * y; // multiplication\nlet c = y / x; // division\nlet d = y % x; // modulus",
    },
    {
        heading: "Unary Operators",
        point:
            "Unary operators are operators that work with only one operand. JavaScript supports several unary operators, such as increment, decrement, and negation:",
        code: `let x = 5;\nlet y = ++x; // increment\nlet z = --x; // decrement\nlet a = -x; // negation`,
    },
    {
        heading: "Conditional operators",
        point:
            "JavaScript supports conditional operators such as greater than, less than, equal to, and not equal to:",
        code: `let x = 5;\nlet y = 10;\nlet z = x > y; // greater than\nlet a = x < y; // less than\nlet b = x == y; // equal to\nlet c = x != y; // not equal to`,
    },
    {
        heading: "if-else statements",
        point:
            "if-else statements are used in JavaScript to execute code based on a condition:",
        code: `let x = 5;\nif (x > 10) {\n  console.log("x is greater than 10");\n} else if (x < 10) {\n  console.log("x is less than 10");\n} else {\n  console.log("x is equal to 10");\n}`,
    },
    {
        heading: "Switch Statements",
        point:
            "switch statements are used in JavaScript to execute different code blocks based on different conditions:",
        code: `let day = "Monday";\nswitch (day) {\n  case "Monday":\n    console.log("Today is Monday");\n    break;\n  case "Tuesday":\n    console.log("Today is Tuesday");\n    break;\n  default:\n    console.log("Today is not Monday or Tuesday");\n}`,
    },
    {
        heading: "Data types in JavaScript",
        point:
            "JavaScript supports several data types, such as string, number, boolean, null, and undefined:",
        code: `let x = "Hello, world!"; // string\nlet y = 5; // number\nlet z = true; // boolean\nlet a = null; // null\nlet b = undefined; // undefined`,
    },
    {
        heading: "Array Methods",
        point: "",
        code: `// Declaring an array\nlet fruits = ['apple', 'banana', 'orange'];\n\n// Accessing elements of an array\nconsole.log(fruits[0]); // Output: 'apple'\nconsole.log(fruits[1]); // Output: 'banana'\nconsole.log(fruits[2]); // Output: 'orange'\n\n// Adding an element to the end of an array\nfruits.push('grape');\nconsole.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']\n\n// Removing the last element of an array\nfruits.pop();\nconsole.log(fruits); // Output: ['apple', 'banana', 'orange']\n\n// Adding an element to the beginning of an array\nfruits.unshift('grape');\nconsole.log(fruits); // Output: ['grape', 'apple', 'banana', 'orange']\n\n// Removing the first element of an array\nfruits.shift();\nconsole.log(fruits); // Output: ['apple', 'banana', 'orange']\n\n// Finding the index of an element in an array\nconsole.log(fruits.indexOf('banana')); // Output: 1\nconsole.log(fruits.indexOf('grape')); // Output: -1 (not found)`,
    },
    {
        heading: "Objects",
        point:
            "An object is a collection of key-value pairs. The key is a string and the value can be any valid JavaScript data type. You can access the value of an object property using either dot notation or bracket notation.",
        code: `const person = {
                name: 'John Doe',
                age: 30,
                city: 'New York'
            };

            console.log(person.name); // John Doe
            console.log(person['age']); // 30

            person.email = 'johndoe@example.com';
            person['phone'] = '123-456-7890';
            console.log(person); // { name: 'John Doe', age: 30, city: 'New York', email: 'johndoe@example.com', phone: '123-456-7890' }`,
    },
    {
        heading: "For Loops",
        point:
            "For loops are used to iterate over arrays or any iterable object in JavaScript. There are different types of for loops available in JavaScript",
        code: `for (let i = 0; i < 5; i++) {
                    console.log(i);
                }

                const person = {
                    name: 'John Doe',
                    age: 30,
                    city: 'New York'
                };

                for (let prop in person) {
                    console.log(\`\${prop}: \${person[prop]}\`);
                }

                const fruits = ['apple', 'banana', 'orange'];

                for (let fruit of fruits) {
                console.log(fruit);
                }

                fruits.forEach((fruit, index) => {
                console.log(\`\${index}: \${fruit}\`);
                });`,
    },
    {
        heading: "While Loop",
        point:
            "A while loop will execute a block of code repeatedly as long as the specified condition remains true.",
        code: `let i = 0;
                while (i < 10) {
                    console.log(i);
                    i++;
                }`,
    },
    {
        heading: "Do-while Loop",
        point:
            "A do-while loop is similar to a while loop, but it will always execute the code block at least once, even if the condition is false.",
        code: ` let i = 0;
                do {
                    console.log(i);
                    i++;
                } while (i < 10);`,
    },
    {
        heading: "Functions in JavaScript",
        point:
            "Functions are reusable blocks of code that can be called with different arguments. They can return a value or modify variables outside of their scope.",
        code: `function add(a, b) {
                 return a + b;
                }

                const result = add(2, 3);
                console.log(result); // 5`,
    },
    {
        heading: "Default parameters",
        point:
            "Default parameters allow you to specify a default value for a function parameter in case no argument is passed in.",
        code: `function greet(name = "World") {
  console.log(\`Hello, \${name}!\`);
}

greet(); // Hello, World!
greet("John"); // Hello, John!`,
    },
    {
        heading: "Arrow Functions",
        point:
            "Arrow functions are a shorthand way of creating functions in JavaScript. They have a more concise syntax and do not bind their own `this` value.",
        code: `\nconst add = (a, b) => a + b;\n\nconst result = add(2, 3);\nconsole.log(result); // 5\n`,
    },
    {
        heading: "Map method",
        point:
            "`map()` creates a new array by applying a function to each element of the original array.",
        code: `\nconst numbers = [1, 2, 3];\nconst doubled = numbers.map(num => num * 2);\nconsole.log(doubled); // [2, 4, 6]\n`,
    },
    {
        heading: "Filter method",
        point:
            "`filter()` creates a new array containing only the elements that pass a specified test function.",
        code: `\nconst numbers = [1, 2, 3];\nconst even = numbers.filter(num => num % 2 === 0);\nconsole.log(even); // [2]\n`,
    },
    {
        heading: "Reduce method",
        point:
            "`reduce()` applies a function to each element of an array, resulting in a single output value.",
        code: `\nconst numbers = [1, 2, 3];\nconst sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);\nconsole.log(sum); // 6\n`,
    },
];

export const JSDomNotes = [
    {
        heading: "Get Element by Id",
        point:
            "Returns the element that has the ID attribute with the specified value.",
        code: 'let element = document.getElementById("myElement");',
    },
    {
        heading: "Get Elements By Class Name",
        point:
            "Returns a collection of all elements in the document with the specified class name.",
        code: 'let elements = document.getElementsByClassName("myClass");',
    },
    {
        heading: "Get Elements By Tag Name",
        point:
            "Returns a collection of all elements in the document with the specified tag name.",
        code: 'let elements = document.getElementsByTagName("p");',
    },
    {
        heading: "Query Selector All",
        point:
            "Returns all elements that match a specified CSS selector(s) in the document.",
        code: 'let elements = document.querySelectorAll(".myClass");',
    },
    {
        heading: "InnerHTML",
        point: "Gets or sets the HTML content within an element.",
        code: 'element.innerHTML = "<p>New HTML content</p>";',
    },
    {
        heading: "InnerText",
        point: "Gets or sets the text content within an element.",
        code: 'element.innerText = "New text content";',
    },
    {
        heading: "Add Class",
        point: "Adds one or more class names to an element.",
        code: 'element.classList.add("newClass");',
    },
    {
        heading: "Remove Class",
        point: "Removes one or more class names from an element.",
        code: 'element.classList.remove("oldClass");',
    },
    {
        heading: "Add Event Listener",
        point: "Attaches an event handler to the specified element.",
        code: 'element.addEventListener("click", handleClick);',
    },
];