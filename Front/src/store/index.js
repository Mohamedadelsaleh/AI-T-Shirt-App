import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#F6635C',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',

});


export default state;