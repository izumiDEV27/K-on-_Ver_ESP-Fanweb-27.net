// boton de descarga mmd windows
document.querySelectorAll('.downloadw-btn').forEach(button => {
  button.addEventListener('click', () => {
    const fileUrl = button.getAttribute('data-file');
    window.location.href = fileUrl;
  });
});

// botones de descarga principales 
let selectedFile = "";

document.querySelectorAll(".download-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedFile = btn.dataset.file;
    document.getElementById("modal").style.display = "block";
  });
});

function downloadFile() {
  window.location.href = selectedFile;
}