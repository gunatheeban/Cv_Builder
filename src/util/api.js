import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.cros;

function fetchData(url, params = {}) {
  return axios.get(url, { params }).then((res) => res.data);
}

async function postData(url, params = {}) {
  const res = await axios.post(url, params, {
    responseType: 'arraybuffer', // IMPORTANT for PDF
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/pdf', // Optional but helps some servers
    },
  });
  return res.data;
}

export { fetchData, postData };
