function moveImage(event, wrapper) {
    const imageLine = wrapper.querySelector('.img-line');
    const rect = wrapper.getBoundingClientRect();

    const x = (event.clientX - rect.left - rect.width / 2) / 1.5;
    const y = (event.clientY - rect.top - rect.height / 2) / 1.5;

    imageLine.style.transition = 'transform 0.5s ease-out';
    imageLine.style.transform = `translate(${x}px, ${y}px) scale(1)`;
}

function delayedResetImage(event, element) {
    setTimeout(function () {
        resetImage(event, element);
    }, 500);
}

function resetImage(event, wrapper) {
    const imageLine = wrapper.querySelector('.img-line');

    imageLine.style.transition = 'transform 3s ease-out';
    imageLine.style.transform = 'translate(0, 0) scale(1)';
}

const textElement = document.querySelector('.hollow-text');
const contentElement = document.querySelector('.content');
const imageElements = document.querySelectorAll('.image-wrapper');

function activateAllImages() {
    textElement.classList.add('filled')
    imageElements.forEach((image) => {
        image.classList.add('image-wrapper-active');
    });
}

function deactivateAllImages() {
    textElement.classList.remove('filled')
    imageElements.forEach((image) => {
        image.classList.remove('image-wrapper-active');
    });
}

let isHoveringImage = false;

imageElements.forEach((image) => {
    image.addEventListener('pointerenter', () => {
        isHoveringImage = true;
        deactivateAllImages();
    });

    image.addEventListener('pointerleave', () => {
        isHoveringImage = false;

        setTimeout(() => {
            if (!isHoveringImage) {
                activateAllImages();
            }
        }, 10);
    });
});

activateAllImages();
contentElement.addEventListener('pointerleave', activateAllImages)
