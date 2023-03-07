import './style.css';
import homePage from './home.js';
 

function websiteFrame() {
    const content = document.createElement('div');
    const body = document.body;
    content.setAttribute('id', 'content')

    const sideBar = document.createElement('div');
    sideBar.classList.add('side-bar')
    sideBar.textContent = 'sidebar'

    const pages = document.createElement('div');
    pages.classList.add('pages')
    
    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.textContent = 'footer'

    content.appendChild(sideBar)
    content.appendChild(pages)
    content.appendChild(footer)

    body.appendChild(content)

    pages.appendChild(homePage())
};

websiteFrame()