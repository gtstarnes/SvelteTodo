<script lang="ts">
    import {addTask, deleteTask, removeCompletedTasks} from '../stores/taskStore'
    $: newTask =''
    let error: string = ''

    const handleNewTask = () => {
        if (!checkForErrors()) {
            addTask(newTask)
        }
        newTask = ''
    }

    const checkForErrors = () => {
        if (newTask === '') {
            error = 'Task cannot be empty'
            return true
        }
        error = ''
    }
</script>

<div>
    <div>
        <input type="text" placeholder="Add a task" bind:value={newTask}/>
        <button on:click={handleNewTask}>Add Task</button>
        <button on:click={removeCompletedTasks}>Remove Completed Tasks</button>
    </div>
    <p>{error}</p>
</div>

<style>

</style>