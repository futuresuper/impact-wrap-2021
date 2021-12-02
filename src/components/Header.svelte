<script>
  export let screens = [];
  export let setScreen;
  export let showing = 1;
</script>

<div class="container">
  <div class="text">
    <p class="xs">YOUR IMPACT RECAP</p>
    <p class="xs">{showing + 1}/{screens.length}</p>
  </div>
  <div
    class="bars"
    style="grid-template-columns: repeat({screens.length}, 1fr)"
  >
    {#each screens as screen, i}
      <div class="bar" on:click={setScreen(i)} />
    {/each}
  </div>
</div>

<style lang="scss">
  @use "../styles/" as *;

  .container {
    padding: 4vh 20px 0 20px;
    // display: flex;
    // align-items: flex-end;
  }

  .text {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    p {
      margin: 0 0 6px 0;
    }
  }

  .bars {
    display: grid;
    grid-gap: 1vw;
  }

  .bar {
    width: 100%;
    height: 6px;
    border: 1px solid $green;
    border-radius: 10px;
  }
</style>
