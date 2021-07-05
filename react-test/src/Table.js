import React from 'react';

const TableHeader = () => {
    return ( 
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {  // props는 읽기전용, 데이터를 변경할 수 없다. 
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key = { index }>
                <td>{ row.name }</td>
                <td>{ row.job }</td>
                <td>
                    <button onClick = {
                        () => props.removeCharacter(index)
                    }>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{ rows }</tbody>
}

const Table = (props) => {
    const { characterData, removeCharacter } = props 

    return (
        <table>
            <TableHeader />
            <TableBody characterData = { characterData } removeCharacter = { removeCharacter } />
        </table>
    )
}

export default Table 
