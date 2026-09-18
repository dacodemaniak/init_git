import {App} from './app.js'
/**
 * Main function
 */
(() => {
    console.log("Hello world!")
    // Instanciate App class
    const app = new App()
    document.querySelector('body').addClass('darkmode')
})()

class App {}