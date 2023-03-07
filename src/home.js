import background from './images/istockphoto-688602226-612x612.jpg';

export default function createHomePage() {
    const content = document.createElement('div');
    content.classList.add('home-content')

    const welcomeTo = document.createElement('div');
    welcomeTo.classList.add('welcome-to')
    welcomeTo.textContent = 'Welcome to'

    const restaurantName = document.createElement('h1')
    restaurantName.textContent = 'Hungryman Chows'

    const slogan = document.createElement('div');
    slogan.textContent = 'Are you a hungry man? Have some chow!'

    const btnContainer = document.createElement('div');
    const redBtn = document.createElement('button');
    const blackBtn = document.createElement('button');
    btnContainer.appendChild(redBtn)
    btnContainer.appendChild(blackBtn)

    content.appendChild(welcomeTo)
    content.appendChild(restaurantName)
    content.appendChild(slogan)
    content.appendChild(btnContainer)
     
    return content;
}