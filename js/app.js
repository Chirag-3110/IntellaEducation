
async function fetchCertificate(){ 
    var certificateID=document.getElementById("certificateId")
    var tableContainer=document.getElementById("containe_table");
    var table=document.getElementById("table_data");
    var firestore = firebase.firestore();  
    let resultedArray=[];
    if(!certificateID.value){
        tableContainer.style.display="none";
        return;
    }
    firestore.collection("certificates").doc(certificateID.value.trim()).get().then((doc) => {
        if(doc.data()){
            resultedArray.push({...doc.data(), id: doc.id})
            var rows="";
            for (let i = 0; i < resultedArray.length; i++) {
                var row=`
                    <tr height="50px" >
                        <td>${resultedArray[i].id}</td>
                        <td>${resultedArray[i].candidateName}</td>
                        <td>${resultedArray[i].Course}</td>
                        <td>${resultedArray[i].Duration}</td>
                        <td>${resultedArray[i].Organization}</td>
                    </tr>
                `
                rows=rows+row;
            }
            table.innerHTML=rows
        }
        else{
            table.innerHTML=`
                    <tr height="50px" >
                    <td>No matching records found</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            `
        }
        tableContainer.style.display="block";
        table.style.backgroundColor="white";
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

