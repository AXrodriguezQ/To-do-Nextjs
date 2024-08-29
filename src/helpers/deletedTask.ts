import axios from "axios";

export const deleteTask = async ( id: number ): Promise<void> => {
    try {

        const userResponse = confirm("¿Estás seguro de que deseas continuar?");

        if (userResponse) {
            await axios.delete(`http://localhost:3000/api/tasks/${id}`);
            window.location.href = 'http://localhost:3000/show';
        };

        return

    } catch (error) {
        console.error('Error deleting task:', error);
    }
}
