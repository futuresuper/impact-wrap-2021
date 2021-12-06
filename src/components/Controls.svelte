<script>
  import Back from "../components/images/Back.svelte";
  import PlayPause from "./images/PlayPause.svelte";
  import Mute from "../components/images/Mute.svelte";
  import Restart from "../components/images/Restart.svelte";

  export let togglePaused;
  export let toggleMute;
  export let goBack;
  export let showing;
  export let musicMuted;
  export let paused;
  export let last;
  export let restart;
</script>

<div class="controls">
  {#if showing !== 0}
    <div on:click={goBack}>
      <Back />
    </div>
    <div on:click={toggleMute}>
      <Mute {musicMuted} />
    </div>
    {#if last}
      <div on:click={restart}>
        <Restart />
      </div>
    {:else}
      <div on:click={togglePaused}>
        <PlayPause {paused} />
      </div>
    {/if}
  {/if}
</div>

<style lang="scss">
  @use "../styles/" as *;

  .controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
