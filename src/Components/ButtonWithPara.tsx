type buttonProps={
    handleClick:(event:React.MouseEvent<HTMLButtonElement>,id:number)=>void
}


const ButtonWithPara = (props:buttonProps) => {
    return (
        <div>
              <button onClick={(event)=>props.handleClick(event,923094)}>Button with Props</button>  
        </div>
    )
}

export default ButtonWithPara
    