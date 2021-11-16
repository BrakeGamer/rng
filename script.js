init = () => {
    document.getElementById("round").disabled = true;
    document.getElementById("int").checked = true;
    document
}


randNumber = () => {
    var minNum = document.getElementById("minum").value;
    var maxNum = document.getElementById("maxnum").value;
    var result = document.getElementById("result");
    var selector = [document.getElementById("int"), document.getElementById("dec")];
    var roundTo = document.getElementById("round").value;

    if (minNum <= maxNum) {
        if (selector[0].checked == true) {
            result.innerHTML = "Result: " + (Number(Math.floor(Math.random() * (Math.floor(maxNum) - Math.floor(minNum) + 1))) + Number(Math.floor(minNum)));
        } else {
            result.innerHTML = "Result: " + (Number(Math.random() * (maxNum - minNum)) + Number(minNum)).toFixed(roundTo);
        };
    } else {
        result.innerHTML = "Invalid input";
    }
};