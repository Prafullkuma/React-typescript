
type PersonProps = {
    name: {
        first_name: string,
        last_name: string
    }
}
const Person = (props: PersonProps) => {
    return (
        <div>
            <h1>{props.name.first_name} {props.name.last_name}</h1>
        </div>
    )
}

export default Person
