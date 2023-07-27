import React from "react";
import Main from "./components/main";
import AllSections from "./components/AllSections";

function App() {
    return (
        <div className="App container">
            <div className={`flex items-start`}>
                <div>
                    <Main/>
                </div>
                <div className={`all-sections`}>
                    <AllSections/>
                </div>
            </div>

        </div>
    );
}

export default App;
