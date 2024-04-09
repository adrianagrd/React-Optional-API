import { useState, useEffect } from "react";
import alumnsService from "../services/alumnsService";

export const useStudent = (newName, newAge) => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        alumnsService.getAlumns().then((data) => {
            handleChangeAlumnsValue(data)
        })
        .catch((error) => alert(`Error: ${error}`));
    }, [newName, newAge]);

    const handleChangeAlumnsValue = (newValue) => {
        setStudents(newValue)
    }

    return {
        students,
        handleChangeAlumnsValue
    };
}

export default useStudent;