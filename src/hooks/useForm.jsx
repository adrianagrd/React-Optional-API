import { useState } from "react";

export const useForm = () => {
    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState("");

    const handleNewNameValue = (event) => {
        setNewName(event.target.value);
    }

    const handleNewAgeValue = (event) => {
        setNewAge(event.target.value);
    }
    return {
        newName,
        newAge,
        handleNewNameValue,
        handleNewAgeValue
    }
}

