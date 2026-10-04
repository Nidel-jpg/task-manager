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

