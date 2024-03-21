<script lang="ts">
    import { TaskStore } from "../stores/taskStore";
    import Task from './task.svelte'
</script>

<div>
    {#if $TaskStore.length === 0}
        <p>There are no tasks to do</p>
    {:else}
        {#each $TaskStore as taskDetails (taskDetails.task)}
            <Task {taskDetails} />
        {/each}
    {/if}
</div>

<style>

</style>