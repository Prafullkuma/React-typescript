import React from 'react'

type PersonListProps = {
    personList: {
        id: number,
        first_name: string,
        last_name: string
    }[]
}
const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {props.personList.map((ele) => {
                return <h4 key={ele.id}>{ele.first_name} {ele.last_name}</h4>
            })}
        </div>
    )
}

export default PersonList
