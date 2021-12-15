<script>
  import Note from "./Note.svelte";
</script>

<div class="white-box">
  <slot />
</div>

<!-- <Note /> -->
<style lang="scss">
  @use "../../styles/" as *;

  .white-box {
    background-color: $white;
    color: $black;
    border-radius: 20px;
    padding: 20px;
    height: 56vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;
  }

  @media (max-width: 700px) {
    .white-box {
      height: 46vh;
    }
  }
</style>
