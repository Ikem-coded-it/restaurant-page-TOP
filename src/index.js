import './style.css';
import homePage from './home.js';
import logo from './HUNGRYMANCHOWS-logo/cover.png';
 

function websiteFrame() {
    const content = document.createElement('div');
    const body = document.body;
    content.setAttribute('id', 'content')

    const sideBar = document.createElement('div');
    sideBar.classList.add('side-bar')
    sideBar.appendChild(createSidebar())

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

function createSidebar() {
    const sideBarContent = document.createElement('div');
    sideBarContent.classList.add('side-bar-content')

    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logo-container');

    const tabsContainer = document.createElement('div')
    tabsContainer.classList.add('tabs-container');
    tabsContainer.appendChild(createTabs())
    

    sideBarContent.appendChild(logoContainer)
    sideBarContent.appendChild(tabsContainer)

    return sideBarContent;
}

function createTabs() {
    const tabsList = document.createElement('ul');
    tabsList.classList.add('tabs-list')

    const homeBtn = document.createElement('li')
    homeBtn.textContent = 'Home'

    const menuBtn = document.createElement('li')
    menuBtn.textContent = 'Menu'

    const contactBtn = document.createElement('li')
    contactBtn.textContent = 'Contacts'

    tabsList.appendChild(homeBtn)
    tabsList.appendChild(menuBtn)
    tabsList.appendChild(contactBtn)

    return tabsList;
}

websiteFrame()