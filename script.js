// TYPING EFFECT

const text =
    "You are not just my Friend... You are one of the most precious people in my life. Always keep smiling and keep shining! ❤️";

let i = 0;

function typeText() {

    if (document.getElementById("typing") && i < text.length) {

        document.getElementById("typing").innerHTML += text[i];

        i++;

        setTimeout(typeText, 40);
    }
}

typeText();


// OPEN SECOND PAGE

function openLetter() {
    window.location.href = "surprise.html";
}


// PHOTO REVEAL

function revealPhoto(box) {

    if (box.classList.contains("reveal"))
        return;

    box.classList.add("reveal");

    createHearts(20);
}


// MAIL EFFECT

function openMail() {

    const poem = document.getElementById("poem");

    if (poem) {

        poem.style.transform = "scale(1.08)";

        setTimeout(() => {
            poem.style.transform = "scale(1)";
        }, 500);

    }

    createHearts(15);
}


// HEART EFFECT

function createHearts(count) {

    for (let i = 0; i < count; i++) {

        let heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "%";
        heart.style.bottom = "0";
        heart.style.fontSize = "20px";
        heart.style.zIndex = "100";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.style.transition = "4s";

            heart.style.transform =
                "translateY(-100vh) rotate(360deg)";

            heart.style.opacity = "0";

        }, 100);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}