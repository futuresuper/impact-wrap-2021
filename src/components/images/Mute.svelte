<script>
  export let musicMuted;
</script>

{#if musicMuted}
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
      d="M27 28.4141L39.293 40.7071L40.7072 39.2929L29.4143 28H31V20H29V27.5857L27 25.5857V12L25.4855 11.1425L17.4051 15.9908L8.70718 7.29289L7.29297 8.70711L15.5859 17H10L9 18V30L10 31H15.723L25.4855 36.8575L27 36V28.4141ZM25 23.5857V13.7662L18.8628 17.4485L25 23.5857ZM17.095 18.5092L25 26.4141V34.2338L16.5145 29.1425L16 29H11V19H16L16.5145 18.8575L17.095 18.5092Z"
      fill="#3DFA52"
    />
    <path d="M33 18V30H35V18H33Z" fill="#3DFA52" />
    <path d="M37 32V16H39V32H37Z" fill="#3DFA52" />
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
      d="M25 13.7662L16.5145 18.8575L16 19H11V29H16L16.5145 29.1425L25 34.2338V13.7662ZM15.723 17L25.4855 11.1425L27 12V36L25.4855 36.8575L15.723 31H10L9 30V18L10 17H15.723Z"
      fill="#3DFA52"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M29 28V20H31V28H29Z"
      fill="#3DFA52"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M33 30V18H35V30H33Z"
      fill="#3DFA52"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M37 32V16H39V32H37Z"
      fill="#3DFA52"
    />
  </svg>
{/if}
