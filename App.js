//  using React render element

//root.render replace not append inside root element and passdata from root.render method 
const heading = React.createElement("h1", {id:"heading"}, "Hello World React Element");
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading);//use root.render