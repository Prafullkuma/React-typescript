type  destructureProps={
    name:string,
    handleClick:()=>void
} 

const DestructureProps = ({name,handleClick}:destructureProps) => {
    return (
        <div>
                <h1>{name}</h1>            
                <button onClick={handleClick}> Click Me</button>
        </div>
    )
}

export default DestructureProps
