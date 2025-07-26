<template>
    <div class="container">
        <section id="sectionMain"></section>
        <section class="section1"></section>
    </div>
</template>

<script setup></script>

<style scoped>
.container {
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

section {
    height: auto;
    width: 92%;
    padding: 4%;
}

.section1 {
    background-color: var(--bg1);
}

.section2 {
    background-color: var(--bg2);
}

#sectionMain {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
