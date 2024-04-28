

document.addEventListener('DOMContentLoaded', function() {

    const homeButton = document.getElementById('homeButton');
    const portfolioButton = document.getElementById('portfolioButton');
    const aboutButton = document.getElementById('aboutButton');
    const contactButton = document.getElementById('contactButton');
    const homeSection = document.getElementById('home');
    const portfolioSection = document.getElementById('portfolio');
    const aboutSection = document.getElementById('about');
    const contactSection = document.getElementById('contact');


    homeButton.addEventListener('click', function() {

        homeSection.scrollIntoView({ behavior: 'smooth' });
    });

    portfolioButton.addEventListener('click', function() {

        portfolioSection.scrollIntoView({ behavior: 'smooth' });
    });

    aboutButton.addEventListener('click', function() {

        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });

    contactButton.addEventListener('click', function() {

        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});


document.querySelector('header h1').textContent = "WebWizards Studios";


const homeSection = document.getElementById('home');
const portfolioSection = document.getElementById('portfolio');
const aboutSection = document.getElementById('about');
const contactSection = document.getElementById('contact');
const commentsSection = document.getElementById('comments');


homeSection.innerHTML = `
            <h2>Welcome!</h2>
         <p>WebWizards Studios is a web development agency specializing in creating visually stunning and responsive websites for clients worldwide.</p>
     <img src="/images/image.png" alt="Açıklama yazınız">
     
`;

portfolioSection.innerHTML = `
    <h2>Portfolio</h2>
    <div class="portfolio-gallery">
        
        </div>
        
    </div>
`;
aboutSection.innerHTML = `
    <h2>About Us</h2>
    <p>Welcome to WebWizards Studios, where creativity meets technology to craft extraordinary digital experiences. Established in [year], we have been at the forefront of innovation, providing cutting-edge solutions that empower businesses to thrive in the digital landscape.

At WebWizards, we believe in the power of imagination to transform ideas into reality. Our team of passionate designers, developers, and strategists works tirelessly to bring your vision to life, leveraging the latest technologies and industry best practices.

We take pride in our commitment to excellence, delivering tailored solutions that exceed expectations and drive results. Whether you're a startup looking to make your mark or an established enterprise seeking to elevate your online presence, we are here to guide you every step of the way.

Our services encompass a wide range of digital solutions, including web design, mobile app development, e-commerce solutions, digital marketing, and more. Whatever your needs may be, we have the expertise and creativity to turn your goals into achievements.

At WebWizards Studios, innovation is at the core of everything we do. We are constantly exploring new horizons and pushing boundaries to deliver unparalleled experiences that captivate audiences and drive growth.

Join us on this journey as we continue to shape the future of digital innovation. Together, let's create magic in the digital world.</p>
`;

contactSection.innerHTML = `
    <h2>Contact Us</h2>
    <div class="contact-info">
        <span class="contact-icon">&#9742;</span>
        <p>Phone: (+996) 995 285 894</p>
        <span class="contact-icon">&#9993;</span>
        <p>Mail: akifcan.duman@iaau.edu.kg</p>
        <span class="contact-icon">&#128204;</span>
        <p>Address: Elebaeva 7, Kyrgyzstan, Bishkek</p>
    </div>
`;


const commentSection = document.getElementById('comments');
commentSection.parentNode.appendChild(contactSection);
commentsSection.innerHTML = `

    <h2>User Comment</h2>
    <div class="comment">
        <h3>John Doe</h3>
        <p>"Great experience! I was very pleased with the service provided by WebWizards Studios. They do their job meticulously and the results are truly impressive. Thanks!"</p>
    </div>
    <div class="comment">
        <h3>Jane Smith</h3>
        <p>"The services offered by WebWizards Studios are truly outstanding! I can say that they are experts in web design and mobile application development. I definitely recommend it!"</p>
    </div>
    <div class="comment">
        <h3>Michael Johnson</h3>
        <p>"Working with WebWizards Studios was great! They offer a professional team and highly creative solutions. They love their job and really care about customer satisfaction."</p>
    </div>
    <form id="commentForm">
      <input type="text" id="nameInput" placeholder="Name" required>
      <label for="commentInput"></label><textarea id="commentInput" placeholder="Comment" required></textarea>
      <button type="submit">Comment</button>
    </form>
    <div id="commentList"></div>
`;
homeSection.classList.add('section-text');
portfolioSection.classList.add('section-text');
aboutSection.classList.add('section-text');
contactSection.classList.add('section-text');
commentsSection.classList.add('section-text');

const imageNames = ['resim1.png', 'resim2.png'];
function loadPortfolioImages() {
    const portfolioGallery = document.querySelector('.portfolio-gallery');
    imageNames.forEach((imageName, index) => {
        const imageCard = document.createElement('div');
        imageCard.classList.add('portfolio-card');
        const image = document.createElement('img');
        image.src = `images/${imageName}`;
        image.alt = `Resim ${index + 1}`;
        const description = document.createElement('p');
        description.textContent = `Açıklama ${index + 1}`;
        imageCard.appendChild(image);
        imageCard.appendChild(description);
        portfolioGallery.appendChild(imageCard);
    });
}

loadPortfolioImages();


let currentImageIndex = 0;


let portfolioContent = `<h2>Portfolio</h2>
                        <div class="portfolio-gallery">
                            <div id="portfolioImageContainer"></div>
                        </div>
                        <div class="portfolio-navigation">
                            <button id="prevButton">Previous</button>
                            <button id="nextButton">Next</button>
                        </div>`;


portfolioSection.innerHTML = portfolioContent;


function showImage(index) {
    const imageContainer = document.getElementById('portfolioImageContainer');
    const imageName = imageNames[index];
    const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `;


    const imageHTML = `<div class="portfolio-card">
                          <img src="images/${imageName}" alt="${description}">
                          <p>${description}</p>
                          <p> </p>
                      </div>`;


    imageContainer.innerHTML = imageHTML;
}


showImage(currentImageIndex);


function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + imageNames.length) % imageNames.length;
    showImage(currentImageIndex);
}


function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % imageNames.length;
    showImage(currentImageIndex);
}


const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);

const commentDivs = document.querySelectorAll('.comment');
commentDivs.forEach(comment => {
    comment.style.backgroundColor = 'black';
});


export { homeSection, portfolioSection, aboutSection, contactSection, commentsSection };
export default class App {
}