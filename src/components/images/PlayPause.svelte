<script>
  export let paused;
</script>

{#if paused}
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M24 9C15.7157 9 9 15.7157 9 24C9 32.2843 15.7157 39 24 39C32.2843 39 39 32.2843 39 24C39 15.7157 32.2843 9 24 9ZM7 24C7 14.6112 14.6112 7 24 7C33.3888 7 41 14.6112 41 24C41 33.3888 33.3888 41 24 41C14.6112 41 7 33.3888 7 24ZM19 16L20.5547 15.1679L32.5547 23.1679V24.8321L20.5547 32.8321L19 32V16ZM21 17.8685V30.1315L30.1972 24L21 17.8685Z"
      fill="#3DFA52"
    />
  </svg>
{:else}
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M24 9C15.7157 9 9 15.7157 9 24C9 32.2843 15.7157 39 24 39C32.2843 39 39 32.2843 39 24C39 15.7157 32.2843 9 24 9ZM7 24C7 14.6112 14.6112 7 24 7C33.3888 7 41 14.6112 41 24C41 33.3888 33.3888 41 24 41C14.6112 41 7 33.3888 7 24Z"
      fill="#3DFA52"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19 30V18H21V30H19Z"
      fill="#3DFA52"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M27 30V18H29V30H27Z"
      fill="#3DFA52"
    />
  </svg>
{/if}
