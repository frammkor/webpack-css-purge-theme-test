<template>
    <div>
        <h1>
            {{name}}
        </h1>
        <button type="button" class="btn btn-primary">
            This is a bootstrap button
        </button>
    </div>
</template>

<script setup>
    import 'bootstrap';
    import './App.scss';

    const name = 'Hello World!'
</script>

<style>
h1 {
    color: white;
    background-color: black;
}
</style>
