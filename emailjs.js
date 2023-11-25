function sendMail() {
  let params = {
    name: document.getElementById("firstName").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password"),
  };
  let serviceId = "service_g1fwu6l";
  let templateId = "template_iqusa6r";

  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      document.getElementById("firstName").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      console.log(res);
      alert("sucsses");
    })
    .catch((err) => console.log(err));
}
