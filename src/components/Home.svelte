<script>
  import Sections from "./Sections.svelte";

  const clientSide = !import.meta.env.SSR;

  const cid = "90aaedd7-7329-4ac5-bfa9-6dd586300c2f";

  const url1 = "https://api.fsstaging.com.au/api/auth-user";
  const url2 = "https://api.fsstaging.com.au/api/members/045972";

  if (clientSide) {
    getData(url1);
    getData(url2);
  }

  async function getData(url = "") {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://api.fsstaging.com.au",
        cid: cid,
      },
      credentials: "include",
    });
    console.log(response);
  }
</script>

<Sections />
