<template>
  <div class="carousel">
    <button
      class="btn-primary"
      @click="prev"
    >
      &lt;
    </button>
    <div
      ref="inner"
      class="inner"
      :style="innerStyles"
    >
      <div
        v-for="(image, i) in images"
        :key="i"
        class="card"
      >
        <img
          :style="{ maxHeight }"
          :src="image?.img"
          :alt="image?.alt"
        >
      </div>
    </div>
    <button
      class="btn-primary"
      @click="next"
    >
      &gt;
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, toRefs } from 'vue';

const props = defineProps({
  images: {
    type: Array as () => {img: string, alt: string}[],
    default: () => []
  },
  maxHeight: {
    type: String,
    default: "300px"
  }
});

const {images, maxHeight} = toRefs(props);
const innerStyles = ref({});
const step = ref("");
const inner = ref(null);
const transitioning = ref(false);

var setStep = () => {
    const innerWidth = inner.value?.scrollWidth;
    const totalImages = images.value.length;
    step.value =`${innerWidth / totalImages}px`;
}

var moveLeft = () => {
    innerStyles.value = {
        transform: `translateX(-${step.value})`
    }
}

var moveRight = () => {
    innerStyles.value = {
        transform: `translateX(${step.value})`
    };
}

var next = () => {
    if (transitioning.value) return;
    transitioning.value = true;
    moveLeft();
    afterTransition(() => {
        const image = images.value.shift();
        images.value.push(image!);
        resetTranslate();
        transitioning.value = false;
    })
}

var prev = () => {
    if (transitioning.value) return;
    transitioning.value = true;
    moveRight();
    afterTransition(() => {
        const image = images.value.pop();
        images.value.unshift(image!);
        resetTranslate();
        transitioning.value = false;
    })
}

var afterTransition = (callback: () => void) => {
    console.log("called afterTransition");
    const listener = () => {
        callback()
        inner.value?.removeEventListener('transitionend', listener)
    }
    inner.value?.addEventListener('transitionend', listener)
}

var resetTranslate = () => {
    innerStyles.value = {
        transition: "none",
        transform: `translateX(0)`
    }
}

onMounted(() => {
    setStep();
    window.addEventListener("resize", setStep);
    resetTranslate();
});
</script>

<style scoped lang="scss">
.carousel {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.inner {
    width: 100%;
    overflow-x: hidden;
    white-space: nowrap;
    transition: transform 0.2s;
    max-height: 700px;
}

.card {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    max-height: 100%;
}

</style>