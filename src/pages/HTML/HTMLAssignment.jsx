import React from "react";
import HTMLAssignmentElement from "../../components/HTML/HTMLAssignmentElement";
import TimeLine from "./../../assets/HTML/timeline.png";
import Menu from "./../../assets/HTML/menu.png";
import Todo from "./../../assets/HTML/todo.png";
import PriceDetails from "./../../assets/HTML/pricedetails.png";
import Form from "./../../assets/HTML/form.png";
import Portfolio1 from "./../../assets/HTML/portfolio1.png";
const HTMLAssignment = () => {
  return (
    <div className="mt-32 py-6 px-10 ">
      <h1 className="text-left font-bold text-6xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
        <p>HTML Assignment</p>
      </h1>
      <HTMLAssignmentElement
        number={1}
        heading="Time Line"
        problem="Create a timeline using an ordered list. The timeline can be about a historical event, a person's life, or any topic of your choice. Each item on the timeline should be a significant event or date."
        imageSrc={TimeLine}
      />
      <HTMLAssignmentElement
        number={2}
        heading=" Restaurant Menu"
        problem="Create a menu for a restaurant using an ordered list. Each item on the menu should be a dish or a beverage. Add a description and the price for each item."
        imageSrc={Menu}
      />
      <HTMLAssignmentElement
        number={3}
        heading="Todo List"
        problem="Create a to-do list with an unordered list. Each item on the list should be a task that needs to be completed. Add a checkbox next to each item so the user can mark off the completed tasks."
        imageSrc={Todo}
      />
      <HTMLAssignmentElement
        number={4}
        heading="Price Details Table"
        problem="Create a table that displays the prices of products in an online store. The table should have the following columns: Product Name, Description, Price, and Availability. Populate the table with data for at least five products."
        imageSrc={PriceDetails}
      />
      <HTMLAssignmentElement
        number={5}
        heading="Registeration Form Assignment"
        problem="Create a user registration form for a website using the HTML form tags. The form should include the following fields:

- Name (text input)
- Email (text input)
- Password (password input)
- Confirm Password (password input)
- Date of Birth (date input)
- Gender (radio button)
- Interests (checkbox)

The form should also include a Submit button to submit the form and a Reset button to clear the form fields. Additionally, each form element should have a corresponding label element using the HTML label tag."
        imageSrc={Form}
      />
      <HTMLAssignmentElement
        number={6}
        heading="Portfolio"
        problem='Create a basic HTML portfolio that includes an "About Me" section, as well as sections for displaying your skills, education, projects and work experience. Include a "Contact" section with your email address and social media links'
        imageSrc={Portfolio1}
      />
    </div>
  );
};

export default HTMLAssignment;
