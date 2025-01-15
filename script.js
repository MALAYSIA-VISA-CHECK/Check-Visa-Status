function searchDocument() {
    var documentNo = document.getElementById("documentNo").value;
    if (documentNo === "A03650776") {
        document.getElementById("resultTable").getElementsByTagName("tbody")[0].innerHTML = `
            <tr>
                <td>1</td>
                <td>MD PIASH HASAN</td>
                <td>BANGLADESH</td>
                <td>A03650776</td>
                <td></td>
                <td>VISIT PASS (SOCIAL)</td>
                <td></td>
                <td></td>
                <td>SINGLE ENTRY VISA</td>
                <td>APPROVED</td>
            </tr>
        `;
        document.getElementById("totalRecord").innerText = "Total Record: 1";
    } else {
        document.getElementById("warningMessage").style.display = "block";
        document.getElementById("resultTable").getElementsByTagName("tbody")[0].innerHTML = `
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        `;
        document.getElementById("totalRecord").innerText = "Total Record: 0";
    }
}

function resetForm() {
    // Reset form fields to default values
    document.getElementById("documentNo").value = "";
    document.getElementById("countryIssue").value = "BANGLADESH";
    document.getElementById("documentduedate").value = "";
    document.getElementById("applicationNo").value = "";
    document.getElementById("transactionType").value = "LANJUTAN";
    document.getElementById("applicationDate").value = "";

    // Reset table content and total record
    document.getElementById("resultTable").getElementsByTagName("tbody")[0].innerHTML = `
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    `;
    document.getElementById("totalRecord").innerText = "Total Record: 0";

    // Hide warning message
    document.getElementById("warningMessage").style.display = "none";
}
