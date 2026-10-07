import api from "./axios"


export const getTasks = () => {
    return api.get("/api/tasks");
}

export const createTask  = (task:{
    title: string;
    description: string;
    priority: "low" | "medium" | "high";
    dueDate: string;
    completed: boolean;
}) => {
    return api.post("/api/tasks", task);
}

export const updateTask = (id: string | undefined,task: {
    title: string;
    description: string;
    priority: "low" | "medium" | "high";
    dueDate: string;
    
}) => {
    return api.put(`/api/tasks/${id}`, task);
}


export const deleteTask= (id: string | undefined) => {
    return api.delete(`/api/tasks/${id}`);
}

export const toggleTask= (id: string | undefined, completed: boolean) => {
    return api.put(`/api/tasks/${id}`, { completed });
}


export const getTaskById = (id: string | undefined) => {
    return api.get(`/api/tasks/${id}`);
}





