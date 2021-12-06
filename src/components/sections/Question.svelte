<script>
  import WhiteBox from "../../components/ui/WhiteBox.svelte";

  export let nextScreen;
</script>

<WhiteBox>
  <p class="xs">QUESTION</p>

  <p class="bold">Guess your biggest investment?</p>

  <div>
    <button on:click={nextScreen}>RESMED</button>
    <p class="s">A Healthcare Company</p>
  </div>

  <div>
    <button on:click={nextScreen}>INFRADEBT ETHICAL FUND</button>
    <p class="s">Lends To Renewables Projects</p>
  </div>

  <div>
    <button on:click={nextScreen}>APPLE</button>
    <p class="s">A Big Tech Company</p>
  </div>
</WhiteBox>

<style lang="scss">
  @use "../../styles/" as *;

  div {
    width: 100%;
  }

  button {
    margin-bottom: 1.5vh;
    border-color: $green;
    font-size: $font-size-xs;
    padding-top: 10px;
    &:hover {
      background-color: $green;
    }
  }
</style>
