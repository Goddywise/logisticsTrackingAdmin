// window.onload = ()=>{
//     // alert('hello')
//     let user = localStorage.getItem('usr');
//     if(!user) location.href = '/';
//      localStorage.clear();

// }

const showMenu = (menu, content) => {
  let allContent = document.querySelectorAll(".content");
  allContent.forEach((eachContent) => {
    eachContent.style.display = "none";
  });
  document.querySelector(`${content}`).style.display = "flex";
};
showMenu("default", ".view-cont");

// let allMenu = document.querySelectorAll('.menu');
//   allMenu.forEach(eachMenu=>{
//       eachMenu.classList.remove('highlight');
//   })

//API call to get all shipment
const getAllShippment = () => {
  let res = fetch(`/db/getrecords`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      arrangeProduct(data.data);
    })
    //    console.log(data.data);

    .catch((err) => console.log(err));
};
getAllShippment();

const arrangeProduct = (data) => {
  let content = `
    <table>
      <tr>
        <th>#</th>
        <th>Sender's Name</th>
        <th>Receiver's Name</th>
        <th>Package</th>
        <th>Current Location</th>
        <th>Date</th>
        <th>Status</th>
        <th>Tracking Number</th>
        <th>Actions</th>
    </tr>
  `;

  if (data.length > 0) {
    data.map((tableData) => {
      content += `
      <tbody>
          <tr id=${tableData.id}>
            <td width="20px">${tableData.id}</td>
            <td>${tableData.sender_name}</td>
            <td>${tableData.receiver_name}</td>
            <td>${tableData.package_name}</td>
            <td>${tableData.location}</td>
            <td>${tableData.date}</td>
            <td>${tableData.status}</td>
            <td>${tableData.tracking_number}</td>
              <td>
                 <button><a href="/dashboard/admin/update/${tableData.id}">Edit</a></button>
                 <button onclick="handleDelete(${tableData.id})">Delete</button>
              </td>
          </tr>
        `;
    });
  }
  content += `</table>`;
  let container = document.querySelector(".mainCont > .view-cont > div");
  container.innerHTML = content;
};

//API call to Delete a shipment
const handleDelete = async (id) => {

try {
  const res = await fetch(`/admin/delete/${id}`, {
    method: 'DELETE', 
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (res.ok) {
    const result = await res.json(); 
    console.log('Record deleted successfully:', result);
    alert(result.message)
    
    window.location.reload();
    return result; 
    
  } else {
    console.error('Failed to delete the record:', res.status, res.statusText);
    return null;
  }
} catch (error) {
  console.error('Error while deleting the record:', error);
  return null;
}
}

// API call to create a new shipment
const createShipment = async (e) => {
  e.preventDefault();
  const sender_name = document.getElementById("sender_name").value;
  const receiver_name = document.getElementById("receiver_name").value;
  const package = document.getElementById("package").value;
  const location = document.getElementById("location").value;
  const date = document.getElementById("date").value;
  const status = document.getElementById("status").value;
  const tracking_number = document.getElementById("tracking_number").value;

  let res = await fetch(`/createShippment/create`, {
    method: "POST",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify({
      sender_name,
      receiver_name,
      package,
      location,
      date,
      status,
      tracking_number,
    }),
  })
    // const resspose = await res.json()
    .then((data) => {
         if(data.status === 200){
          alert(data.successMessage)
          window.location.reload()
        }else{
          alert(data.errorMessage)
        }
    })
  
    .then((err) => console.log(err))
 
};

// API call to Track a shipment
const handleTrack = async (e) => {
  e.preventDefault();
  const searchItem = document.getElementById("searchId").value;
  // let inputErr = document.getElementById("inp_error");
  fetch(`/track/trace/${searchItem}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Shipment not found");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("result").innerHTML = `
        <p><strong>Receiver's Name: </br></strong> ${data.receiver_name}</p>

          <p><strong>Sender's Name: </br> </strong> ${data.sender_name}</p>

          <p><strong>Package: </br></strong> ${data.package_name}</p>

          <p><strong>Date: </br></strong> ${data.date}</p>

          <p><strong>Current Location: </br></strong> ${data.location}</p>

          <p><strong>Status: </br></strong> ${data.status}</p>

          <p><strong>Tracking Number </br></strong> ${data.tracking_number}</p>
      `;
    })
    .catch((err) => {
      document.getElementById("result").textContent = err.message;
    });
};

// const clearTrackInp = ()=>{
//   // alert('Hello clr')
 
// }


