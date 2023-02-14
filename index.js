let degree = document.getElementById("degree");
let button = document.getElementById("button");
let result = document.getElementById("result");

function Submit() {
  
  if (!degree.value) {
    alert("please enter degree");
    return false;
  }
  if (degree.value) {
    let data = ((degree.value - 32) * 5) / 9;

    result.value = data + "°C";
    degree.value == "  ";

    return true;
  }
}

function Reset() {


  if (!degree.value || !result.value){
    alert(" empty value  ")
    return false;
  }


  if (degree.value || result.value) {
    alert("Are You Sure Reset Value ")
    degree.value = " ";
    result.value = " ";
    return true;
  }
}
