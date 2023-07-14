$(function () {


  $('.send').on('click', function () {

    var f = document.form;

    if (f.on_name.value == "") {
      alert("이름을 입력하세요.");
      f.on_name.focus();
      return;
    }
    if (f.on_phone.value == "") {
      alert("연락처를 입력하세요.");
      f.on_phone.focus();
      return;
    }
    if (f.on_email.value == "") {
      alert("이메일을 입력하세요.");
      f.on_email.focus();
      return;
    } else {
      if (chkEmail(f.on_email.value)) {
      } else {
        alert("이메일을 정확하게 입력하세요.");
        f.on_email.focus();
        return;
      }
    }
    if (f.on_content.value == "") {
      alert("의뢰내용을 입력하세요.");
      f.on_content.focus();
      return;
    }
    f.submit();
  })
})
