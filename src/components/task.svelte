<script lang='ts'>
// IMPORTS
    import type { Task } from "../types/types"
    import {deleteTask, changeStatus} from "../stores/taskStore"
// VARIABLES
    export let taskDetails:Task;
</script>

<!--Contains checkbox, task, delete button for each task-->
<div class="task">
    <input type="checkbox" on:change={() => changeStatus(taskDetails)} />
    <p class:checked={taskDetails.status}>{taskDetails.task}</p>
    <button on:click={() => deleteTask(taskDetails.task)}>Delete</button>
</div>

<style>
    .checked {
        text-decoration: line-through;
        color: grey;
    }
    .task {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-bottom: 1rem;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
    }
    button {
        cursor: pointer;
        background-color: red;
        font-weight: bold;
    }
</style>