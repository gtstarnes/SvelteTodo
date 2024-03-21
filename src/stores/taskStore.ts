import { writable } from "svelte/store";
import type { Task } from "../types/types";

const initial: Task[] = []

const TaskStore = writable(initial);


const addTask = (newTask: string) => {
    TaskStore.update(tasks => {
        return tasks = [...tasks, {task: newTask, status: false}]
    })
}

const deleteTask = (task:string) => {
    TaskStore.update(tasks => {
        return tasks.filter(t => {
            return task !== t.task
        })
    })
}

const changeStatus = (details:Task) => {
    const {task, status} = details
    TaskStore.update(tasks => {
        return tasks.map(t => {
            if (t.task === task) {
                return {...t, status: !status}
            }
            return t
        })
    })
}

const removeCompletedTasks = () => {
    TaskStore.update(tasks => {
        return tasks.filter(task => {
            return task.status !== true
        })
    })
}


export {TaskStore, addTask, deleteTask, changeStatus, removeCompletedTasks}