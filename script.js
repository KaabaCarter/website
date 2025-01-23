
function addRecognition() {
    // Get values from the input fields
    const name = document.getElementById("recognitionName").value;
    const message = document.getElementById("recognitionMessage").value;

    // Validate that both fields are filled
    if (message === "" && name != "") {
        alert("Dont forget the Message!");
        return;
    }
    else if(message === "" && name === ""){

        alert("Dont forget the Message!");
        return;
        
    }
    else{

        // Create a new recognition item
    const newRecognition = document.createElement("div");
    newRecognition.classList.add("recognition-item");
    

    // Add the recognition title and description to the new element
    newRecognition.innerHTML = `
        <h3>${name}</h3>
        <p>" ${message} "</p>
    `;

    // Append the new recognition to the list
    const recognitionList = document.getElementById("recognitionList");
    recognitionList.appendChild(newRecognition);

    alert("Thanks for the recomendation!");

    // Clear the input fields after submission
    document.getElementById("recognitionName").value = "";
    document.getElementById("recognitionMessage").value = "";

    }

   
}

