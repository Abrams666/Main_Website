<template>
    <section>
        <div id="container">
            <h1>Contact Me</h1>
            <div>
                <a href="#">
                    <font-awesome-icon icon="fa-solid fa-envelope" />
                    <p>abrams@g.ncu.edu.tw</p>
                </a>
                <a href="https://www.facebook.com/chen.yuan.qian.845782">
                    <font-awesome-icon icon="fa-brands fa-facebook" />
                    <p>Facebook</p>
                </a>
                <a href="https://www.instagram.com/abrams_66">
                    <font-awesome-icon icon="fa-brands fa-instagram" />
                    <p>Instagram</p>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup></script>

<style scoped>
section {
    width: 100vw;
    height: auto;
    min-height: 100vh;
    background-image: url("/contact/bg.jpg");
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
}

#container {
    width: 100%;
    height: auto;
    min-height: 80vh;
    padding-top: 15vh;
    padding-bottom: 5vh;
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
}

h1 {
    width: 100%;
    height: 10vh;
    font-size: 5vh;
    text-align: center;
}

#container div {
    width: 80%;
    min-width: 300px;
    height: auto;
    min-height: 65vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 50px;
}

div li {
    width: 25%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

svg {
    width: 60%;
    height: auto;
}

p,
a {
    font-size: larger;
    text-align: center;
}
</style>
