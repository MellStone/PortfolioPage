const works = [
    {
        img: ["Resourses/character.png", "Resourses/Core.png", "Resourses/Chest.png", "Resourses/Hands.png", "Resourses/Forearms.png", "Resourses/Head.png", "Resourses/Leg.png", "Resourses/Rat.png"],
        title: "SCS: Secret Cleaning Service",
        description: `<p>Internship at Rubens Games with organic modeling for Unity-based projects.</p>
                    <p>For five months, I interned at Rubens Games, where my primary task was creating organic objects for a Unity-based project.</p>
                    <p>One of my most notable accomplishments during the internship was the complete creation of the game’s main character. I handled the entire process:</p>
                     <ul>
                            <li>Designed the character concept, defining its visual style and details </li>
                            <li>Developed a high-poly and optimized 3D model </li>
                            <li>Textured the model using modern techniques </li>
                            <li>Prepared the character for animation (rigging and skinning) </li>
                            <li>Created animations for integration into the gameplay</li>
                     </ul>
                     <p>This experience deepened my understanding of the full 3D character development pipeline, the integration of game assets into Unity,
                      and honed my teamwork and adaptability skills in a professional game studio environment.</p>`
    },
    {
        img: ["Resourses/this.png", "Resourses/queen_black.png", "Resourses/queen_white.png", "Resourses/queen_hp.png", "Resourses/slon_blackwhite.png",
            "Resourses/wieza_black.png", "Resourses/wieza_white.png", "Resourses/wieza_polycount.png", "Resourses/wieza_uvs.png", "Resourses/wieza_hp.png",],
        title: "Chesspeare",
        description: `<p> Chesspeare is an academic project created during the second year of my university studies.
                        I worked as a 3D character artist and was responsible for the full development cycle of five characters.</p>
                       <p>My work included:</p>
                        <ul>
                            <li> Creating character concepts, focusing on their visual style and unique traits</li>
                            <li> Developing high-poly and optimized 3D models</li>
                            <li> Texturing using modern techniques (e.g., PBR)</li>
                            <li> Preparing characters for animation (rigging and skinning)</li>
                            <li> Crafting animations for gameplay</li>
                        </ul>
                        <p> This project allowed me to strengthen my skills in the full 3D production pipeline, collaborate within a team, and adapt to academic requirements.
                        "Chesspeare" combines the strategic essence of chess with the captivating aesthetics of the Renaissance era, making the experience both engaging and diverse.</p>`
    },
    {
        img: ["Resourses/Portrait.0001.png", "Resourses/mellst0ne-portrait-0000.jpg", "Resourses/mellst0ne-details-0000.jpg", "Resourses/mellst0ne-details-0003.jpg", "Resourses/mellst0ne-details-0004.jpg",
            "Resourses/mellst0ne-mayapolycount.jpg", "Resourses/mellst0ne-mayauvs.jpg"],
        title: "Neo Tokyo: Exponential Reality",
        description: `<p>This project has been one of the most time consuming and longest I have ever done.
        I had to redesign it from zero, and many times I had to start creating parts of it from over again because I was not satisfied with the previous ones. I encountered difficulties at almost every stage.
            In addition, I also wanted to comply with all the requirements of the contest (in which I participated but something went wrong) Neo Tokyo: Exponential Reality,
            i.e. to fit everything into two texture sets of 4k size, maximum number of polygons 100k and that it would be rendered in real-time rendering. </p>`},
];

let currentIndex = 0;
let currentImageIndex = 0;

const modal = document.getElementById('work-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
// Открытие модального окна
function openModal(index) {
    currentIndex = index;
    currentImageIndex = 0;
    updateModalContent();
    modal.style.display = 'flex';
}
// Обработчики для пролистывания изображений
document.getElementById('prev-image').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + works[currentIndex].img.length) % works[currentIndex].img.length;
    updateModalContent();
});

document.getElementById('next-image').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % works[currentIndex].img.length;
    updateModalContent();
});
document.querySelector('.close').addEventListener('click', () => {
    const modal = document.getElementById('work-modal');
    modal.classList.remove('open');
    setTimeout(() => modal.style.display = 'none', 300);
});
// Обработчики для пролистывания изображений
document.querySelector('.prev').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + works[currentIndex].img.length) % works[currentIndex].img.length;
    updateModalContent();
});

document.querySelector('.next').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % works[currentIndex].img.length;
    updateModalContent();
});
document.querySelectorAll('.gallery-item').forEach((item, index) => {
    item.addEventListener('click', () => openModal(index));
});

function updateModalContent() {
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    
    modalImage.src = works[currentIndex].img;
    modalTitle.textContent = works[currentIndex].title;
    
    modalDescription.innerHTML = works[currentIndex].description;

    modalImage.src = works[currentIndex].img[currentImageIndex];
}

document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + works.length) % works.length;
    updateModalContent();
});

document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % works.length;
    updateModalContent();
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('work-modal').style.display = 'none';
});
