import abacha from './images/abacha.jpeg';
import egusi from './images/egusi.jpeg';
import friedrice from './images/friedrice.jpeg';
import indomie from './images/indomie.png';
import jollofrice from './images/jollofrice.jpg';
import ogbono from './images/ogbono.jpeg';
import peppersoup from './images/peppersoup.jpeg';
import peppersoup2 from './images/peppersoup2.jpeg';

let imageImports = [abacha, egusi, friedrice, indomie, jollofrice, ogbono, peppersoup, peppersoup2];
let images = []

export default function createMenuPage() {
    const content = document.createElement('div');
    content.classList.add('menu-content');
    
    imageImports.forEach(img => {
        const foodPic = new Image()
        foodPic.src = img;
        images.push(foodPic)
    })

    images.forEach(img => {
        const foodContainer = document.createElement('div')
        foodContainer.classList.add('food-container')
        foodContainer.appendChild(img)

        const foodName = document.createElement('div');
        foodName.textContent = `Menu Item`;
        foodContainer.appendChild(foodName)

        content.appendChild(foodContainer);
    })

    images = [];

    return content
}