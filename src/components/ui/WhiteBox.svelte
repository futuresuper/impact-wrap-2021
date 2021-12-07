<div>
  <slot />
</div>

<style lang="scss">
  @use "../../styles/" as *;

  div {
    background-color: $white;
    color: $black;
    border-radius: $radius;
    padding: 20px;
    min-height: 56vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
</style>
