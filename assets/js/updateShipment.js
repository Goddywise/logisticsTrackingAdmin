// window.onload = ()=>{
//     // alert('hello')
//     let user = localStorage.getItem('usr');
//     if(!user) location.href = '/';
//      localStorage.clear();
// }

// const fetchRecords = async () => {
//   alert('HI ')
//   const res = await fetch(`/admin/getdata/${id}`, {
//     method: "GET",
//     headers: {
//       "Content-type": "application/json",
//     },
//   }).then((res) => {
//     if (!res.ok) {
//       throw new Error("Failed to fetch data to update");
//     }
//     alert("Hi");
//     return res.json();
//   });
//   const data = await res.json;
//   //   console.log(data.location)

//   const sender_name = (document.getElementById("sender_name").value =
//     data.sender_name);
//   const receiver_name = (document.getElementById("receiver_name").value =
//     data.receiver_name);
//   const package_name = (document.getElementById("package_name").value =
//     data.package_name);
//   const location = (document.getElementById("location").value = data.location);
//   const date = (document.getElementById("date").value = data.date);
//   const status = (document.getElementById("status").value = data.status);
//   const tracking_number = (document.getElementById("tracking_number").value =
//     data.tracking_number);
// };

const updateRecords = async (e) => {
  e.preventDefault();
 
  const sender_name = document.getElementById("sender_name").value;
  const receiver_name = document.getElementById("receiver_name").value;
  const package_name = document.getElementById("package_name").value;
  const location = document.getElementById("location").value;
  const date = document.getElementById("date").value;
  const status = document.getElementById("status").value;
  const tracking_number = document.getElementById("tracking_number").value;

  // const id = new URLSearchParams()
 
  const res = await fetch(`/admin/update/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      sender_name,
      receiver_name,
      package_name,
      location,
      date,
      status,
      tracking_number,
    }),
  })
    let data = await res.json()
    // .then((response) => {
    //   if (response.ok) {
    //     alert("Shipment is updated succesfully!");
    //     // location.href = "/";
    //   } else {
    //     throw new Error("Failed to update shipment.");
    //   }
    // })
    // .catch((error) => {
    //   console.error("Error:", error);
    //   alert("error updating shipment");
    // });
    
};
