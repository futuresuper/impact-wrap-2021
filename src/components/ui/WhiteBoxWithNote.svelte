<script>
  import Note from "./Note.svelte";
</script>

<div class="white-box">
  <slot />
</div>
<Note />

<style lang="scss">
  @use "../../styles/" as *;

  .white-box {
    background-color: $white;
    color: $black;
    border-radius: 20px;
    padding: 20px;
    height: 58vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
  }
</style>
