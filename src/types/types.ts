export type Task = {
    task: string,
    status: boolean
}

export type User = {
    username: string,
    password: string,
    isLoggedIn: boolean,
    tasks: Task[]
}