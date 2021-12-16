<script>
  // export let nextScreen;
  let submitted = false;

  function handleSubmit(rating) {
    submitted = true;
    analytics.track("User GaveRating", {
      rating: rating,
    });
  }
</script>

{#if submitted}
  <p class="xl">Thank you! 🙌</p>
{:else}
  <p>That’s how your super powered change this financial year</p>

  <p class="s">Did you like hearing about what your money did?</p>

  <button on:click={() => handleSubmit(3)}>😍</button>
  <button on:click={() => handleSubmit(2)}>😐</button>
  <button on:click={() => handleSubmit(1)}>🙁</button>
{/if}

<style lang="scss">
  @use "../../styles/" as *;

  button {
    font-size: 5vh;
    padding: 2px;
  }
</style>
