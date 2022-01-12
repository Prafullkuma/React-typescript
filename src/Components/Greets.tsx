import React from 'react'
type GreetProps = {
    name: string,
    messageCount: number,
    isLoggedIn: boolean
}

const Greets = (props: GreetProps) => {
    return (
        <div>
            {props.isLoggedIn ?
                <>
                    <h1>Wel come {props.name}! you have {props.messageCount} message</h1>
                </> : "welcome guest"}
        </div>
    )
}

export default Greets
