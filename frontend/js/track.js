function track() {
  const appNo = document.getElementById("appNo").value;
  const dob = document.getElementById("dob").value;

  fetch(`http://localhost:3000/api/track?application=${appNo}&dob=${dob}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("result").innerText =
        `Status: ${data.status}, Office: ${data.office}`;
    })
    .catch(() => {
      document.getElementById("result").innerText = "Not found";
    });
}

