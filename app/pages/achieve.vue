<template>
    <section>
        <h1><font-awesome-icon icon="fa-solid fa-trophy" />Achievements</h1>
        <div id="container">
            <a v-for="(item, index) in achieveData" :key="index" :href="`/achievedetail/a${item.id}`">
                <div id="imageController">
                    <img :src="`/achieve/images/a${item.id}.webp`" alt="" />
                </div>
                <p>{{ item.title }}</p>
            </a>
        </div>
    </section>
</template>

<script setup>
//import
import achieveData from "../assets/json/achieveData.json";
</script>

<style scoped>
section {
    width: 90vw;
    height: auto;
    min-height: 80vh;
    padding-top: 15vh;
    padding-bottom: 5vh;
    padding-left: 5vw;
    padding-right: 5vw;
    background-color: var(--bg2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
}

h1 {
    width: 100%;
    height: 10vh;
    font-size: 5vh;
    text-align: left;
}

#container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 50px;
}

#container a {
    width: 25%;
    height: 70vh;
    padding: 20px;
    min-width: 300px;
    background-color: var(--bg1);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
}

#imageController {
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 10px;
}

p {
    width: 100%;
    text-align: justify;
}
</style>
