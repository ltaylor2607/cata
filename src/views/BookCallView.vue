<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <section>
    <div class="section-label">
      Contact
    </div>
    <h1>Let's talk about what isn't quite working</h1>
    <p>Most of our work starts with a conversation about an idea, a frustration or a pattern someone recognises in their own organisation. If something here resonates, get in touch using the form below or email us directly.</p>
  </section>

  <section>
    <div class="card">
      <form
        @submit.prevent="handleSubmit"
      >
        <div class="form-section">
          <label
            for="name"
            class="form-label"
          >Name <span class="char-count">{{ form.name.length }}/50</span></label>
          <input
            id="name"
            v-model="form.name"
            name="name"
            type="text"
            required
            class="form-input"
            maxlength="50"
          >
        </div>
        <div class="form-section">
          <label
            for="email"
            class="form-label"
          >Email<span class="char-count">{{ form.email.length }}/100</span></label>
          <input
            id="email"
            v-model="form.email"
            name="email"
            type="email"
            required
            class="form-input"
            maxlength="100"
          >
        </div>
        <div class="form-section">
          <label
            for="role"
            class="form-label"
          >Role <span class="char-count">{{ form.role.length }}/50</span></label>
          <input
            id="role"
            v-model="form.role"
            name="role"
            type="text"
            class="form-input"
            maxlength="50"
          >
        </div>
        <div class="form-section">
          <label
            class="form-label"
            for="organisation"
          >Organisation <span class="char-count">{{ form.organisation.length }}/100</span></label>
          <input
            id="organisation"
            v-model="form.organisation"
            name="organisation"
            type="text"
            class="form-input"
            maxlength="100"
          >
        </div>
        <div class="form-section">
          <label
            for="interest"
            class="form-label"
          >What are you interested in?</label>
          <select
            id="interest"
            v-model="form.interest"
            name="interest"
            class="form-input"
          >
            <option value="">
              Select an option
            </option>
            <option>CATA audit</option>
            <option>Systems alignment</option>
            <option>Curriculum / programme design</option>
            <option>AI &amp; digital training</option>
            <option>Coaching / mentoring / tutoring</option>
            <option>Something else</option>
          </select>
        </div>
        <div class="form-section">
          <label class="form-label">Details<span class="char-count">{{ form.message.length }}/2000</span></label>
          <textarea
            id="message"
            v-model="form.message"
            class="form-input"
            name="message"
            rows="4"
            maxlength="2000"
          />
        </div>
        <button
          type="submit"
          class="btn-primary"
        >
          Send message
        </button>
        <div
          v-if="isSubmitting"
          class="success"
        >
          Submitting....
        </div>
        <div
          v-if="successMessage"
          class="success"
        >
          Thank you for contacting us. We will aim to get back to you within 48 hours.
        </div>
        <div
          v-if="errorMessage"
          class="important"
        >
          An unexpected error occurred. Please try again or email me directly at: <a href="mailto:g.taylor@alygneducation.co.uk">g.taylor@alygneducation.co.uk</a>
        </div>
        <div
          v-if="!isValid"
          class="note"
        >
          One or more of the fields is not valid. Please ensure that the email is correct, and that name, role, and organisation contain only letters.
        </div>
        <p
          class="subtle"
          style="margin-top:0.5rem;"
        >
          Or email directly: <a href="mailto:g.taylor@alygneducation.co.uk">g.taylor@alygneducation.co.uk</a>
        </p>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, inject, computed } from 'vue';

var validator = inject("validator");
var isSubmitting = ref(false);
var form = ref({
  name: '',
  email: '',
  role: '',
  organisation: '',
  interest: '',
  message: ''
});
var formRef = ref(import.meta.env.VITE_FORM);
var successMessage = ref(false);
var errorMessage = ref(false);

var isValid = computed(() => {
  return (validator.isEmail(form.value.email) || (validator.isEmpty(form.value.email)))
  && (validator.isAlpha(form.value.name) || (validator.isEmpty(form.value.name)))
  && (validator.isAlpha(form.value.role) || validator.isEmpty(form.value.role))
  && (validator.isAlpha(form.value.organisation) || validator.isEmpty(form.value.organisation));
});

var handleSubmit = async () => {
  isSubmitting.value = true;
  successMessage.value = false;
  errorMessage.value = false;

  if (!isValid.value) {
    isSubmitting.value = false;
  }

  try {
    const formData = new FormData();
    formData.append('name', validator.escape(form.value.name.trim()));
    formData.append('email', validator.normalizeEmail(validator.escape(form.value.email.trim()), {all_lowercase: false, gmail_remove_subaddress: false, outlookdotcom_remove_subaddress: false, yahoo_remove_subaddress: false, icloud_remove_subaddress: false}));
    formData.append('role', validator.escape(form.value.role.trim()));
    formData.append('organisation', validator.escape(form.value.organisation.trim()));
    formData.append('interest', form.value.interest);
    formData.append('message', validator.escape(form.value.message.trim()));
    

    const response = await fetch(`https://formspree.io/f/${formRef.value}`, {
      method: "POST",
      body: formData,
      headers: {
        "Accept": "application/json",
      },
    });

    if (response.ok) {
      form.value = {
        name: "",
        email: "",
        role: "",
        organisation: "",
        interest: "",
        message: "",
      };
      successMessage.value = true;
    } else {
      console.error("Form submission failed: ", response.status);
      const serverErrors = (await response.json()).errors;
      serverErrors.forEach((error: { field: string; message: string; }) => {
        console.error(error.field + " " + error.message);
      });
      errorMessage.value = true;
    }
  } catch (error) {
    console.error("Submission error: ", error);
    errorMessage.value = true;
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped lang="scss">
.card {
  max-width: 600px;
  margin: 0 auto;
}

.form-section {
  margin-bottom: 0.75rem;

  .form-label {
    display: flex;
    font-size: 0.85rem;
    margin-bottom: 0.2rem;
    width: 100%;
  }

  .form-input {
    width: 100%;
    padding: 0.5rem 0.6rem;
    border-radius: 6px;
    border: 1px solid var(--sage);
    font-size: 0.9rem;
  }

  .char-count {
    display: inline-block;
    width: 100%;
    font-size: 0.8em;
    color: var(--sage);
    text-align: end;
  }
}
</style>