function scrollDown(){
  document.getElementById("secret").scrollIntoView({behavior:"smooth"});
}

function unlockLove(){
  const passwordInput = document.getElementById("password").value;
  const correctPassword = "16/6/2004";

  if(passwordInput === correctPassword){
    document.getElementById("error").innerText = "";

    // Show popup
    const popup = document.getElementById("lovePopup");
    popup.classList.remove("hidden");

    // Animate popup scale
    gsap.to(".love-popup-content", {scale:1, duration:0.8, ease:"elastic.out(1,0.5)"});

    // Generate floating hearts inside popup
    const heartsContainer = document.querySelector(".hearts-popup");
    for(let i=0;i<20;i++){
      const h = document.createElement("div");
      h.classList.add("heart-popup");
      h.style.left = Math.random()*100 + "px";
      h.style.animationDuration = 2 + Math.random()*3 + "s";
      h.style.opacity = Math.random();
      heartsContainer.appendChild(h);
    }

    // Play song with fade in
    const song = document.getElementById("song");
    song.volume = 0;
    song.play().catch(()=>{});
    let vol=0;
    let fade = setInterval(()=>{
      if(vol<1){ vol+=0.03; song.volume = vol; } 
      else{ clearInterval(fade); }
    },200);

  } else {
    document.getElementById("error").innerText = "Wrong date 💔";
  }
}

function closePopup(){
  const popup = document.getElementById("lovePopup");
  popup.classList.add("hidden");
}
function scrollDown() {
  document.getElementById("secret").scrollIntoView({ behavior: "smooth" });
}

function unlockLove() {
  const passwordInput = document.getElementById("password").value;
  const correctPassword = "16/6/2004";

  if(passwordInput === correctPassword) {
    document.getElementById("error").innerText = "";

    // Show love popup
    const popup = document.getElementById("lovePopup");
    popup.classList.remove("hidden");

    // Play song
    const song = document.getElementById("song");
    song.volume = 0;
    song.play().catch(() => {}); // catch for autoplay restrictions

    // Fade in volume
    let vol = 0;
    let fade = setInterval(() => {
      if(vol < 1){
        vol += 0.03;
        song.volume = vol;
      } else {
        clearInterval(fade);
      }
    }, 200);

  } else {
    document.getElementById("error").innerText = "Wrong date 💔";
  }
}

function closePopup() {
  const popup = document.getElementById("lovePopup");
  popup.classList.add("hidden");
}