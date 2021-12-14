<script>
  export let user;
  let rank;

  $: if (user.rank) {
    let str = user.rank.toLocaleString().toString();
    let lastNum = str[str.length - 1];
    if (lastNum === "1") {
      rank = str + "st";
    } else if (lastNum === "2") {
      rank = str + "nd";
    } else if (lastNum === "3") {
      rank = str + "rd";
    } else {
      rank = str + "th";
    }
  }
</script>

<div class="container">
  <div class="top">
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
        d="M19.04 10V13H29.0195V10H31.0195V13H36L37 14V36L36 37H12L11 36V14L12 13H17.04V10H19.04ZM29.0195 15V18H31.0195V15H35V21.02H13V15H17.04V18H19.04V15H29.0195ZM13 23.02V35H35V23.02H13Z"
        fill="#3DFA52"
      />
    </svg>

    <p class="s">You joined in {user.joined}</p>
  </div>

  <svg
    class="graph"
    viewBox="0 0 375 193"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 191.5L54.5 155.252L134.5 139.983L206.5 82.8908L251.5 72.9328L308 49.0336L376.5 4.5"
      stroke="#3DFA52"
      stroke-width="2"
    />
    <circle cx="188" cy="97" r="24" fill="white" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M188 35.669L193.246 29.6436L194.754 30.9568L187.754 38.9968H186.246L179.246 30.9568L180.754 29.6436L186 35.6685V9H188V35.669Z"
      fill="#3DFA52"
    />
  </svg>

  <div class="bottom">
    <p class="m">
      You were the <span class="bold">{rank}</span> person to join
    </p>
  </div>
</div>

<style lang="scss">
  @use "../../styles/" as *;

  .container {
    border: 1px solid $green;
    border-radius: 20px;
  }

  .top,
  .bottom {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .number {
    font-size: 4vh;
    margin-bottom: 6px;
    margin-top: -10px;
  }

  @media (max-width: 440px) {
    .container {
      border: 0;
      width: 100%;
      margin: 0 -20px;
    }

    .graph {
      margin: 0 -20px;
    }
  }
</style>
