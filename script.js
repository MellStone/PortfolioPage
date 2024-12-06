const works = [
    {
        img: "character.png",
        title: "SCS: Secret Cleaning Service",
        description: `<p>Internship at Rubens Games with organic modeling for Unity-based projects.</p>
                    <p>For five months, I interned at **Rubens Games**, where my primary task was creating organic objects for a Unity-based project.</p>
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
        img: "this.png",
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
        img: "Portrait.0001.png",
        title: "Neo Tokyo: Exponential Reality",
        description: `<p>Contest entry with strict asset limitations and real-time rendering.</p>`
    }
];

let currentIndex = 0;

function openModal(index) {
    currentIndex = index;
    updateModalContent();
    document.getElementById('work-modal').style.display = 'flex';
}

function updateModalContent() {
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    modalImage.src = works[currentIndex].img;
    modalTitle.textContent = works[currentIndex].title;
    modalDescription.innerHTML = works[currentIndex].description;
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
