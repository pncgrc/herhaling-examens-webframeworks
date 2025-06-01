import { useState } from "react";


interface Student {
    name: string;
    age: number;
    year: number;
}

const Filtering = () => {
    const [searchText, setSearchText] = useState<string>("");
    const [sortField, setSortField] = useState<string>("name");

    const students: Student[] = [
        { name: "Alice", age: 18, year: 1 },
        { name: "Bob", age: 19, year: 2 },
        { name: "Charlie", age: 20, year: 3 },
        { name: "Diana", age: 21, year: 4 },
        { name: "Ethan", age: 22, year: 3 },
        { name: "Fay", age: 18, year: 1 },
        { name: "George", age: 20, year: 2 },
        { name: "Hannah", age: 19, year: 2 },
        { name: "Ivan", age: 23, year: 4 },
        { name: "Julia", age: 21, year: 3 }
    ];

    students.sort((a, b) => {
        if (sortField === "name") {
            return a.name.localeCompare(b.name);
        }
        else if (sortField === "age") {
            return a.age - b.age;
        }
        else {
            return a.year - b.year
        }
    })

    return(
        <>
            <label>Search: <input type="text" value={searchText} onChange={(event) => setSearchText(event.target.value)}/></label>
            <table>
                <thead>
                    <th style={{ fontWeight: sortField === "name" ? "bold" : "normal" }} onClick={() => setSortField("name")}>Name</th>
                    <th style={{ fontWeight: sortField === "age" ? "bold" : "normal" }} onClick={() => setSortField("age")}>Age</th>
                    <th style={{ fontWeight: sortField === "year" ? "bold" : "normal" }} onClick={() => setSortField("year")}>Year</th>
                </thead>
                <tbody>
                    {
                        students.filter(student => student.name.toLowerCase().startsWith(searchText.toLowerCase())).map((student, index) => (
                            <tr key={index}>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.year}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}

export default Filtering;