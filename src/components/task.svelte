<script lang='ts'>
    import type { Task } from "../types/types"
    import {deleteTask} from "../stores/taskStore"
    export let taskDetails:Task;
</script>

<div>
    <input type="checkbox" />
    <p>{taskDetails.task}</p>
    <button on:click={() => deleteTask(taskDetails.task)}>Delete</button>
</div>

<style>

</style>