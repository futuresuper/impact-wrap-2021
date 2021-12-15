<script>
  import WhiteBox from "../../components/ui/WhiteBox.svelte";

  export let nextScreen;
  export let option;
  export let options;
  let invName = "ARTESIAN FUND"; // RPG

  if (option === options.RPG) {
    invName = "INFRADEBT ETHICAL FUND";
  }
</script>

<WhiteBox>
  <div>
    <p class="xs question">QUESTION</p>

    <p class="bold">Guess your biggest investment?</p>
  </div>

  <div>
    <button on:click={nextScreen}>RESMED</button>
    <p class="s">A Healthcare Company</p>
  </div>

  <div>
    <button on:click={nextScreen}>{invName}</button>
    <p class="s">Lends To Renewables Projects</p>
  </div>

  <div>
    <button on:click={nextScreen}>APPLE</button>
    <p class="s">A Big Tech Company</p>
  </div>
</WhiteBox>

<style lang="scss">
  @use "../../styles/" as *;

  .question {
    margin-bottom: 4px;
  }

  div {
    width: 100%;
    max-width: 500px;
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
