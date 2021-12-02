<script>
  import Logo from "../images/Logo.svelte";
  import BCorpLogo from "../images/BCorpLogo.svelte";
  import pages from "../../data/pages.json";
  import SocialFacebook from "../images/SocialFacebook.svelte";
  import SocialInsta from "../images/SocialInsta.svelte";
  import SocialLinkedIn from "../images/SocialLinkedIn.svelte";
</script>

<footer>
  <div class="footer-container">
    <div class="container">
      <div class="horizontal-space-between">
        <p class="disclaimer">
          You should read the <a href="https://www.futuresuper.com.au/pds"
            >PDS,</a
          > <a href="https://www.futuresuper.com.au/tmd">TMD</a> and
          <a href="https://www.futuresuper.com.au/fsg"
            >Financial Services Guide</a
          >
          before making any financial decisions regarding Future Super. Information
          provided is of a general nature only and we have not taken your personal
          financial objectives, situation or needs into account. We recommend you
          seek financial advice when considering if Future Super is right for your
          objectives and needs. When considering returns, past performance is not
          indicative of future performance.
        </p>
        <div class="bcorp">
          <BCorpLogo />
        </div>
      </div>
      <div class="horizontal-space-between legal-stuff">
        <p class="disc legal-links">
          <a href="/fund-information">Fund Information</a>
          <span class="dot">&nbsp;&nbsp;•&nbsp;&nbsp;</span>
          <a href="/terms-and-conditions">Terms & Conditions</a>
          <span class="dot">&nbsp;&nbsp;•&nbsp;&nbsp;</span>
          <a href="/privacy-policy">Privacy Policy</a>
          <span class="dot">&nbsp;&nbsp;•&nbsp;&nbsp;</span>
          <a href="/complaints">Complaints</a>
        </p>
        <div class="disc abn">
          <p>
            <span class="bold">ABN</span> ‍45 ‍960 ‍194 ‍277
            <span class="dot">&nbsp;&nbsp;</span>
          </p>
          <p><span class="bold">USI</span>‍ 45 ‍960 ‍194 ‍277 ‍010</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="acknowledgement">
        <div class="flags">
          <img
            src="/images/aboriginal-flag.png"
            alt="Aboriginal Flag"
            loading="lazy"
          />
          <img
            src="/images/tsi-flag.png"
            alt="Torres Strait Islander Flag"
            loading="lazy"
          />
        </div>
        <div class="footer-text">
          <p class="disc fs-acknowledgement">
            Future Super acknowledges the Traditional Custodians of the lands on
            which we operate and pay our respects to Elders, past, present and
            emerging. We recognise the enduring relationship Aboriginal and
            Torres Strait Islander peoples have with Country and that
            sovereignty was never ceded. We stand for a future that promotes
            justice for Aboriginal and Torres Strait Islander peoples and
            profoundly respects and acknowledges their respective perspectives,
            culture, language and history.
          </p>
        </div>
        <a class="button secondary" href="/reconciliation">
          Reconciliation
          <svg
            class="arrow"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.7929 6H8V5H19L19.5 5.5V16.5H18.5V6.70708L5.35353 19.8536L4.64642 19.1464L17.7929 6Z"
              fill="#3DFA52"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</footer>

<style lang="scss">
  @use "../../styles/" as *;

  footer {
    margin-top: 80px;
    border-radius: 32px 32px 0 0;
    background-color: $black;
    color: $white;
  }

  .footer-container {
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .logo-and-social-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;
  }

  .social-icons {
    a {
      margin-left: 10px;
    }
  }

  .menu {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    margin-top: 70px;
  }

  .pageGroup {
    margin-bottom: 30px;

    h5 {
      margin-top: 0;
      margin-bottom: 16px;
      font-size: 16px;
    }

    hr {
      margin-bottom: 20px;
    }

    a {
      display: block;
      color: $white;
      text-decoration: none;
      font-size: 14px;
      margin-bottom: 12px;
      line-height: 130%;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .bcorp {
    width: 48px;
  }

  .acknowledgement {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .flags {
    display: flex;
    flex-direction: column;
    align-items: center;

    > * {
      margin-bottom: 6px;
    }
  }

  .horizontal-space-between {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .legal-stuff {
    margin-top: 20px;
  }

  .disclaimer {
    width: 40%;
    color: $black500;
    a {
      &:hover {
        color: $white;
      }
    }
  }

  .disc {
    width: calc(50% - 10px);
    font-size: 12px;
    & > * {
      display: inline-block;
    }
    &.abn {
      text-align: right;
    }
    &.fs-acknowledgement {
      margin: 40px 0;
      line-height: 140%;
    }
  }

  .legal-links {
    a {
      color: $white;
      text-decoration: none;
      &:hover {
        color: $white;
        text-decoration: underline;
      }
    }
  }

  .arrow {
    margin-left: 10px;
  }

  .marquee {
    margin: 50px -40px 20px -40px;
    color: $green;
    font-size: 20px;
    height: 40px;
    white-space: nowrap;
    overflow: hidden;
    animation: marquee 80s linear infinite;
  }

  @keyframes marquee {
    0% {
      text-indent: 0px;
    }
    100% {
      text-indent: -2000px;
    }
  }

  @media (max-width: 760px) {
    .menu {
      grid-template-columns: repeat(2, 1fr);
    }

    .disclaimer {
      width: calc(50% - 10px);
    }

    .disc {
      width: 100%;
      .dot {
        display: none;
      }
      &.abn {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        p {
          margin: 0 0 4px 0;
        }
      }
      &.legal-links {
        display: flex;
        flex-direction: column;
        > * {
          margin-bottom: 4px;
        }
      }
    }
  }

  @media (max-width: 500px) {
    .menu {
      grid-template-columns: 100%;
    }

    .disclaimer {
      width: 70%;
    }
  }
</style>
