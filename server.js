// Example JavaScript functions

// Function to expand/collapse additional content
function showMore(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// Example function to track steps
function trackSteps() {
    var steps = document.getElementById('steps-input').value;
    var output = document.getElementById('steps-output');
    output.textContent = 'You have tracked ' + steps + ' steps today.';
}

// Example function to edit user profile
function editProfile() {
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].removeAttribute('disabled');
    }
    document.getElementById('bio').removeAttribute('disabled');
}
