<script lang="ts">
    import {addTask, deleteTask, removeCompletedTasks} from '../stores/taskStore'
    $: newTask =''
</script>

<div>
    <input type="text" placeholder="Add a task" bind:value={newTask}/>
    <button on:click={() => addTask(newTask)}>Add Task</button>
    <button on:click={removeCompletedTasks}>Remove Completed Tasks</button>
</div>

<style>

</style>