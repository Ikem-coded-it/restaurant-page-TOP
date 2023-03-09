import './style.css';
import homePage from './home.js';
import menuPage from './menu.js'
import logo from './HUNGRYMANCHOWS-logo/cover.png';
 

(function websiteFrame() {
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
    createFooter(footer);

    content.appendChild(sideBar)
    content.appendChild(pages)
    content.appendChild(footer)

    body.appendChild(content)

    pages.appendChild(homePage())
})();

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

function createFooter(footer) {
    const copyright = document.createElement('p');
    copyright.textContent = `Copyright © ${new Date().getFullYear()} Ikem-Coded-It`;

    const githubLink = document.createElement('a');
    githubLink.href = "https://github.com/Ikem-Coded-It";

    const githubIcon = document.createElement('i');
    githubIcon.classList.add('fa');
    githubIcon.classList.add('fa-github');

    githubLink.appendChild(githubIcon);
    footer.appendChild(copyright);
    footer.appendChild(githubLink);
}

function createTabs() {
    const tabsList = document.createElement('ul');
    tabsList.classList.add('tabs-list')

    const homeBtnContainer = document.createElement('div');
    homeBtnContainer.setAttribute('id', 'home-btn')
    const homeBtn = document.createElement('li')
    homeBtn.textContent = 'Home'
    homeBtnContainer.innerHTML = '<i class="fa-solid fa-house"></i>';
    homeBtnContainer.appendChild(homeBtn)

    const menuBtnContainer = document.createElement('div');
    menuBtnContainer.setAttribute('id', 'menu-btn')
    const menuBtn = document.createElement('li')
    menuBtn.textContent = 'Menu'
    menuBtnContainer.innerHTML = '<i class="fa-solid fa-bars"></i>';
    menuBtnContainer.appendChild(menuBtn);

    const contactBtnContainer = document.createElement('div');
    contactBtnContainer.setAttribute('id', 'contact-btn')
    const contactBtn = document.createElement('li')
    contactBtn.textContent = 'Contacts';
    contactBtnContainer.innerHTML = '<i class="fa-solid fa-phone"></i>';
    contactBtnContainer.appendChild(contactBtn);

    tabsList.appendChild(homeBtnContainer)
    tabsList.appendChild(menuBtnContainer)
    tabsList.appendChild(contactBtnContainer)

    return tabsList;
}

const homeBtn = document.getElementById('home-btn')
const menuBtn = document.getElementById('menu-btn')
const contactBtn = document.getElementById('contact-btn')

homeBtn.addEventListener('click', (e) => switchTabs(e.target))
menuBtn.addEventListener('click', (e) => switchTabs(e.target))
contactBtn.addEventListener('click', (e) => switchTabs(e.target))

function switchTabs(button) {
    button.classList.add('active')

    const tabContent = document.getElementsByClassName('pages')[0]
     
    tabContent.removeChild(tabContent.firstChild);

    if (button.textContent === 'Menu') tabContent.appendChild(menuPage())
    if (button.textContent === 'Home') tabContent.appendChild(homePage())
    if (button.textContent === 'Contacts') tabContent.appendChild(contactPage())
}