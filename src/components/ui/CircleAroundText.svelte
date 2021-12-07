<script>
  export let heading = "";
  export let text = "";
  export let buttonText = "";
  export let buttonUrl = "#";
  export let textColour = "white";
</script>

<div class="container circle-container">
  <slot />
  <div class="text-in-middle">
    {#if heading}
      <h2
        class={heading.length > 12 ? "smaller" : ""}
        style="color: {textColour}"
      >
        {@html heading}
      </h2>
    {/if}
    {#if text}
      <p style="color: {textColour}">{@html text}</p>
    {/if}
    {#if buttonText}
      <a href={buttonUrl} class="button">{buttonText}</a>
    {/if}
  </div>
</div>

<style lang="scss">
  @use "../../styles/" as *;

  .circle-container {
    width: 40vh;
    max-width: 100%;
    margin-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;

    .text-in-middle {
      position: absolute;
      text-align: center;
      max-width: 400px;
    }
  }

  h2 {
    font-size: $font-size-l;
  }

  h2.smaller {
    font-size: $font-size-m;
  }

  @media (max-width: 600px) {
    .circle-container {
      width: 34vh;
    }
  }
</style>
