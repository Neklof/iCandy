const URL = "http://localhost/icandy/API/getMonto.php";

const getMonto = async (data) => {
  const response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const responseJSON = await response.json();

  return responseJSON;
};

export default getMonto;
