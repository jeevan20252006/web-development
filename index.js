let form=document.getElementById("college");
form.addEventListener("submit",async function(event){
event.preventDefault();
const studentdata={
 name:document.getElementById("name").value,
 reg_no:document.getElementById("reg no").value,
 email:document.getElementById("email").value
}
console.log("trtr", studentdata)
const response=await fetch("http://127.0.0.1:8000/studentsubmittedrecord",{
   method:"POST",
   headers:{"Content-Type":"application/json"},
   body:JSON.stringify(studentdata) 
})

const result=await response.json()
console.log(result)
document.getElementById("test").innerHTML=JSON.stringify(result)
console.log(result.message);
})


