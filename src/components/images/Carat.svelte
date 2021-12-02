<script>
  export let colour = "#212121";
  export let direction = "right";
</script>

<svg
  class={direction}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8.28777 2L6 4.35556L13.4245 12L6 19.6444L8.28777 22L18 12L8.28777 2Z"
    fill={colour}
  />
</svg>

<style lang="scss">
  svg {
    width: 100%;
    &.down {
      transform: rotate(90deg);
    }
    &.left {
      transform: rotate(180deg);
    }
    &.up {
      transform: rotate(-90deg);
    }
  }
</style>
