import React from "react";
import CodeSnippetJs from "../../components/JS/CodeSnippetJs";
const JSNotes = () => {
  const codeSnippetsBasic = [
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
      code: `let i = 0;
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
  const codeSnippetsDOM = [
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
  return (
    <div className="mt-32 py-6 px-10 ">
      <h1 className="text-left font-bold text-6xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
        <p>JS Cheatsheet</p>
      </h1>
      {codeSnippetsBasic.map((element, index) => (
        <CodeSnippetJs
          key={index}
          point={element.point}
          heading={element.heading}
          code={element.code}
        />
      ))}
      <div className="flex flex-col items-start justify-between space-y-4 mt-8 py-24">
        <h1 className="text-left font-bold text-3xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
          <p>JS DOM</p>
        </h1>
        {codeSnippetsDOM.map((element, index) => (
          <CodeSnippetJs
            key={index}
            point={element.point}
            heading={element.heading}
            code={element.code}
          />
        ))}
      </div>
    </div>
  );
};

export default JSNotes;
