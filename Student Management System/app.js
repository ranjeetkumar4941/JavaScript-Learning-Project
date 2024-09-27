let body=document.querySelector("body");
let addbtn=document.querySelector("#add");
let table=document.querySelector("table");
let serialNo=1;
addbtn.addEventListener("click", () => {
    
    // get input
    let name=document.querySelector("#name").value;
    let rollno=document.querySelector("#rollno").value;
    let email=document.querySelector("#email").value;
    let gender=document.querySelector("#gender").value;
    let dob=document.querySelector("#dob").value;
    let contact=document.querySelector("#contact").value;
    let address=document.querySelector("#address").value;
    console.log(name);
    console.log(rollno);
    console.log(email);
    console.log(gender);
    console.log(dob);
    console.log(contact);
    console.log(address);

    let tableRow=document.createElement("tr");

    let serialNoData=document.createElement("td");
    serialNoData.innerText=serialNo;

    let nameData=document.createElement("td");
    nameData.innerText=name;

    let rollnoData=document.createElement("td");
    rollnoData.innerText=rollno;

    let emailData=document.createElement("td");
    emailData.innerText=email;

    let genderData=document.createElement("td");
    genderData.innerText=gender;

    let dobData=document.createElement("td");
    dobData.innerText=dob;

    let contactData=document.createElement("td");
    contactData.innerText=contact;

    let addressData=document.createElement("td");
    addressData.innerText=address;

    tableRow.append(serialNoData);
    tableRow.append(nameData);
    tableRow.append(rollnoData);
    tableRow.append(emailData);
    tableRow.append(genderData);
    tableRow.append(dobData);
    tableRow.append(contactData);
    tableRow.append(addressData);
    table.append(tableRow);
    serialNo++;
});
