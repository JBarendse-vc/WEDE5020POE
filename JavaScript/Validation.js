function validateForm() { //W3Schools, n.d.
    let x = document.forms["cForm"]["fname"].value.trim();
    //let z = document.forms["cForm"]["sname"].value.trim();
    let a = document.forms["cForm"]["email"].value.trim(); //W3Schools, n.d.
    let b = document.forms["cForm"]["pnumber"].value.trim(); //W3Schools,n.d.


    const numberL = /^0\d{9}$/; //0 makes sure the number starts of with zero (W3Schools, n.d.)


    if (x==""){
        alert("Name must be filled out")
        return false;
    }
    // if (z==""){
    //     alert("Name must be filled out")
    //     return false;
    //}
    if (!a.includes("@") || !a.includes(".")) { //The IIE, 2026
        alert("Enter a valid email");
        return false; 
    }
    if (!numberL.test(b)) {
        alert("Please enter a 10 digit contact number starting with 0");
        return false;
    }
    console.log("Form submitted successfully!"); //The IIE, 2026 //Updates the console to show that the form has been submitted successfully
    return true; //The IIE, 2026 //Returns true if the form is valid and can be submitted

}

//  W3Schools (n.d.) , Searchbox for an item
function search_product() {
    let input = document.getElementById('searchbar').value.toLowerCase();
    let x = document.getElementsByClassName('product');
    let found = 0;

    for (let i = 0; i < x.length; i++) {
        if (!x[i].textContent.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "table-row";
            found++;
        }
    }

    // Show the message only when no rows match
    document.getElementById('noResults').style.display = (found === 0) ? "block" : "none";
}


// https://www.w3schools.in/javascript/validate-a-phone-number

//https://www.geeksforgeeks.org/javascript/how-to-validate-phone-numbers-using-javascript/

// The IIE, 2026 [Online]. Available at: https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7BCCB67D67-54C6-4B72-871F-CF8C5B954C6A%7D&file=WEDE5020MM.docx&action=default&mobileredirect=true&share=cQpnfbbMxlRyS4cfz4xblUxqEgUCLNe9ab-zGeOYpowFzi1Buw

//https://mimo.org/tutorials/javascript/how-to-change-image-source-in-javascript

//https://stackoverflow.com/questions/11722400/programmatically-change-the-src-of-an-img-tag

//https://www.w3schools.com/js/js_validation.asp

//https://www.w3schools.com/jsref/jsref_trim_string.asp