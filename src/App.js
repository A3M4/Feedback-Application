// main component file
// Header is sub component, we need to import it here
import Header from "./component/Header"
function App() {
    // code inside return is in jsx(javascript xml)   
    // combine javascript and html together
    // makes code much easier
    return (
        // pass the "hello word" text to Header
        <>
            <Header text="Feedback UI" bgcolor="purple" textcolor="grey" />

            <div className="containerhaha">
                <h1>My App</h1>
            </div>
        </>


    )
}

export default App