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

    const name = 'Hello World!'
</script>

<style>
h1 {
    color: white;
    background-color: black;
}
</style>

<style lang="scss">

    $primary-color: white;
    $bg: black;
    h1 {
        color: $primary-color;
        background-color: $bg;
    }

</style>