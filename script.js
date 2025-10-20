// Loading Screen Animation
document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen")
  const mainContent = document.getElementById("main-content")

  // Simular carregamento por 3 segundos
  setTimeout(() => {
    loadingScreen.style.opacity = "0"
    loadingScreen.style.transition = "opacity 0.5s ease-out"

    setTimeout(() => {
      loadingScreen.style.display = "none"
      mainContent.classList.remove("hidden")

      // Iniciar animações da página principal
      initializeAnimations()
    }, 500)
  }, 3000)
})

// Inicializar animações e funcionalidades
function initializeAnimations() {
  initMatrixAnimation()

  // Smooth scrolling para links de navegação
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Intersection Observer para animações de scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  }, observerOptions)

  // Observar elementos para animação
  const animatedElements = document.querySelectorAll(".about-card, .event-card, .feature")
  animatedElements.forEach((el) => {
    el.classList.add("fade-in-up")
    observer.observe(el)
  })

  // Animação especial para cards
  const cards = document.querySelectorAll(".registration-card")
  cards.forEach((card) => {
    card.classList.add("scale-in")
    observer.observe(card)
  })

  // Header scroll effect
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header")
    if (window.scrollY > 100) {
      header.style.background = "rgba(0, 0, 0, 0.95)"
    } else {
      header.style.background = "rgba(0, 0, 0, 0.8)"
    }
  })

  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const nav = document.querySelector(".nav")

  if (mobileMenuToggle && nav) {
    mobileMenuToggle.addEventListener("click", () => {
      nav.classList.toggle("active")
    })
  }

  // Animação de contadores (se necessário)
  function animateCounter(element, target, duration = 2000) {
    let start = 0
    const increment = target / (duration / 16)

    function updateCounter() {
      start += increment
      if (start < target) {
        element.textContent = Math.floor(start)
        requestAnimationFrame(updateCounter)
      } else {
        element.textContent = target
      }
    }

    updateCounter()
  }

  // Ativar contadores quando visíveis
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll(".stat-number")
          counters.forEach((counter) => {
            const text = counter.textContent
            const number = Number.parseInt(text.replace(/\D/g, ""))
            if (number && !counter.classList.contains("animated")) {
              counter.classList.add("animated")
              counter.textContent = "0" + text.replace(/\d/g, "")
              animateCounter(counter, number)
            }
          })
        }
      })
    },
    { threshold: 0.5 },
  )

  const statsSection = document.querySelector(".stats-grid")
  if (statsSection) {
    statsObserver.observe(statsSection)
  }

  // Parallax effect para hero background
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const heroBackground = document.querySelector(".hero-bg")
    if (heroBackground) {
      heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`
    }
  })

  // Adicionar efeito de hover nos cards
  const hoverCards = document.querySelectorAll(".about-card, .event-card")
  hoverCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px) scale(1.02)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })

  // Efeito de typing para o título (opcional)
  function typeWriter(element, text, speed = 100) {
    let i = 0
    element.textContent = ""

    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i)
        i++
        setTimeout(type, speed)
      }
    }

    type()
  }

  // Aplicar efeito de typing no título principal (descomente se desejar)
  // const heroTitle = document.querySelector('.hero-title');
  // if (heroTitle) {
  //     typeWriter(heroTitle, 'SETEC', 200);
  // }

  console.log("🚀 SETEC 2025 - Site carregado com sucesso!")
}

function initMatrixAnimation() {
  const canvas = document.getElementById("matrixCanvas")
  if (!canvas) return

  const ctx = canvas.getContext("2d")

  // Set canvas size
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const matrix = "SETEC2025".split("")

  const fontSize = 16
  const columns = canvas.width / fontSize

  // Array of drops - one per column
  const drops = []
  for (let x = 0; x < columns; x++) {
    drops[x] = 1
  }

  // Drawing the characters
  function draw() {
    // Black background with transparency for trail effect
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = "#7c3aed" // Purple text
    ctx.font = fontSize + "px monospace"

    // Loop over drops
    for (let i = 0; i < drops.length; i++) {
      // Random character
      const text = matrix[Math.floor(Math.random() * matrix.length)]
      // Draw the character
      ctx.fillText(text, i * fontSize, drops[i] * fontSize)

      // Reset drop to top randomly after it has crossed the screen
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0
      }

      // Increment Y coordinate
      drops[i]++
    }
  }

  // Start animation
  const matrixInterval = setInterval(draw, 35)

  // Resize canvas on window resize
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  })
}

// Adicionar estilos CSS para mobile menu via JavaScript
const mobileMenuStyles = `
    @media (max-width: 768px) {
        .nav.active {
            display: flex;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.95);
            flex-direction: column;
            padding: 1rem;
            border-top: 1px solid rgba(75, 85, 99, 0.3);
            backdrop-filter: blur(12px);
        }
        
        .nav.active a {
            padding: 0.75rem 0;
            border-bottom: 1px solid rgba(75, 85, 99, 0.2);
            text-align: center;
        }
        
        .nav.active a:last-child {
            border-bottom: none;
        }
        
        .nav.active .btn-primary {
            margin-top: 1rem;
            align-self: center;
        }
    }
`

// Adicionar estilos ao head
const styleSheet = document.createElement("style")
styleSheet.textContent = mobileMenuStyles
document.head.appendChild(styleSheet)

// Função para detectar dispositivo móvel
function isMobile() {
  return window.innerWidth <= 768
}

// Ajustar comportamento baseado no dispositivo
window.addEventListener("resize", () => {
  const nav = document.querySelector(".nav")
  if (!isMobile() && nav) {
    nav.classList.remove("active")
  }
})

// Preloader adicional para imagens (opcional)
function preloadImages() {
  const images = [
    // Adicione aqui URLs de imagens que precisam ser pré-carregadas
  ]

  images.forEach((src) => {
    const img = new Image()
    img.src = src
  })
}

// Executar preload quando necessário
// preloadImages();

// Easter egg - Konami Code
let konamiCode = []
const konamiSequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
]

document.addEventListener("keydown", (e) => {
  konamiCode.push(e.code)

  if (konamiCode.length > konamiSequence.length) {
    konamiCode.shift()
  }

  if (konamiCode.join(",") === konamiSequence.join(",")) {
    // Easter egg ativado!
    document.body.style.filter = "hue-rotate(180deg)"
    setTimeout(() => {
      document.body.style.filter = "none"
    }, 3000)

    console.log("🎉 Easter egg ativado! Parabéns por encontrar o código Konami!")
    konamiCode = []
  }
})
