<template>
    <section>
        <div id="imagesController"><img :src="`/achieve/images/a${achieveItem.id}.jpg`" alt="" /></div>
        <div id="form">
            <div class="row">
                <div class="title"><p>Title</p></div>
                <div class="content">
                    <p>{{ achieveItem.title }}</p>
                </div>
            </div>
            <div class="row">
                <div class="title"><p>Date(M/D/Y)</p></div>
                <div class="content">
                    <p>{{ achieveItem.date }}</p>
                </div>
            </div>
            <div class="row" v-for="i in achieveItem.content.title.length">
                <div class="title">
                    <p>{{ achieveItem.content.title[i - 1] }}</p>
                </div>
                <div class="content">
                    <p>{{ achieveItem.content.content[i - 1] }}</p>
                </div>
            </div>
            <div class="row" v-if="showLinks">
                <div class="title"><p>Links</p></div>
                <div class="content">
                    <a v-for="(link, index) in achieveItem.links" :key="index" :href="link.link">{{ link.title }}</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
//import
import achieveData from "~/assets/json/achieveData.json";
const route = useRoute();

//value
let achieveItem = {};
const showLinks = ref(false);
const id = parseInt(route.params.i);

//run
for (let i = 0; i < achieveData.length; i++) {
    if (parseInt(achieveData[i].id) == id) {
        achieveItem = achieveData[i];
        break;
    }
}

if (achieveItem.links.length > 0 && false) {
    showLinks.value = true;
}
</script>

<style scoped>
section {
    width: 90vw;
    height: auto;
    min-height: 85vh;
    padding-top: 10vh;
    padding-bottom: 5vh;
    padding-left: 5vw;
    padding-right: 5vw;
    background-color: var(--bg2);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

#imagesController {
    width: 40%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

#imagesController img {
    width: 100%;
    height: auto;
}

#form {
    width: 50%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.row {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.title {
    width: 25%;
    height: 100%;
    padding: 2%;
    background-color: var(--dc1);
    font-size: 1.5em;
    font-weight: bold;
}

.content p,
.title p {
    height: 4vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
}

.content {
    width: 66%;
    height: 100%;
    padding: 2%;
    background-color: var(--bg1);
    font-size: 1.2em;
}
</style>
