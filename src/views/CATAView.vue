<template>
  <section>
    <div class="section-label">
      CATA Framework
    </div>
    <h1>CATA: A Framework for Building High-Performing Teams</h1>
    <p>CATA is the diagnostic backbone of Alygn Education. It gives you a structured way to see where your systems are working together — and where they’re quietly working against each other. Most organisations don’t have a quality problem; they have an alignment problem.</p>
  </section>

  <section>
    <div class="two-col">
      <div class="card">
        <span class="section-label">What CATA is</span>
        <h2>Six domains, one alignment question.</h2>
        <p>CATA looks at six domains that shape the experience of learners and staff:</p>
        <ul class="list-plain">
          <li>Curriculum</li>
          <li>Teaching &amp; Learning</li>
          <li>Assessment</li>
          <li>Data &amp; Analytics</li>
          <li>Timetable</li>
          <li>Governance</li>
        </ul>
        <p>The core idea is simple: it’s not just the quality of each domain that matters — it’s the quality of alignment between them. Misalignment is where workload, confusion and inconsistency creep in.</p>
      </div>

      <div class="card">
        <span class="section-label">Why alignment matters</span>
        <h2>Good people can’t fix bad systems.</h2>
        <p>When curriculum says one thing, assessment measures another, data reports something else and the timetable quietly undermines everything, even the best staff end up firefighting.</p>
        <p>CATA exposes the hidden breakpoints so you can fix the system, not the symptoms.</p>
      </div>
    </div>
  </section>

  <section>
    <div class="section-label">
      How it works
    </div>
    <h2>The CATA Audit Process</h2>
        
    <div
      class="two-col"
      style="margin-top:1.5rem;"
    >
      <div class="card">
        <span class="pill">1. Pre-audit</span>
        <h3>Scoping and document review</h3>
        <p>A short scoping call to understand your context, followed by a review of key documents:</p>
        <ul class="list-plain">
          <li>Curriculum plans</li>
          <li>Timetables</li>
          <li>Assessment policies</li>
          <li>Data reports</li>
          <li>Governance papers</li>
        </ul>
      </div>

      <div class="card">
        <span class="pill">2. Audit</span>
        <h3>Interviews, evidence and scoring</h3>
        <p>Conversations with leaders and staff, review of systems and documentation, and scoring across all domains.</p>
        <p>The focus is on alignment — where systems support each other, and where they quietly pull in different directions.</p>
      </div>
    </div>

    <div
      class="two-col"
      style="margin-top:1.5rem;"
    >
      <div class="card">
        <span class="pill">3. Reporting</span>
        <h3>Your alignment map</h3>
        <p>You receive a full alignment report including:</p>
        <ul class="list-plain">
          <li>Domain scores and narrative</li>
          <li>Cross-domain breakpoints</li>
          <li>Key themes and risks</li>
          <li>A sequenced action plan</li>
        </ul>
        <p>It’s clear, honest and practical — no jargon, no padding.</p>
      </div>

      <div class="card">
        <span class="pill">4. Follow-up</span>
        <h3>Turning insight into action</h3>
        <p>We walk through the report together and agree what you’ll tackle first. Some organisations take it from there; others ask for support with curriculum, timetable, assessment or AI work.</p>
        <p>Either way, you leave with clarity.</p>
      </div>
    </div>
  </section>

  <section>
    <div class="card">
      <span class="section-label">Sample report</span>
      <h2>See what this looks like in practice</h2>
      <p>The sample report shows how each domain is scored, where misalignment is doing the most damage, what’s working well and should be protected, and a realistic set of next steps. Please note that this report is fictitious.</p>
      <SimpleCarousel
        :images="reportPages"
        max-height="550px"
      />
    </div>
  </section>
  <KnowMore />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const reportPages = ref([
    {img: new URL("@/assets/Report pg 1.png", import.meta.url).href, alt: "Report page 1. Shows the front page of the report for Thornfield Academy, a fictional school."},
    {img: new URL("@/assets/Report pg 2.png", import.meta.url).href, alt: "Report page 2. Shows an overview of the CATA audit and how it works."},
    {img: new URL("@/assets/Report pg 3.png", import.meta.url).href, alt: "Report page 3. Shows an overview of the school's alignment and priority actions."},
    {img: new URL("@/assets/Report pg 4.png", import.meta.url).href, alt: "Report page 4. Shows the audit dashboard."},
    {img: new URL("@/assets/Report pg 5.png", import.meta.url).href, alt: "Report page 5. Shows a more detailed breakdown of the assessment for Curriculum, Teaching and Learning, and Assessment."},
    {img: new URL("@/assets/Report pg 6.png", import.meta.url).href, alt: "Report page 6. Shows a more detailed breakdown of the assessment for Data Systems, Timetable and Governance."},
    {img: new URL("@/assets/Report pg 7.png", import.meta.url).href, alt: "Report page 7. Shows the breakpoints."},
    {img: new URL("@/assets/Report pg 8.png", import.meta.url).href, alt: "Report page 8. Shows the suggested action plan for improving alignment."},
    {img: new URL("@/assets/Report pg 9.png", import.meta.url).href, alt: "Report page 9. Shows key themes and next steps."},
]);
</script>

<style scoped lang="scss">

</style>