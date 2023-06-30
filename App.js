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
        {jsxheading} {/*element rendering*/}
        {<TitleComponent/>} {/*component render*/}
        {<TitleComponent></TitleComponent>}

    </div>
};

const Header = ()=>{
    return <div>
            <div className="header">
                <img src="https://www.templateupdates.com/wp-content/uploads/2018/10/Fast-Food-Logo-Design-Template.jpg" className="logo"/>
                <div className="searchbox">
                    <input type="text"/><button>search</button>
                </div>
                <img src="https://png.pngtree.com/png-vector/20190307/ourmid/pngtree-vector-add-user-icon-png-image_762930.jpg" className="usericon"/>
            </div>
            <Headingcomponent/>
            </div>
    
}


const root= ReactDOM.createRoot(document.getElementById("root"))
//root.render(jsxheading); render react element
root.render(<Header/>);  //render functional component
