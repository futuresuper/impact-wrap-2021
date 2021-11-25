<script>
  const clientSide = !import.meta.env.SSR;

  const cid = "90aaedd7-7329-4ac5-bfa9-6dd586300c2f";

  // const url = "https://api.fsstaging.com.au/api/auth-user";
  const url = "https://api.fsstaging.com.au/api/members/045972";

  if (clientSide) {
    getData(url);
  }

  async function getData(url = "") {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://api.futuresuper.local",
        cid: cid,
      },
      credentials: "include",
    });
    console.log(response);
  }
</script>

<div>Hello world</div>
