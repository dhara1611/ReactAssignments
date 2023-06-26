import React from "react";
import ReactDOM from "react-dom/client";

// Nested header element using React.createElement

// React.createElement = javascript object = render into html
const heading = React.createElement("div", { class: "title" },[
                React.createElement("h1", {},"h1"),
                React.createElement("h1", {},"h2"),
                React.createElement("h1", {},"h3")]);


// Nested header element using JSX
// jsx = React.createElement = javascript - Object = render into html
// jsx transpile code into  React.createElement which jsEngine can understand 
const jsxheading = (<div className="title">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
    </div>);


// function component
const TitleComponent = () =>{
    return <h2>Component Composition</h2>
}
const Headingcomponent = () =>{
    return <div className="container">
        <h1>Heading 1</h1> 
        {TitleComponent()}
        {<TitleComponent/>}

        {<TitleComponent></TitleComponent>}

    </div>
};


const root= ReactDOM.createRoot(document.getElementById("root"))
//root.render(jsxheading); render react element
root.render(<Headingcomponent/>);  //render functional component
