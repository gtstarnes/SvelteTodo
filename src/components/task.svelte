<script lang='ts'>
    import type { Task } from "../types/types"
    import {deleteTask, changeStatus} from "../stores/taskStore"
    export let taskDetails:Task;
</script>

<div class="task">
    <input type="checkbox" on:change={() => changeStatus(taskDetails)} />
    <p class:checked={taskDetails.status}>{taskDetails.task}</p>
    <button on:click={() => deleteTask(taskDetails.task)}>Delete</button>
</div>

<style>
    .checked {
        text-decoration: line-through;
    }
    .task {
        display: flex;
        width: 80%;
        justify-content: space-between;
    }
</style>