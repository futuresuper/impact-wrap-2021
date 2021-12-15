<script>
  import Sections from "./Sections.svelte";

  const clientSide = !import.meta.env.SSR;

  // const cid = "90aaedd7-7329-4ac5-bfa9-6dd586300c2f";
  const cid = "9519a419-4af8-418c-8d6b-d3acfcb20743";

  const url1 = "https://api.futuresuper.com.au/api/auth-user";
  const url2 = "https://api.futuresuper.com.au/api/members/";
  const url3 =
    "https://67l8qspd50.execute-api.ap-southeast-2.amazonaws.com/prod/rank?member=";

  let user;
  let loading = true;
  let loggedIn = false;
  let userDetails;
  let member;
  let name;
  let option;
  let rank;
  let joined;

  if (clientSide) {
    console.log("17");
    getUserDetails();
  }

  async function getUserDetails() {
    let response = await getData(url1);
    member = response.user_id;

    if (member) {
      userDetails = await getData(url2 + member);
      console.log(userDetails);
      name = userDetails.contact.first_name;
      console.log(name);
      option =
        invIdToOption[
          userDetails.accounts[0].investments[0].investment_option_id
        ];
      console.log(option);
      let dateInfo = await getData2(url3 + parseInt(member));
      rank = dateInfo.rank;
      console.log(rank);
      joined = dateInfo.joined;
      console.log(joined);
    }

    if (!userDetails) {
      loggedIn = false;
      loading = false;
    }
  }

  async function getData(url = "") {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://api.futuresuper.com.au",
        cid: cid,
      },
      credentials: "include",
    });
    return response.json();
  }

  async function getData2(url = "") {
    const response = await fetch(url);
    return response.json();
  }

  const options = {
    RPG: "Renewables Plus Growth",
    BI: "Balanced Impact",
    PENSION: "Balanced Growth Pension",
  };
  const invIdToOption = {
    "11": options.RPG,
  };

  $: if (userDetails) {
    option = invIdToOption[userDetails.accounts[0].investment_option_id];
  }

  $: if (name || option || rank || joined) {
    user = {
      name,
      option,
      rank,
      joined,
    };
  }

  $: console.log(user);
</script>

<div class="container">
  <Sections {user} {options} />
</div>

<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
</style>
