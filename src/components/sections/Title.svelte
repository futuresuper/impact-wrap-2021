<script>
  import CircleAroundText from "../ui/CircleAroundText.svelte";
  import ImpactWrapCircle from "../images/ImpactWrapCircle.svelte";

  export let name = "Name";
  export let getStarted;
  let music = true;
</script>

<CircleAroundText heading={name.toUpperCase()} textColour="#00F724">
  <ImpactWrapCircle />
</CircleAroundText>

<div class="bottom">
  <p class="m">Let's look at what your money did this year</p>

  <button on:click={() => getStarted(music)}> Let's Go → </button>

  <div class="music" on:click={() => (music = !music)}>
    Sound

    {#if music}
      <div class="toggle-container on">
        <div class="dot on" />
      </div>
    {:else}
      <div class="toggle-container off">
        <div class="dot off" />
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  @use "../../styles/" as *;

  p {
    margin-bottom: 20px;
  }

  button {
    background-color: $black;
    border-color: $green;
    max-width: 400px;

    &:hover {
      background-color: $green;
      color: $black;
    }
  }

  .bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .music {
    --height: 20px;
    width: 400px;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: 20px;
    .toggle-container {
      width: 40px;
      height: var(--height);
      border: 2px solid $black500;
      border-radius: 10px;
      margin-left: 10px;
      display: flex;
      justify-content: flex-start;
      &.on {
        justify-content: flex-end;
      }
      .dot {
        width: 16px;
        height: 16px;
        background-color: $black500;
        border-radius: 50%;
        &.on {
          background-color: $green;
        }
      }
    }
  }
</style>
