async function summarize() {
  const input = document.querySelector("input").value;
  const result = document.getElementById("result");

  if (input.trim() === "") {
    result.innerText = "Please ask a plant related question 🌱";
    return;
  }

  result.innerText = "Botanist is thinking... 🌿";

  const API_KEY = "";
  
  try {
    const response = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are a botanist. Answer ONLY if it is related to plants, trees, agriculture, or environment and its uses. Use simple student-friendly language."
          },
          {
            role: "user",
            content: input
          }
        ],
        max_tokens: 150
      })
    });

    const data = await response.json();

    if (!data.choices || !data.choices[0]) {
      result.innerText = "Botanist  is thinking... 🌿";
      return;
    }

    result.innerText = data.choices[0].message.content;

  } catch (error) {
    console.error(error);
    result.innerText = "Something went wrong 🌧️";
  }
}
