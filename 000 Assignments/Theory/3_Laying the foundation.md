# Assignment 3 - laying the foundation

## 1. what is  JSX:
- JSX stands for JavaScript XML (Extension markup language)
- JSX is a syntax Extension of  JavaScript that enables user to write React Components
- JSX is not part  of React and React can be written without JSX using React.createElement()
- JSX have a HTML like syntax or XML but its not writing  HTML in javascript.
- Ex: 
    ```const element = <h1>Hello, world!</h1>;```

## Why JSX ? Benefits
- It simplifies our Code while writing complex nested code by providing the power of HTMl's simplicity and JAvascript's logic

### Without JSX
    const heading = React.createElement(
    'h1',
        {id:"heading""},
        "Hello React from React!"
        );

### With JSX
    const heading = <h1 id= " heading>Hello React from React!</h1>

## 2. Superpowers of JSX 
- simplies out code for writing react component
- Using {} any valid Js code can be written.
- Protect us from cross-site injection Attacks
- JSX provies React Element and React Functional Component which are easy to create and reusable


## 3. Role of type attribute in Script tag? what are other options

- 1.JavaScript (Default): If you don't specify the type attribute, it defaults to "text/javascript." This indicates that the content is JavaScript code.

   ``` <script>```
        
- Module Script: You can use the "module" type to indicate that the content is an ES6 module, which allows you to use features like import and export. it is by default defer
```    <script type="module">```

- JSON: You can use the "application/json" type to include JSON data within a script tag. This is useful for embedding configuration or data.
``<script type="application/json">``
  

### other options
- If the async attribute is set, the script is downloaded in parallel to parsing the page, and executed as soon as it is available. The parsing of the page is interrupted once the script is downloaded completely, and then the script is executed, before the parsing of the rest of the page continues.

    Note: The async attribute is only for external scripts (and should only be used if the src attribute is present).

#### Note: There are several ways an external script can be executed:

- If neither async or defer is present: The script is downloaded and executed immediately, blocking parsing until the script is completed 
- If async is present: The script is downloaded in parallel to parsing the page, and executed as soon as it is available (before parsing completes)
- If defer is present (and not async): The script is downloaded in parallel to parsing the page, and executed after the page has finished parsing ( parsing then script execution)

- integrity : 
This attribute contains inline metadata that a user agent can use to verify that a fetched resource has been delivered free of unexpected manipulation. 

- cross-origin: 
it is used when a request is made from other domain. mode of request is CORS (croos origin resource sharing)


### 4. Syntax of react component and element
- React Element
   ``` const heading =
        (<h1 className="heading">
            Namaste React using JSX
        </h1>)  ```


- React Functional component
```const Title = () => {
    return <h1 className="title" >Title - Namaste</h1>
};
ways to call react component
<Title />
<Title></Title>
{Title()}```

