import axios from "axios";

export const completeTask = async ( id: number ) => {
    try {

        const userResponse = confirm("¿Estás seguro de que ya realizaste tu tarea? Recuerda que no la puedes volver a dejar en pendiente!");

        const updatedData = {
            completed: true,
        };

        if (userResponse) {
            await axios.put(`http://localhost:3000/api/tasks/${id}`, updatedData);
            window.location.href = 'http://localhost:3000/show';
        };

        return

    } catch (error) {
        console.error('Error completing task:', error);
    }
}