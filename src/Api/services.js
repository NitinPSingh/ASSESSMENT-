export async function postApi(uri, body) {
    try {
      let res = await fetch(uri, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
  
      if (res.ok) {
        res = await res.text();
        return {
          message: "",
          success: true,
          data: JSON.parse(res),
        };
      }
    } catch (er) {
     
      return {
        message: "Something went wrong on client side.",
        success: false,
      };
    }
  }