function countForm(form) {
  let values = []
  if ((form.in1.value !== "") && (Number(form.in1.value) || Number(form.in1.value)===0)) {
    values.push(Number(form.in1.value))
  } else {
    alert("Error in 1 number")
    return false
  }
  if ((form.in2.value !== "") && (Number(form.in2.value) || Number(form.in2.value)===0)) {
    values.push(Number(form.in2.value))
  } else {
    alert("Error in 2 number")
    return false
  }
  if ((form.in3.value !== "") && (Number(form.in3.value) || Number(form.in3.value)===0)) {
    values.push(Number(form.in3.value))
  } else {
    alert("Error in 3 number")
    return false
  }
  if ((form.in4.value !== "") && (Number(form.in4.value) || Number(form.in4.value)===0)) {
    values.push(Number(form.in4.value))
  } else {
    alert("Error in 4 number")
    return false
  }
  if ((form.in5.value !== "") && (Number(form.in5.value) || Number(form.in5.value)===0)) {
    values.push(Number(form.in5.value))
  } else {
    alert("Error in 5 number")
    return false
  }
  if ((form.in6.value !== "") && (Number(form.in6.value) || Number(form.in6.value)===0)) {
    values.push(Number(form.in6.value))
  } else {
    alert("Error in 6 number")
    return false
  }
  if ((form.in7.value !== "") && (Number(form.in7.value) || Number(form.in7.value)===0)) {
    values.push(Number(form.in7.value))
  } else {
    alert("Error in 7 number")
    return false
  }
  if ((form.in8.value !== "") && (Number(form.in8.value) || Number(form.in8.value)===0)) {
    values.push(Number(form.in8.value))
  } else {
    alert("Error in 8 number")
    return false
  }
  if ((form.in9.value !== "") && (Number(form.in9.value) || Number(form.in9.value)===0)) {
    values.push(Number(form.in9.value))
  } else {
    alert("Error in 9 number")
    return false
  }
  if ((form.in10.value !== "") && (Number(form.in10.value) || Number(form.in10.value)===0)) {
    values.push(Number(form.in10.value))
  } else {
    alert("Error in 10 number")
    return false
  }
  let max = values[0];
  let min = values[0];
  var i;
  for(i = 1; i<10; i++) {
    if (values[i]>max) {
      max = values[i]
    }
    if (values[i]<min) {
      min = values[i]
    }
  }
  let result = `Max: ${max} \nMin: ${min}`
  document.cookie = "MAX="+String(max);
  document.cookie = "MIN="+String(min);
  alert(result);
  return true
}
