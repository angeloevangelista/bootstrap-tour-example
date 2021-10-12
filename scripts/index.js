let imageElement = null;

const removeFromPage = (element) =>
  element && element.parentElement.removeChild(element);

function start() {
  imageElement = document.querySelector("#image-container > img");

  if (imageElement) changeImage();
}

async function changeImage() {
  const response = await fetch("https://picsum.photos/600/360");

  if (response.status !== 200) {
    console.error(
      `${new Date().toISOString()}: Error occurred when getting new image.`
    );

    return;
  }

  const data = await response.blob();

  imageElement.classList.remove("zoom-in-out");

  imageElement.src = URL.createObjectURL(data);

  imageElement.classList.add("zoom-in-out");

  setTimeout(changeImage, 1000);
}

document.addEventListener("DOMContentLoaded", start);
