type styleProps={
    style:React.CSSProperties
}

const Container = (props:styleProps) => {
    return (
        <div style= {props.style}>
               Text Goes Here 
        </div>
    )
}

export default Container
