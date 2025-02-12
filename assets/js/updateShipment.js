// window.onload = ()=>{
//     // alert('hello')
//     let user = localStorage.getItem('usr');
//     if(!user) location.href = '/';
//      localStorage.clear();
// }

window.onload = () => {
  const pathname = window.location.pathname;
  const id = pathname.split("/").pop();

  fetch(`/getdata/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Convert response to JSON
    })
    .then((data) => {
      if (!data) {
        throw new Error("No data received");
      }

      document.getElementById("sender_name").value = data.sender_name || "";
      document.getElementById("receiver_name").value = data.receiver_name || "";
      document.getElementById("package_name").value = data.package_name || "";
      document.getElementById("location").value = data.location || "";
      document.getElementById("date").value = data.date || "";
      document.getElementById("status").value = data.status || "";
      // document.getElementById("tracking_number").value = data.tracking_number || "";
    })
    .catch((err) => console.error("Error fetching data:", err));
};

const updateRecords = async (e) => {
  e.preventDefault();

  const pathname = window.location.pathname;
  const id = pathname.split("/").pop();

  const sender_name = document.getElementById("sender_name").value;
  const receiver_name = document.getElementById("receiver_name").value;
  const package_name = document.getElementById("package_name").value;
  const location = document.getElementById("location").value;
  const date = document.getElementById("date").value;
  const status = document.getElementById("status").value;


  try {
    const data = await fetch(`/update/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sender_name,
        receiver_name,
        package_name,
        location,
        date,
        status,
      }),
    })
      // let res = await data.json()
      .then((res) => {
        if (res.status === 200) {
          alert("Shipment has been updated succesfully...");

          window.location.href = "/dashboard/admin";
        } else {
          console.log("Failed to update shipment.");
        }
      })
      .catch((e) => {
        // console.error("Error:", error);
        alert(e, "error updating shipment");
      });
  } catch (e) {
    console.log(e);
  }
};
