<template>
  <div
    class="card"
    :class="{'flipped': !unflipped}"
    @click.prevent="flipCard"
  >
    <div class="card-inner">
      <div class="front">
        <h2 class="header-large">
          {{ frontHeader }}
        </h2>
        <p>{{ summary }}</p>
        <p class="subtle">
          {{ clickMessage }}
        </p>
      </div>
      <div class="back"> 
        <h2 class="header-large">
          {{ backHeader }}
        </h2>       
        <ul>
          <li
            v-for="(item, i) in list"
            :key="i"
          >
            {{ item }}
          </li>
        </ul>
        <p class="subtle">
          {{ clickMessageBack }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue';

var props = defineProps({
  frontHeader: {
    type: String,
  },
  backHeader: {
    type: String,
  },
  summary: {
    type: String,
  },
  list: {
    type: Object,
  },
  clickMessage: {
    type: String,
  },
  clickMessageBack: {
    type: String,
  }
});

var {frontHeader, backHeader, summary, list, clickMessage} = toRefs(props);

var unflipped = ref(true);

var flipCard = () => {
  unflipped.value = !unflipped.value;
}

</script>

<style scoped lang="scss">
.card {
  height: auto;
  cursor: pointer;
  perspective: 1000px;
  &:hover {
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  }
}

.card-inner {
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.flipped .card-inner {
  transform: rotateY(180deg);
  .front {
    display: none;
  }

  .back {
    display: block;
  }
}

.front, .back {
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
}

.back {
  transform: rotateY(180deg);
  top: 0;
  position: relative;
  display: none;
  ul {
    margin-left: 1.5em;
  }
}
</style>