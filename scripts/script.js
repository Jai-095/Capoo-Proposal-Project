function moveButton() {
    const noButton = document.getElementById('noButton');
    const offsetX = Math.random() * (window.innerWidth - 200);
    const offsetY = Math.random() * (window.innerHeight - 100);

    noButton.style.position = 'absolute';
    noButton.style.left = `${offsetX}px`;
    noButton.style.top = `${offsetY}px`;
}
