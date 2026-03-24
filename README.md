# Namaste React 

# parcel
- Dev Build
- Local Server
- HMR = HOt Module Replacement
- File watching Algorithm - written in C++
- catching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prodev bundles

//Food ordering app
/******
 * Header
 * -Logo
 * -Nav items
 *
 * Body
 * -search
 * -Restaurant Container
 *  -RestaurantCard
 *   -Image
 *   -Name of restaurant,start rating, cusine, delivery time
 *
 *
 * Footer
 * -Copyright
 * -link
 * -address
 * -contact
 * *****/


/**
 * *
 * *<div id="parent">
        <div id="child1">
            <h1>I'm an h1 tag</h1>
            <h2>I'm an h2 tag</h2>
        </div>
        <div id="child2">
            <h1>I'm an child2 h1 tag</h1>
            <h2>I'm an child2 h2 tag</h2>
        </div>
 * </div>
 * *
 * *
 * *
 * *
 *  */

// const parent = React.createElement("div",{id:"parent"},[
//     React.createElement("div",{id:"child1"},[
//         React.createElement("h1",{},"I'm an h1 tag"),React.createElement("h2",{},"I'm an h2 tag")
//     ])],[
//     React.createElement("div",{id:"child2"},[
//         React.createElement("h1",{},"I'm an h1 tag"),React.createElement("h2",{},"I'm an h2 tag")
//     ])]
// )

// //const heading = React.createElement("h1",{id:"heading"},"Hello World from Namaste React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//React.createElement() => ReactElement(Object) => HTMLElement(render)
// const heading = React.createElement("h1",{id:"heading"},"Hello World from Namaste React");
// console.log(heading);

//assignment-3
// const header = React.createElement("div", { className: "title" }, [
//   React.createElement("h1", {}, "Hi this is assignment3 head 1"),
//   React.createElement("h2", {}, "Hi this is assignment3 head 2"),
//   React.createElement("h3", {}, "Hi this is assignment3 head 3"),
// ]);

// const HeaderFunction = () => (
//   <div className="title">
//     {HeadingComponent()}
//     <h1>Hi this is assignment3 head 1</h1>
//     <h2>Hi this is assignment3 head 2</h2>
//     <h3>Hi this is assignment3 head 3</h3>
//     {header}
//     {jsxHeader}
//   </div>
// );

// const jsxHeader = (
//   <div className="title">
//     <h1>Hi this is assignment3 head 1</h1>
//     <h2>Hi this is assignment3 head 2</h2>
//     <h3>Hi this is assignment3 head 3</h3>
//   </div>
// );

//JSX (transpiled before it reaches to js engine) - PARCEL - Babel(package)
//JSX =>Babel transpiles it to React.createElement() => ReactElement(Object) => HTMLElement(render)
// const heading = <h1 id="heading">Hello World from Namaste React emoji</h1>;
// console.log(heading);

//React Functional Component
// const HeadingComponent = () => {
//   return <h1 id="heading">Hello World from Namaste React</h1>;
// };
// const HeadingComponent2 = () => (
//   <div className="container">
//     {heading}
//     {HeadingComponent()}
//     {/* <HeadingComponent /> */}
//     <HeadingComponent></HeadingComponent>
//     <HeaderFunction />
//     <h1 id="heading">Hello World from Namaste React 2</h1>
//   </div>
// );

# React Hooks
    (Normal JS utility functions)
    - useState() - state variable in react
    - useEffect()