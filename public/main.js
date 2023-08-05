const domain = 'http://localhost:3000';

const url = document.querySelector('.link');
const filename = document.querySelector('.filename');
const btn = document.querySelector('.download');
const successMsg = document.querySelector('.message-success');
const failMsg = document.querySelector('.message-fail');

successMsg.style.display = "none";
failMsg.style.display = "none";

btn.addEventListener('click', async () => {
  btn.setAttribute('disabled', '');
  btn.innerHTML = "Downloading, please wait!";
  const dto = {
    url: url.value,
    filename: filename.value
  }
  const response = await fetch(`${domain}/dlaudio`,
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dto)
    })

  console.log(response);
  if (response.status === 200) {
    successMsg.style.display = "";
    btn.removeAttribute('disabled');
    btn.innerHTML = "Download!";
    url.value = "";
    filename.value = "";
    //alert("Downloaded successfully");
  } else {
    failMsg.style.display = "";
    btn.removeAttribute('disabled');
    btn.innerHTML = "Download!";
    //alert("There was a problem with your download");
  }
}) 