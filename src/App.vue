<template>
  <header>
    <div class="nav-inner">
      <div class="logo">
        <router-link to="/">
          <img
            alt="Alygn Education logo"
            src="./assets/logo.png"
            class="logo-img"
          >
        </router-link>
      </div>

      <nav>
        <ul>
          <li>
            <router-link to="/">
              What We Do
            </router-link>
          </li>
          <li>
            <router-link to="/">
              Our Work
            </router-link>
          </li>
          <li>
            <router-link to="/cata">
              CATA Framework
            </router-link>
          </li>
          <li>
            <router-link to="/">
              Insights
            </router-link>
          </li>
          <li>
            <router-link to="/about">
              About
            </router-link>
          </li>
        </ul>
      </nav>
      
      <ContactButton />
    </div>
  </header>
  
  <main>
    <router-view />
  </main>
  
  <footer>
    <div class="footer-inner">
      <div>© <span id="year">{{ year }}</span> Alygn Education. All rights reserved.</div>

      <div class="footer-links">
        <router-link to="/">
          Home
        </router-link>
        <router-link to="/">
          What We Do
        </router-link>
        <router-link to="/">
          Our Work
        </router-link>
        <router-link to="/cata">
          CATA Framework
        </router-link>
        <router-link to="/">
          Insights
        </router-link>
        <router-link to="/about">
          About
        </router-link>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<style lang="scss">

/* ------------------------------
    General
   ------------------------------*/
:root {
  --forest: #1E6B30;
  --burgundy: #3A1F24;
  --sage: #8C9E8E;
  --offwhite: #f7f7f5;
  --text: #1f1f1f;
  --muted: #555555;
  --warn: #FFF8E6;
  --warn-text: #7D5A00;
  --error: #F5EDEE;
  --max-width: 1500px;
  --radius: 8px;
  --shadow-soft: 0 8px 20px rgba(0,0,0,0.06);
  --background-green: #e5ebe6;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Montserrat, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: var(--text);
  background: white;
  line-height: 1.6em;
}

a {
  color: var(--forest);
  text-decoration: none;

  &:hover {
    color: var(--burgundy);
  }
}

h1, h2, h3, h4 {
  font-weight: 700;
  color: var(--burgundy);
  margin-bottom: 0.75rem;
  line-height: 1.2em;
}

h1 {
  font-size: clamp(2rem, 3vw, 2.6rem);
}

h2 {
  font-size: 1.5rem;
}

h3 {
  font-size: 1.3rem;
}

h4 {
  font-size: 1.1rem;
}

p {
  margin-bottom: 0.75rem;
  color: var(--muted);
}

/* ------------------------------
    Header
   ------------------------------*/

header {
  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 0;
  z-index: 50;

  .nav-inner {
    max-width: 98%;
    margin: 0 auto;
    padding: 0rem 1.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    .logo {
      display: flex;
      align-items: center;
      gap: 0.6rem;

      .logo-img {
        height: 80px;
        width: auto;
      }
    }

    nav ul {
      list-style: none;
      display: flex;
      gap: 1.25rem;
      font-size: 0.9rem;
    }

    nav a {
      font-weight: 500;
    }
  }
}

// TODO add in new nav for mobile
// @media (max-width: 900px) {
//   nav ul {
//     display: none !important;
//   }
// }

/* ------------------------------
    Main
   ------------------------------*/

main {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.25rem 3rem;

  section {
    margin: 3rem 0;

    .section-label {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      color: var(--sage);
      margin-bottom: 0.4rem;
    }

    .two-col {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1.75rem;
    }

    .two-col-img-first {
      display: grid;
      grid-template-columns: 1fr 3fr;
      gap: 1.75rem;
    }

    .three-col {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1.5rem;
    }

    .card {
      background: white;
      border-radius: var(--radius);
      padding: 1.25rem 1.4rem;
      box-shadow: var(--shadow-soft);
    }

    .pill {
      display: inline-block;
      padding: 0.2rem 0.6rem;
      border-radius: 999px;
      background: rgba(30,107,48,0.08);
      color: var(--forest);
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      margin-bottom: 0.4rem;
    }

    .list-plain {
      list-style: none;
      padding-left: 0;
      margin-top: 0.4rem;

      li {
        font-size: 0.9rem;
        color: var(--muted);
        margin-bottom: 0.3rem;
      }
    }

    .note {
      background-color: var(--warn);
      color: var(--warn-text);
      padding: 0.75rem 1rem;
      border-left:2px solid var(--warn-text);
      font-size: 0.9rem;
    }

    .important {
      background-color: var(--error);
      color: var(--burgundy);
      padding: 0.75rem 1rem;
      border-left:2px solid var(--burgundy);
      font-size: 0.9rem;
    }
  }
}

/* ------------------------------
    Buttons
   ------------------------------*/

.btn-primary,
.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.4rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 2px solid transparent;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  margin: 0 0.5em 0.5em 0.1em;
}

.btn-primary {
  background: white;
  color: var(--forest);
  border-color: var(--forest);

  &:hover {
    background: var(--forest);
    color: white;
  }
}

.btn-secondary {
  background: #ffffff;
  color: var(--burgundy);
  border-color: var(--burgundy);

  &:hover {
    border-color: var(--sage);
    background: var(--sage);
  }
}

/* ------------------------------
    Footer
   ------------------------------*/

footer {
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  padding: 1.5rem 1.25rem 2rem;
  background: white;

  .footer-inner {
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
    font-size: 0.85rem;
    color: var(--muted);

    .footer-links {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }
  }
}
</style>
