<script>
  export let option;
  export let options;
  let percent = false;

  $: if (option === options.RPG) {
    percent = 54;
  } else if (option === options.BI) {
    percent = 32;
  }
  $: console.log(option);
</script>

<p class="m">
  Your super was in {option}
  {option === options.RPG
    ? ", which aims to achieve high financial growth and positive environmental impact."
    : "."}
</p>

<img src="/images/Earth.gif" alt="3D rotating earth" />

{#if percent}
  <div>
    <p class="m">{percent}% of members also chose this option</p>
    <p class="disclaimer">AS AT 30 JUNE 2021</p>
  </div>
{/if}

<style lang="scss">
  @use "../../styles/" as *;

  img {
    max-width: 50vw;
  }
</style>
