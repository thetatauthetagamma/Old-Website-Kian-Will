import React from "react";
import "../css/test.scss";

export default function Test() {

    fetch("GET https://api.linkedin.com/v2/companySearch?q=search&query=LinkedIn%20Corporation")
        .then(res => {
            console.log(res)
            console.log("Done!")
        }
            
        )

    return (
        <React.Fragment>
            <div className="container-fluid bg-info">
                <h1 className="lead">Hello World</h1>
            </div>
        </React.Fragment>
    );
}
