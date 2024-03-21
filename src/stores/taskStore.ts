import { writable } from "svelte/store";
import type { TaskList } from "../types/types";

const initial: TaskList[] = []

const TaskStore = writable(initial);


const addTask = (newTask: string) => {
    TaskStore.update(tasks => {
        return tasks = [...tasks, {task: newTask, status: false}]
    })
}


export {TaskStore, addTask}