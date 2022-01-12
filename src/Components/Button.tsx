type buttonProps = {
    handleClick?: () => void,
    handleEventClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    isEvent:boolean
}
const Button = (props: buttonProps) => {
    return (
        <div>
            { props.isEvent ? 
                <button onClick={props.handleEventClick}>Button with Event object</button>
              :
              <button onClick={props.handleClick}> Simple Button </button>
            }
        </div>
    )
}

export default Button
