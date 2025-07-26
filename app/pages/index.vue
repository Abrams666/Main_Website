<template>
    <div class="container">
        <section id="sectionMain" class="section1">
            <h1>I'm<TextTyping :text="['Student', 'Developer', 'Engineer', 'Programmer']" :time="10000" /></h1>
            <font-awesome-icon id="down" icon="fa-solid fa-angle-down" bounce />
        </section>
        <section class="section2"></section>
    </div>
</template>

<script setup>
//import
import TextTyping from "../components/index/textTyping.vue";
</script>

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
    height: 92vh;
    background-image: url("/index/bgc1.jpg");
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1 {
    font-size: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

#down {
    font-size: 30px;
    color: var(--tc1);
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
}
</style>
