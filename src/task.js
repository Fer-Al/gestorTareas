// Lista de tareas
let tasks = JSON.parse(localStorage.getItem("tareas")) || [];

// Funcion para llevar las tareas 
export const getTasks = () => tasks;

// Funcion para agregar una tarea
export const addTask = (task) => {
    const newTask = {
        id: Date.now (),
        text: task,
        completed: false,
    };
    tasks.push(newTask);
    localStorage.setItem("tareas", JSON.stringify(tasks));
};

// Función para eliminar una tarea
export const deleteTask = (id) => {
    tasks = tasks.filter((task)  => task.id !== parseInt(id));
    localStorage.setItem("tareas", JSON.stringify(tasks));
};

// Función para actualizar una tarea
export const toggleTask = (id) => {
    tasks = tasks.map((task) => {
        if(task.id === parseInt(id)) {
            task.completed = !task.completed;
        }
        return task;
    });
    localStorage.setItem("tareas", JSON.stringify(tasks));
};