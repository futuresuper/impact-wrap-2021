<script>
  export let nextScreen;
</script>

<p>That’s how your super powered change this financial year</p>

<p class="s">Did you like hearing about what your money did?</p>

<button on:click={nextScreen}>😍</button>
<button on:click={nextScreen}>😐</button>
<button on:click={nextScreen}>🙁</button>

<style lang="scss">
  @use "../../styles/" as *;

  button {
    font-size: 5vh;
    padding: 2px;
  }
</style>
