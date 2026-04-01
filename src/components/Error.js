import { useRouteError } from "react-router-dom";
const Error = () =>{
    const err = useRouteError();
    console.log(err);
    return(
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <h1 style={{ color: "red" }}>OOPS!!!</h1>
            <h3>Something went wrong</h3>
            <h2>{err.status} : {err.statusText}</h2>
        </div>
    )
}
export default Error;