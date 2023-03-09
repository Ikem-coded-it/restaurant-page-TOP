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
    createFooter(footer);

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
    const homeBtn = document.createElement('li')
    homeBtn.textContent = 'Home'
    homeBtnContainer.innerHTML = '<i class="fa-solid fa-house"></i>';
    homeBtnContainer.appendChild(homeBtn)

    const menuBtnContainer = document.createElement('div');
    const menuBtn = document.createElement('li')
    menuBtn.textContent = 'Menu'
    menuBtnContainer.innerHTML = '<i class="fa-solid fa-bars"></i>';
    menuBtnContainer.appendChild(menuBtn);

    const contactBtnContainer = document.createElement('div');
    const contactBtn = document.createElement('li')
    contactBtn.textContent = 'Contacts';
    contactBtnContainer.innerHTML = '<i class="fa-solid fa-phone"></i>';
    contactBtnContainer.appendChild(contactBtn);

    tabsList.appendChild(homeBtnContainer)
    tabsList.appendChild(menuBtnContainer)
    tabsList.appendChild(contactBtnContainer)

    return tabsList;
}

websiteFrame()