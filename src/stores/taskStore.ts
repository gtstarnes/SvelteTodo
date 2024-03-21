import { writable } from "svelte/store";
import type { TaskList } from "../types/types";

const initial: TaskList[] = []

const TaskStore = writable(initial);
