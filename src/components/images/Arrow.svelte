<script>
  export let colour = "#212121";
  export let direction = "bottom-left";
</script>

<svg
  class={direction}
  viewBox="0 0 94 94"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M24.3113 72.4583L62.6667 72.4583L62.6667 76.375L19.5833 76.375L17.625 74.4167L17.625 31.3333L21.5417 31.3333L21.5417 69.6889L73.032 18.1986L75.8015 20.9681L24.3113 72.4583Z"
    fill={colour}
  />
</svg>

<style lang="scss">
  svg {
    width: 100%;
    max-width: 200px;
    &.down {
      transform: rotate(-45deg);
    }
    &.left {
      transform: rotate(45deg);
    }
    &.up {
      transform: rotate(135deg);
    }
    &.right {
      transform: rotate(-135deg);
    }
    &.top-right {
      transform: rotate(180deg);
    }
    &.top-left {
      transform: rotate(90deg);
    }
    &.bottom-right {
      transform: rotate(-90deg);
    }
  }
</style>
