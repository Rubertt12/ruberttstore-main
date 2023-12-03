function searchImage() {
  var searchTerm = document.getElementById("searchInput").value.toLowerCase()
  var imageMap = {
    /*  NEO GEO */
    "fatal fury": {
      image: "./assets/fatal fury.png",
      link: "https://exemplo.com/link1",
    },
    "dodge ball": {
      image: "./assets/dodge ball.png",
      link: "https://exemplo.com/link2",
    },
    "samurai shodown": {
      image: "./assets/samurai shodown.png",
      link: "https://exemplo.com/link3",
    },
    /*  PS1 */
    "Crash Bandicoot": {
      image: "./assets/crash.jpeg",
      link: "#",
    },
    "Resident evil 3 ": {
      image: "./assets/resident evil 3.jfif",
      link: "#",
    },
    "Silent hill": {
      image: "./assets/Silent hill.jpg",
      link: "#",
    },
    Yugioh: {
      image: "./assets/yugioh.jpg",
      link: "#",
    },
    /*  PS2 */
    "need for speed 2": {
      image: "./assets/need for speed 2.png",
      link: "https://exemplo.com/link5",
    },

    "Mortal Kombat armagedon": {
      image: "./assets/armagedon.jpg",
      link: "https://exemplo.com/link5",
    },

    "Resident Evil 4": {
      image: "./assets/resident-evil-4.jfif",
      link: "https://exemplo.com/link5",
    },

    "Downhill Domination": {
      image: "./assets/downhill.jpg",
      link: "https://exemplo.com/link5",
    },

    /*  Nintendo */
    "resident evil 2": {
      image: "./assets/resident-evil-2.jpg",
      link: "https://exemplo.com/link4",
    },
    "mortal kombat 3": {
      image: "./assets/mortal kombat 3.jpg",
      link: "https://drive.google.com/file/d/1MUm4sGj0Mq6HNYsb9KWQV8YHa-TbHxgW/view?usp=sharing",
    },

    "Legend of zelda": {
      image: "./assets/zelda.png",
      link: "#",
    },

    DOOM: {
      image: "./assets/doom.jpg",
      link: "#",
    },
  }
  for (var key in imageMap) {
    if (key.toLowerCase().includes(searchTerm)) {
      var modal = document.getElementById("imageModal")
      var modalImage = document.getElementById("modalImage")
      var modalLink = document.getElementById("modalLink")

      var imageSize = "200px"

      modalImage.src = imageMap[key].image
      modalImage.style.width = imageSize
      modalImage.style.height = "auto"
      modalLink.href = imageMap[key].link

      modal.style.display = "block"
      break
    }
  }
}

function closeModal() {
  var modal = document.getElementById("imageModal")
  modal.style.display = "none"
}

// Adiciona um evento de clique ao botão de fechar
var closeButton = document.querySelector(".close-button")
closeButton.addEventListener("click", function (event) {
  event.preventDefault() // Impede o comportamento padrão do link
  event.stopPropagation() // Impede a propagação do evento para o modal
  closeModal()
})

// Adiciona um evento de clique ao modal
var modal = document.getElementById("imageModal")
modal.addEventListener("click", function () {
  closeModal()
})

// Adiciona um evento de rolagem à janela
window.addEventListener("scroll", function () {
  var navbar = document.querySelector("ul")
  navbar.classList.toggle("scrolled", window.scrollY > 0)
})

// Adiciona um evento de pressionar tecla
document.addEventListener("keydown", function (event) {
  // Verifica se a tecla pressionada é "Esc" ou "Espaço"
  if (event.key === "Escape" || event.key === " ") {
    closeModal()
  }
})

function toggleMenu() {
  var navList = document.querySelector("ul")
  var menuIcon = document.querySelector(".menu-icon")

  navList.classList.toggle("active")
  menuIcon.classList.toggle("change")
}

function showInfo(iconName) {
  var infoDiv = document.getElementById("icon-info")
  var iconInfo = ""

  switch (iconName) {
    case "Nintendo 64":
      iconInfo = "Console de videogame lançado pela Nintendo em 1996."
      break
    case "Neo Geo":
      iconInfo = "Console de videogame produzido pela SNK em 1990."
      break
    case "PlayStation":
      iconInfo = "Console de videogame lançado pela Sony em 1994."
      break
    case "PlayStation 2":
      iconInfo = "Console de videogame da Sony lançado em 2000."
      break
  }

  infoDiv.innerHTML = iconInfo
}
