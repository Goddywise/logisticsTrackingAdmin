// window.onload = ()=>{
//     // alert('hello')
//     let user = localStorage.getItem('usr');
//     if(!user) location.href = '/';
//      localStorage.clear();

// }

const fetchRecords = async(id)=>{
    const res = await fetch(`/admin/getdata/${id}`);
    const data = await res.json;
    console.log(data)

   const sender_name = document.getElementById('sender_name').value = data.sender_name;
   const receiver_name = document.getElementById('receiver_name').value = data.receiver_name;
   const package_name = document.getElementById('package_name').value = data.package_name;
   const location = document.getElementById('location').value = data.location;
   const date = document.getElementById('date').value = data.date;
   const status = document.getElementById('status').value = data.status;
   const tracking_number = document.getElementById('tracking_number').value = data.tracking_number;

    

}

const updateRecord =(e)=>{
    e.preventDefault()

}