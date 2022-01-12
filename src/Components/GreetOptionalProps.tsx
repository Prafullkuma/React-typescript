import React from 'react'
type GreetProps = {
    name: string,
    messageCount?: number, //Setting up optional props
    isLoggedIn: boolean
}

const GreetOptionalProps = (props: GreetProps) => {

    const { messageCount = 0 } = props  //Setting up default value

    return (
        <div>
            {props.isLoggedIn ?
                <>
                    <h1>Wel come {props.name}! you have {messageCount} message</h1>
                </> : "welcome guest"}
        </div>
    )
}

export default GreetOptionalProps
