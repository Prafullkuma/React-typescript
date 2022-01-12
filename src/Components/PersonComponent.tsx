import { personProp } from './person.type'

const PersonComponent = (props:personProp) => {
    return (
        <div>
            <h1>{props.first} {props.last}</h1>
        </div>
    )
}

export default PersonComponent
