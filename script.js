/* Reset e Base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
  background: #000;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.hidden {
  display: none !important;
}

/* Loading Screen */
.loading-screen {
  position: fixed;
  inset: 0;
  background: linear-gradient(135deg, #1e3a8a 0%, #7c3aed 50%, #1e40af 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loading-content {
  text-align: center;
}

.loading-logo {
  margin-bottom: 2rem;
  animation: logoAnimation 1s ease-out;
}

.logo-circle {
  width: 96px;
  height: 96px;
  margin: 0 auto;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.logo-text {
  font-size: 3rem;
  font-weight: bold;
  color: #1e3a8a;
}

.loading-title {
  font-size: 4rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
  animation: fadeInUp 0.8s ease-out 0.5s both;
}

.loading-subtitle {
  font-size: 1.5rem;
  color: #bfdbfe;
  margin-bottom: 2rem;
  animation: fadeInUp 0.8s ease-out 0.8s both;
}

.loading-bar-container {
  width: 256px;
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 9999px;
  margin: 0 auto 1.5rem;
  overflow: hidden;
  animation: fadeInUp 0.8s ease-out 1s both;
}

.loading-bar {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #60a5fa, #a855f7);
  border-radius: 9999px;
  animation: loadingProgress 2s ease-in-out 1s both;
  transform: translateX(-100%);
}

.loading-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  animation: fadeInUp 0.8s ease-out 1.5s both;
}

.dot {
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
  animation: dotPulse 1s infinite;
}

.dot:nth-child(2) {
  animation-delay: 0.2s;
}

.dot:nth-child(3) {
  animation-delay: 0.4s;
}

/* Header */
.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(75, 85, 99, 0.3);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.header-logo {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 0.875rem;
}

.logo-text-section {
  display: flex;
  flex-direction: column;
}

.college-name {
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
}

.event-name {
  color: #9ca3af;
  font-size: 0.75rem;
}

.nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav a {
  color: #d1d5db;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav a:hover {
  color: white;
}

.mobile-menu-toggle {
  display: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

/* Buttons */
.btn-primary {
  background: #06b6d4;
  color: #000;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary:hover {
  background: #0891b2;
  transform: translateY(-2px);
}

.btn-primary.large {
  padding: 1rem 2rem;
  font-size: 1.125rem;
}

.btn-primary.extra-large {
  padding: 1.5rem 3rem;
  font-size: 1.25rem;
  font-weight: bold;
}

.btn-outline {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background: white;
  color: #000;
}

.btn-outline.large {
  padding: 1rem 2rem;
  font-size: 1.125rem;
}

.btn-form {
  background: white;
  color: #000;
  border: none;
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
}

.btn-form:hover {
  background: #f3f4f6;
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #7c3aed 0%, #374151 50%, #000 100%);
}

.hero-bg::before {
  content: "";
  position: absolute;
  top: 80px;
  left: 80px;
  width: 256px;
  height: 256px;
  background: #7c3aed;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.2;
}

.hero-bg::after {
  content: "";
  position: absolute;
  bottom: 80px;
  right: 80px;
  width: 384px;
  height: 384px;
  background: #3b82f6;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.2;
}

.hero-content {
  text-align: center;
  max-width: 1024px;
  position: relative;
  z-index: 10;
  animation: fadeInUp 1s ease-out 0.5s both;
}

.badge {
  display: inline-block;
  background: rgba(147, 51, 234, 0.3);
  color: #c4b5fd;
  border: 1px solid rgba(147, 51, 234, 0.5);
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(4px);
}

.hero-title {
  font-size: clamp(4rem, 12vw, 9rem);
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
  line-height: 1;
  letter-spacing: -0.05em;
}

.hero-subtitle h2 {
  font-size: clamp(1.5rem, 4vw, 3rem);
  color: #d1d5db;
  font-weight: 300;
  margin-bottom: 0.5rem;
}

.hero-subtitle h3 {
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: bold;
  background: linear-gradient(90deg, #06b6d4, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #d1d5db;
  margin-bottom: 3rem;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin-bottom: 3rem;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
}

.scroll-mouse {
  width: 24px;
  height: 40px;
  border: 2px solid #9ca3af;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding-top: 8px;
}

.scroll-wheel {
  width: 4px;
  height: 12px;
  background: #9ca3af;
  border-radius: 2px;
}

/* About Section */
.about-section {
  padding: 5rem 0;
  background: #000;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: bold;
  background: linear-gradient(90deg, #06b6d4, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
}

.section-header p {
  font-size: 1.25rem;
  color: #9ca3af;
  max-width: 768px;
  margin: 0 auto;
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1536px;
  margin: 0 auto;
}

.about-card {
  background: rgba(17, 24, 39, 0.5);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(75, 85, 99, 0.3);
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.about-card:hover {
  border-color: rgba(147, 51, 234, 0.5);
  transform: translateY(-4px);
}

.about-card.mission:hover {
  border-color: rgba(147, 51, 234, 0.5);
}

.about-card.ai:hover {
  border-color: rgba(6, 182, 212, 0.5);
}

.about-card.development:hover {
  border-color: rgba(59, 130, 246, 0.5);
}

.about-card.innovation:hover {
  border-color: rgba
