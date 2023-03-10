export default function createContactPage() {
    const contactsContainer = document.createElement('div');
    contactsContainer.classList.add('contacts-container');

    contactsContainer.appendChild(createGithub())
    contactsContainer.appendChild(createTwitter())
    contactsContainer.appendChild(createLinkedin())

    return contactsContainer;
}

function createGithub() {
    const github = document.createElement('div');

    const githubLink = document.createElement('a');
    githubLink.href = "https://github.com/Ikem-Coded-It";

    const githubIcon = document.createElement('i');
    githubIcon.classList.add('fa');
    githubIcon.classList.add('fa-github');

    const message = document.createElement('p');
    message.textContent = 'Check our github repos'

    githubLink.appendChild(githubIcon)
    github.appendChild(message)
    github.appendChild(githubLink)

    return github;
}

function createTwitter() {
    const twitter = document.createElement('div');

    const twitterLink = document.createElement('a');
    twitterLink.href = "https://twitter.com/ikemO06934594?t=uNQ0YeapV_W3Y0ehKeXMIQ&s=09";

    const twitterIcon = document.createElement('i');
    twitterIcon.classList.add('fa-brands');
    twitterIcon.classList.add('fa-twitter');

    const message = document.createElement('p');
    message.textContent = 'Check our twitter page'

    twitterLink.appendChild(twitterIcon)
    twitter.appendChild(message)
    twitter.appendChild(twitterLink)

    return twitter;
}

function createLinkedin() {
    const linkedin = document.createElement('div');

    const linkedinLink = document.createElement('a');
    linkedinLink.href = "https://www.linkedin.com/in/ikemefuna-onubogu-84914323a";

    const linkedinIcon = document.createElement('i');
    linkedinIcon.classList.add('fa-brands');
    linkedinIcon.classList.add('fa-linkedin');

    const message = document.createElement('p');
    message.textContent = "Here's our linkedin"

    linkedinLink.appendChild(linkedinIcon)
    linkedin.appendChild(message)
    linkedin.appendChild(linkedinLink)

    return linkedin;
}