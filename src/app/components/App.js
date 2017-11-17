import React from "react";

import { Header } from "./Header";
import FlashMessage from "./FlashMessage";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div>
                    <Header />
                    <FlashMessage />
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default App;

