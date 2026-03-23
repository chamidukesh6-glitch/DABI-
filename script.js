const videos = [
  "1774290245536202expMp4.mp4",
  "1774289955922932720p.mp4"
];

let current = 0;
const videoPlayer = document.getElementById("bgVideo");

// Play videos loop
function playVideo() {
  videoPlayer.src = videos[current];
  videoPlayer.play();
}

videoPlayer.addEventListener("ended", () => {
  current = (current + 1) % videos.length;
  playVideo();
});

playVideo();

// Sound toggle
function toggleSound() {
  videoPlayer.muted = !videoPlayer.muted;
}

// Download function
function download(type) {
  let url = document.getElementById("url").value;

  if (!url) {
    alert("Enter URL");
    return;
  }

  document.getElementById("loader").classList.remove("hidden");

  let api = "https://appi.srihub.store/download/" + type + "?url=" + encodeURIComponent(url);

  window.open(api, "_blank");

  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
  }, 2000);
}