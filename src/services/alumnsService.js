const baseUrl = 'http://localhost:6715/alumnes';

const getAlumns = async () => {
    try {
        const response = await fetch(baseUrl);
        return response.json();
    } catch (error) {
        console.error(`Error: ${error}`);
        throw error;
    }
};

const postAlumn = async (newAlumn) => {
    try {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newAlumn)
        });
        return response.json();
    } catch (error) {
        console.error(`Error: ${error}`);
        throw error;
    }
}

const putAlumn = async (userId, newAlumn) => {
    try {
        const response = await fetch(`${baseUrl}/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newAlumn)
        });
        return response.json();
    } catch (error) {
        console.error(`Error: ${error}`);
        throw error;
    }
};

const deleteAlumn = async (userId) => {
    try {
        const response = await fetch(`${baseUrl}/${userId}`, {
            method: 'DELETE',
            
        });
        return response;
    } catch (error) {
        console.error(`Error: ${error}`);
        throw error;
    }
};

export default {
    getAlumns,
    postAlumn,
    putAlumn,
    deleteAlumn
};
