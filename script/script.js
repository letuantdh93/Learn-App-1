// Kiểm tra khi DOM đã được tải xong
document.getElementById("button").addEventListener("click", function () {
  const username = document.getElementById("inputID").value;
  const password = document.getElementById("password").value;
  //const equal = document.getElementById("equal").value;
  equal = parseInt(username) + parseInt(password);
  document.getElementById("equal").value = equal;
  //alert(equal);
  //Kiểm tra thông tin người dùng
  //   if (username && password) {
  //     alert("Đăng nhập thành công!\nUser Name: " + username);
  //   } else {
  //     alert("Vui lòng điền đầy đủ thông tin.");
  //   }
});
