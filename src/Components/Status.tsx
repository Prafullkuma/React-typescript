import React from 'react'
type StatusPros = {
    status: "loading" | "success" | "fail"
}
const Status = (props: StatusPros) => {
    let message;
    if (props.status === "loading") {
        message = "Loading..."
    }
    else if (props.status === "success") {
        message = "Successfully added"
    }
    else if (props.status === "fail") {
        message = "Failed"
    }
    // console.log(message)
    return (
        <div>
            <h1>Status - {message} </h1>
        </div>
    )
}

export default Status
