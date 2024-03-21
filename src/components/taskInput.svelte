<script lang="ts">
    import {TaskStore, addTask, removeCompletedTasks} from '../stores/taskStore'
    $: newTask =''
    let error: string = ''

    const handleNewTask = () => {
        if (!checkForErrors()) {
            newTask = newTask.trim();
            addTask(newTask)
        }
        newTask = ''
    }

    const checkForErrors = () => {
        if (newTask === '') {
            error = 'TASK CANNOT BE EMPTY'
            return true
        }
        if (isDuplicate()){
            error = 'TASK ALREADY EXISTS'
            return true
        }
        error = ''
    }

    const isDuplicate = () => {
        return $TaskStore.some(task => {
            return task.task === newTask
        })
    }
</script>

<div>
    <div>
        <input type="text" placeholder="Add a task" bind:value={newTask}/>
        <button on:click={handleNewTask}>Add Task</button>
        <button class="remove" on:click={removeCompletedTasks}>Remove Completed Tasks</button>
    </div>
    <p class="error">{error}</p>
</div>

<style>
    .error {
        color: red;
        font-weight: bold;
    }
    .remove {
        background-color: red;
        border-radius: 2px;
        outline: inherit;
        border: none;
        padding: 2.8px;
        cursor: pointer;
    }
</style>