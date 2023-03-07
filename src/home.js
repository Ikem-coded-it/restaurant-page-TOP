import background from './images/istockphoto-688602226-612x612.jpg';

export default function createHomePage() {
    const content = document.createElement('div');
    content.classList.add('home-content')

    const welcomeTo = document.createElement('div');
    welcomeTo.classList.add('welcome-to')
    welcomeTo.textContent = 'Welcome to'

    const restaurantName = document.createElement('h1')
    restaurantName.classList.add('restaurant-name')
    restaurantName.textContent = 'Hungryman Chows'

    const slogan = document.createElement('div');
    slogan.classList.add('slogan')
    slogan.textContent = 'Are you a hungry man? Have some chow!'

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container')
    const redBtn = document.createElement('button');
    redBtn.textContent = 'MORE ABOUT US';
    redBtn.classList.add('red-btn')
    const blackBtn = document.createElement('button');
    blackBtn.textContent = 'RESERVE A TABLE!';
    blackBtn.classList.add('black-btn')
    btnContainer.appendChild(redBtn)
    btnContainer.appendChild(blackBtn)

    content.appendChild(welcomeTo)
    content.appendChild(restaurantName)
    content.appendChild(slogan)
    content.appendChild(btnContainer)
     
    return content;
}