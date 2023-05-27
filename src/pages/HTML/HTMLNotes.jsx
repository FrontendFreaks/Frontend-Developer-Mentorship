import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import CodeSnippetHtml from "../../components/HTML/CodeSnippetHtml";
const HTMLNotes = () => {
  const codeSnippet1 = `<!DOCTYPE html>
<html>
  <head>
    <title>Title of the document</title>
  </head>
  <body>
    Content goes here
  </body>
</html>`;
  const codeSnippet2 = `
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>

`;

  const codeSnippet3 = `
<p>This is a paragraph</p>


`;

  const codeSnippet4 = `
<p>This is the first line.<br>This is the second line.</p>
`;

  const codeSnippet5 = `
<hr>
`;

  const codeSnippet6 = `
<a href="https://www.example.com">Link text</a>`;

  const codeSnippet7 = `
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
`;

  const codeSnippet8 = `
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
`;

  const codeSnippet9 = `
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
</form>`;

  const codeSnippet10 = `
<img src="image.jpg" alt="Image description">`;

  const codeSnippet11 = `
  <!-- Youtube Video -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>

<!-- External Webpage -->
<iframe src="https://www.example.com"></iframe>
`;

  const codeSnippet12 = `
<audio src="audio_file.mp3" controls></audio>


`;
  const codeSnippet13 = `
<video src="video_file.mp4" controls></video>

`;

  return (
    <div className="mt-32 py-6 px-10 ">
      <h1 className="text-left font-bold text-6xl mb-6  flex items-center justify-center space-x-5 text-[#6557fd]   ">
        <p>HTML Cheatsheet</p>
      </h1>
      <div className="flex flex-col items-start justify-between space-y-4">
        <CodeSnippetHtml code={codeSnippet1} heading="Basic Structure" />
        <CodeSnippetHtml code={codeSnippet2} heading="Headings" />
        <CodeSnippetHtml code={codeSnippet3} heading="Paragraphs" />
        <CodeSnippetHtml code={codeSnippet4} heading="Line Break" />
        <CodeSnippetHtml code={codeSnippet5} heading="Horizontal Line" />
        <CodeSnippetHtml code={codeSnippet6} heading="Links" />
        <CodeSnippetHtml code={codeSnippet7} heading="Lists" />
        <CodeSnippetHtml code={codeSnippet8} heading="Tables" />
        <CodeSnippetHtml code={codeSnippet9} heading="Forms" />
        <CodeSnippetHtml code={codeSnippet10} heading="Images" />
        <CodeSnippetHtml code={codeSnippet11} heading="Iframes" />
        <CodeSnippetHtml code={codeSnippet12} heading="Audio" />
        <CodeSnippetHtml code={codeSnippet13} heading="Video" />
      </div>
    </div>
  );
};

export default HTMLNotes;
