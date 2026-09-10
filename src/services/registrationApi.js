const API_URL =
  import.meta.env
    .VITE_GOOGLE_SCRIPT_URL;


export async function registerCandidate(
  name
) {

  const response =
    await fetch(
      API_URL,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "text/plain;charset=utf-8"
        },

        body: JSON.stringify({
          name: name
        })
      }
    );


  if (!response.ok) {
    throw new Error(
      "Registration failed."
    );
  }


  return response.json();
}