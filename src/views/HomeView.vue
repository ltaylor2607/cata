<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <section id="home">
    <div class="hero">
      <div>
        <h1>Fixing disconnected systems that hold your people back</h1>
        <p class="hero-sub">
          Book a call for a free 30 minute consultation <ContactButton />
        </p>
      </div>
    </div>
  </section>

  <section>
    <div class="section-label">
      What can we do for you?
    </div>
    <div class="three-col">
      <FlipCard
        front-header="Schools & trusts"
        back-header="We provide"
        summary="If you’re a head, senior leader or trust lead, you’re probably dealing with curriculum intent that doesn’t quite match classroom reality, timetables that quietly undermine your best ideas, and assessment and data systems that generate work without generating insight."
        :list="schoolsList"
        click-message="Click to see our services"
      />
      <FlipCard
        front-header="Independent Training Providers"
        back-header="We provide"
        summary="If you’re running apprenticeships or vocational programmes, you’re juggling standards, funding rules, employer expectations and real learners with real jobs and limited time. You need curriculum and delivery models that work in the real world, not just on paper."
        :list="itpsList"
        click-message="Click to see our services" 
      />
      <FlipCard
        front-header="Individuals & Teams"
        back-header="We provide"
        summary="Sometimes the system is fine and it’s you who needs space to think. I offer focused, practical support for people who want to build capability, confidence or clarity without a full systems project."
        :list="individualsList"
        click-message="Click to see our services"
      />
    </div>
  </section>

  <section>
    <router-link
      to="/cata"
      class="full-width-button"
    >
      <strong>Our Approach: </strong> Curriculum, Assessment, Teaching Alignment Framework
    </router-link>
  </section>

  <section>
    <div class="card">
      <div class="section-label">
        Current partners
      </div>
      <div class="partners">
        <div class="partner">
          <img
            class="partner-img"
            src="../assets/peak.jpg"
            alt="Peak Intelligence Logo"
          >
          <div class="partner-name">
            <strong>Peak Intelligence</strong>
          </div>
          <div class="partner-work">
            Curriculum &amp; apprenticeship design, digital apprenticeship delivery
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ContactButton from '@/components/ContactButton.vue';
import FlipCard from '@/components/FlipCard.vue';

var schoolsList = [
  "Systems alignment",
  "Curriculum and programme design",
  "CPD design and delivery",
  "Timetable design and restructure",
  "Assessment design, data systems and review",
  "AI integration"
];

var itpsList = [
  "Curriculum and programme design",
  "Staff and Leadership development",
  "Assessment and Data systems",
  "Quality assurance",
  "Training and delivery",
  "AI integration"
]

var individualsList = [
  "Coaching and mentoring",
  "Tutoring",
  "CPD in IT and digital skills",
  "AI integration and Training"
]

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

.allignment-card {
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.full-width-button {
  display: block;
  width: 100%;
  background: rgba(30,107,48,0.2);
  color: var(--text);
  padding: 1em;
  text-align: center;
  border: 2px solid var(--sage);
  border-radius: 50px;

  &:hover {
    background: rgba(30,107,48,0.1);
  }
}

.partners {
  .partner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    .partner-img {
      border-radius: 50%;
      max-width: 100px;
    }
  }
}
</style>
