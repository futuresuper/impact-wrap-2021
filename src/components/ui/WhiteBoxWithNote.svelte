<div class="white-box">
  <slot />
</div>
<div class="note">
  <p class="s">
    We’ll provide a link at the end if you’d like to read more on this
    investment
  </p>
</div>

<style lang="scss">
  @use "../../styles/" as *;

  .white-box {
    background-color: $white;
    color: $black;
    border-radius: 20px;
    padding: 20px;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .note {
    border: 1px solid $green;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 20px;
    p {
      margin: 0;
    }
  }
</style>
