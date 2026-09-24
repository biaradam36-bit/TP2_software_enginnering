const wrongDoor = document.getElementById("wrongDoor");

if (wrongDoor) {

    wrongDoor.addEventListener("click", function () {

        wrongDoor.classList.remove("shake");

        void wrongDoor.offsetWidth;

        wrongDoor.classList.add("shake");

        wrongDoor.classList.toggle("active");

    });
}


const exitDoor = document.getElementById("exitDoor");

if (exitDoor) {

    exitDoor.addEventListener("click", function () {

        exitDoor.classList.add("unlock");

    });
}