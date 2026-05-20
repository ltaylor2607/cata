<template>
  <section id="home">
    <div class="hero">
      <div>
        <h1>Helping schools and organisations fix the system-level problems that occur when systems aren't aligned.</h1>
        <p class="hero-sub">
          Alygn Education helps schools, trusts, training providers and companies diagnose misalignment, see what it’s really costing them, and build a clear, sequenced plan for what to fix first.
        </p>

        <div class="hero-ctas">
          <router-link to="/" class="btn-primary">Book a call</router-link>
          <router-link to="/cata" class="btn-secondary">What is CATA?</router-link>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div>
      <span class="section-label">The problem</span>
      <h2>Most people in education are not failing. The systems around them are.</h2>
      <p>
        When curriculum says one thing, the timetable does another, assessment measures something else and data drives the wrong decisions, you get <span class="emphasis">overloaded staff</span>
        , <span class="emphasis">confused learners</span> and <span class="emphasis">leaders drowning in noise instead of direction</span>. The best people in the room end up carrying the weight of that misalignment without ever being able to name it.
      </p>
    </div>
  </section>

  <section>
    <div class="two-col">
      <div>
        <div class="section-label">The solution</div>
        <h2>Make your systems work together</h2>
        <p>
          Alygn Education exists to do one thing well: make your systems work together. That means diagnosing misalignment with the CATA Alignment Framework, redesigning curriculum, assessment, timetable and data so they pull in the same direction, and building AI and digital capability in a way that’s practical, safe and actually used.
        </p>
        <p>
          You get fewer, better‑connected priorities and a clear order of operations for what to fix first.
        </p>
      </div>
    </div>
  </section>

  <section>
    <div>
      <div class="section-label">Three strands of work</div>
      <div class="three-col">
        <div class="card">
          <h3>Schools &amp; Trusts</h3>
          <ul>
            <li>Systems alignment</li>
            <li>Curriculum and programme design</li>
            <li>CPD design and delivery</li>
            <li>Timetable design and restructure</li>
            <li>Assessment design, data systems and review</li>
            <li>AI integration</li>
          </ul>
        </div>
        <div class="card">
          <h3>Independent Training Providers</h3>
          <ul>
            <li>Corporate training</li>
            <li>Content and course design</li>
            <li>Leadership development</li>
          </ul>
        </div>

        <div class="card">
          <h3>Individuals &amp; Teams</h3>
          <ul>
            <li>Coaching and mentoring for senior and middle leaders</li>
            <li>Tutoring for students and apprentices</li>
            <li>CPD in IT and digital skills</li>
            <li>Programme and qualification support  across a range of sectors</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="section-label">Current partners</div>
    <h2>Work grounded in real programmes and real learners</h2>
    <p>
      I’m currently working with organisations across curriculum, apprenticeship and delivery work. These partnerships keep the work honest: if it doesn’t stand up in real delivery, it doesn’t go on the website.
    </p>

    <div class="partners">
      <div class="partner-tag"><strong>Peak Intelligence -</strong> curriculum &amp; apprenticeship design, digital apprenticeship delivery</div>
      <div class="partner-tag"><strong>UK Skills Academy -</strong> curriculum, corporate &amp; apprenticeship training</div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.hero {
  margin-bottom: 2rem;
  text-align: center;
  background: rgba(30,107,48,0.08);
  padding: 2em;
}

.emphasis {
  color: var(--forest);
  font-weight: bold;
}
</style>
