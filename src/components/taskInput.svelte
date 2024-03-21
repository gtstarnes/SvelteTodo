<script lang="ts">
    import {addTask, deleteTask, removeCompletedTasks} from '../stores/taskStore'
    $: newTask =''

    const handleNewTask = () => {
        addTask(newTask)
        newTask = ''
    }
</script>

<div>
    <input type="text" placeholder="Add a task" bind:value={newTask}/>
    <button on:click={handleNewTask}>Add Task</button>
    <button on:click={removeCompletedTasks}>Remove Completed Tasks</button>
</div>

<style>

</style>