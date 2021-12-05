<script>
  import WhiteBox from "../../components/ui/WhiteBox.svelte";
</script>

<WhiteBox>
  <p class="xs">QUESTION</p>

  <p>Guess your biggest investment?</p>

  <div>
    <button>RESMED</button>
    <p class="s">A Healthcare Company</p>
  </div>

  <div>
    <button>INFRADEBT ETHICAL FUND</button>
    <p class="s">Lends To Renewables Projects</p>
  </div>

  <div>
    <button>APPLE</button>
    <p class="s">A Big Tech Company</p>
  </div>
</WhiteBox>

<style lang="scss">
  @use "../../styles/" as *;

  button {
    width: 100%;
    margin-bottom: 1.5vh;
    border-color: $green;
    &:hover {
      background-color: $green;
    }
  }
</style>
