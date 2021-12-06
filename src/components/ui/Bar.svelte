<script>
  import { tweened } from "svelte/motion";
  import { linear } from "svelte/easing";

  export let showing;
  export let index;
  export let setScreen;
  export let duration;
  export let paused;

  const progress = tweened(0.2, {
    duration: duration,
    easing: linear,
  });

  let timer;
  let barValue;
  $: barValue = showing > index ? 1 : 0;

  $: if (showing === index && duration && !paused) {
    barValue = $progress;
    progress.set(1.1);
    timer = setTimeout(() => {
      if (showing === index) {
        setScreen(index + 1);
      }
    }, duration);
  } else if (showing > index || (showing === index && !duration)) {
    barValue = 1;
  } else {
    barValue = 0;
    progress.set(0.2);
  }

  $: if (paused) {
    clearTimeout(timer);
  }
</script>

<progress on:click={() => setScreen(index)} value={barValue} class="bar" />

<style lang="scss">
  @use "../../styles/" as *;
  progress {
    appearance: none;
    display: block;
    width: 100%;
    border: 1px solid $green;
    border-radius: 10px;
    height: 6px;
    &::-webkit-progress-bar {
      background-color: $black;
      border-radius: 10px;
    }
    &::-webkit-progress-value {
      background-color: $green;
      border-radius: 10px;
    }
  }
</style>
