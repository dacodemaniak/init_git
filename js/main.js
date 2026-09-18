import {App} from './app.js'
/**
 * Main function
 */
(() => {
    console.log("Hello world!")
    // Instanciate App class
    const app = new App()
    
})()

class App {}

const switchTheme = () => {
    const classList = document.querySelector('body').classList
    if (classList.contains('darkmode'))
        document.querySelector('body').addClass('lightmode')
    else
        document.querySelector('body').addClass('darkmode')
}