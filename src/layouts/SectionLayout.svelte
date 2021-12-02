<script>
</script>

<section>
  <slot />
</section>

<style lang="scss">
  @use "../styles/" as *;

  section {
    margin: 0;
    background-color: $black;
    min-height: 100vh;
    color: $white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
</style>
