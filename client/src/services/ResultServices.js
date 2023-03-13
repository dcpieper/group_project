const baseURL = "http://localhost:9000/api/results";

export const getResults = () => {
  return fetch(baseURL).then((res) => res.json());
};

export const postResult = (payload) => {
  return fetch(baseURL, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    res.json();
  });
};
