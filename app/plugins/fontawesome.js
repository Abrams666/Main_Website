// plugins/fontawesome.js
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// 選擇你需要的圖示來加入 library
import { faUser, faHome, faCircleInfo, faEnvelope, faAngleDown, faDiagramProject, faCode, faTrophy, faBars } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faGithub, faGoogleDrive } from "@fortawesome/free-brands-svg-icons";

library.add(
    faHome,
    faCircleInfo,
    faEnvelope,
    faAngleDown,
    faGoogleDrive,
    faDiagramProject,
    faCode,
    faTrophy,
    faBars,
    faFacebook,
    faInstagram,
    faGithub
);

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
