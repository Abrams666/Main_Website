<template>
    <header>
        <div class="logo">
            <img src="/pageStructure/logo.webp" alt="Logo" />
            <h1>Abrams</h1>
        </div>
        <nav>
            <ul>
                <li><font-awesome-icon icon="fa-solid fa-house" /><a href="/">Home</a></li>
                <li><font-awesome-icon icon="fa-solid fa-circle-info" /><a href="/about">About</a></li>
                <li><font-awesome-icon icon="fa-solid fa-envelope" /><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>
</template>

<script setup></script>

<style scoped>
header {
    width: 100vw;
    height: 8vh;
    background-color: var(--bg2);
    color: var(--tc1);
    opacity: 0.8;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
}

.logo {
    width: 10%;
    height: 80%;
    margin-left: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    gap: 5px;
}

.logo img {
    width: auto;
    height: 100%;
    border-radius: 99999px;
}

nav {
    width: 70%;
    height: 80%;
    margin-right: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

nav ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
    gap: 10px;
}

ul li {
    width: auto;
    height: 100%;
    padding: 3px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>
