<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <section>
    <h1>Packages</h1>
    <p class="note">
      <strong>Note: </strong>Fees are agreed based on school size, scope, travel and any additional requirements. Day rate available on request.
    </p>
  </section>
  
  <section>
    <h2>Consultancy Offer</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>What's included</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Free Initial Consultation</td>
          <td>
            <ul>
              <li>Identify needs</li>
              <li>Creating project scope and proposal</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Curriculum Design &amp; Review</td>
          <td>
            <ul>
              <li>Scheme of work development</li>
              <li>Sequencing</li>
              <li>Curriculum review</li>
              <li>Resource creation</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Teaching &amp; Learning CPD</td>
          <td>
            <ul>
              <li>T&L framework design</li>
              <li>Instructional coaching</li>
              <li>CPD</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Timetable Design &amp; Restructure</td>
          <td>
            <ul>
              <li>Contact ratio analysis</li>
              <li>Specialist deployment review</li>
              <li>Budget-based curriculum</li>
              <li>Option block design</li>
              <li>Full timetable build</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Assessment &amp; Data Systems</td>
          <td>
            <ul>
              <li>Data architecture review</li>
              <li>Dashboard design</li>
              <li>Data analysis</li>
              <li>Data literacy training</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Governance Support</td>
          <td>
            <ul>
              <li>Challenge partnership</li>
              <li>Governor data literacy sessions</li>
              <li>Reporting redesign</li>
              <li>Governance cycle review</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>AI Training &amp; Development</td>
          <td>
            <ul>
              <li>Corporate AI training</li>
              <li>Strategic AI deployment</li>
              <li>AI &amp; automation</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </section>

  <section>
    <h2>CATA offer</h2>
    <table>
      <thead>
        <tr>
          <th style="width: 4em;">
            Tier
          </th>
          <th>Name</th>
          <th>What's included</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tier 1</td>
          <td>Audit + Action Plan</td>
          <td>
            <ul>
              <li>Full pre-audit document review</li>
              <li>1–2 day on-site audit across all six domains</li>
              <li>Complete CATA Alignment Report (RAG dashboard, domain findings, breakpoint analysis, action plan, key themes)</li>
              <li>Action planning session with SLT / governing body</li>
              <li>Report in editable format</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Tier 2</td>
          <td>Audit + Implementation Support</td>
          <td>
            <ul>
              <li>Everything in Tier 1, plus:</li>
              <li>Up to 2 follow-on support days (domain of highest priority from action plan)</li>
              <li>Mid-point check-in call (4–6 weeks post-audit)</li>
              <li>Written progress summary at 3 months</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Tier 3</td>
          <td>Audit + Ongoing Partnership</td>
          <td>
            <ul>
              <li>Everything in Tier 2, plus:</li>
              <li>Half-termly support visits (up to 4 days across the year)</li>
              <li>Re-audit at 6 months with updated report</li>
              <li>Priority access for ad hoc calls and advice</li>
              <li>Discounted rate on additional standalone commissions</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>

    <p class="important">
      The audit stands alone. You don’t need to commission follow-on work to get full value from Tier 1. The tiers simply reflect how much hands-on implementation support you want after the report is delivered.
    </p>
  </section>

  <KnowMore />
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
table {
  background-color: var(--background-green);
  border: 1px solid var(--sage);
  border-collapse: collapse;
  margin: 0 auto 1em;
  max-width: 1000px;
  width: 100%;

  th, td {
    border: 1px solid var(--sage);
    padding: 0.25rem 0.5rem;

    ul {
      margin: 0 0 0 1rem;
    }
  }
}
</style>