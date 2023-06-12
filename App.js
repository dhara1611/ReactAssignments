//  using React render element

//root.render replace not append inside root element and passdata from root.render method
const heading = React.createElement
        ("div", { id: "parent" },[
            React.createElement("div", { id: "child" },[
            React.createElement("h3", { id: "heading1" },"heading1"),
            React.createElement("h4", { id: "heading2" },"heading2")])
        ]);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //use root.render
