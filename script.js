// =======================
// LIKE BUTTON
// =======================

const likeButtons =
document.querySelectorAll(
".like-btn"
);

likeButtons.forEach(btn=>{

btn.addEventListener(
"click",
()=>{

btn.classList.toggle(
"liked"
);

if(
btn.classList.contains(
"liked"
)
){

btn.classList.remove(
"fa-regular"
);

btn.classList.add(
"fa-solid"
);

}
else{

btn.classList.remove(
"fa-solid"
);

btn.classList.add(
"fa-regular"
);

}

});

});

// =======================
// DOUBLE CLICK LIKE
// =======================

const postImages =
document.querySelectorAll(
".post-image"
);

postImages.forEach(img=>{

img.addEventListener(
"dblclick",
()=>{

const heart =
img.parentElement
.querySelector(
".like-btn"
);

heart.classList.add(
"liked"
);

heart.classList.remove(
"fa-regular"
);

heart.classList.add(
"fa-solid"
);

showToast(
"❤️ Liked"
);

showHeart(
img
);

});

});

// =======================
// BIG HEART EFFECT
// =======================

function showHeart(image){

const heart =
document.createElement(
"div"
);

heart.innerHTML =
"❤️";

heart.style.position =
"absolute";

heart.style.fontSize =
"90px";

heart.style.left =
"50%";

heart.style.top =
"50%";

heart.style.transform =
"translate(-50%,-50%)";

heart.style.animation =
"heartPop .8s ease";

heart.style.pointerEvents =
"none";

image.parentElement.style.position =
"relative";

image.parentElement.appendChild(
heart
);

setTimeout(()=>{
heart.remove();
},800);

}

// =======================
// STORY CLICK
// =======================

const stories =
document.querySelectorAll(
".story"
);

stories.forEach(story=>{

story.addEventListener(
"click",
()=>{

story.style.opacity =
".6";

showToast(
"Story Viewed 👀"
);

});

});

// =======================
// FOLLOW BUTTON
// =======================

const followBtns =
document.querySelectorAll(
".suggestion button"
);

followBtns.forEach(btn=>{

btn.addEventListener(
"click",
()=>{

if(
btn.innerText ===
"Follow"
){

btn.innerText =
"Following";

btn.style.color =
"#262626";

showToast(
"Followed Successfully ✅"
);

}
else{

btn.innerText =
"Follow";

btn.style.color =
"#0095f6";

}

});

});

// =======================
// TOAST
// =======================

function showToast(text){

const toast =
document.createElement(
"div"
);

toast.className =
"toast";

toast.innerText =
text;

document.body.appendChild(
toast
);

setTimeout(()=>{

toast.classList.add(
"show"
);

},100);

setTimeout(()=>{

toast.classList.remove(
"show"
);

setTimeout(()=>{
toast.remove();
},300);

},2000);

}

// =======================
// SAVE POST
// =======================

const saves =
document.querySelectorAll(
".save"
);

saves.forEach(save=>{

save.addEventListener(
"click",
()=>{

if(
save.classList.contains(
"fa-regular"
)
){

save.classList.remove(
"fa-regular"
);

save.classList.add(
"fa-solid"
);

showToast(
"Saved 📌"
);

}
else{

save.classList.remove(
"fa-solid"
);

save.classList.add(
"fa-regular"
);

}

});

});

// =======================
// DARK MODE
// =======================

const darkBtn =
document.createElement(
"button"
);

darkBtn.innerHTML =
"🌙";

darkBtn.className =
"dark-btn";

document.body.appendChild(
darkBtn
);

darkBtn.addEventListener(
"click",
()=>{

document.body.classList.toggle(
"dark-mode"
);

});

// =======================
// SCROLL ANIMATION
// =======================

const posts =
document.querySelectorAll(
".post"
);

window.addEventListener(
"scroll",
()=>{

posts.forEach(post=>{

let top =
post.getBoundingClientRect().top;

if(
top <
window.innerHeight - 100
){

post.style.opacity =
"1";

post.style.transform =
"translateY(0px)";

}

});

});

// =======================
// START EFFECT
// =======================

posts.forEach(post=>{

post.style.opacity =
"0";

post.style.transform =
"translateY(30px)";

post.style.transition =
".6s";

});

// =======================
// ONLINE STATUS
// =======================

const profile =
document.querySelector(
".profile-box"
);

if(profile){

const dot =
document.createElement(
"span"
);

dot.style.width =
"10px";

dot.style.height =
"10px";

dot.style.background =
"limegreen";

dot.style.borderRadius =
"50%";

dot.style.display =
"inline-block";

dot.style.marginLeft =
"10px";

profile.appendChild(
dot
);

}

// =======================
// LOADED
// =======================

console.log(
"Instagram Clone Loaded 🚀"
);
// PROFILE TABS

const tabs =
document.querySelectorAll(".tab");

tabs.forEach(tab=>{

tab.addEventListener("click",()=>{

tabs.forEach(t=>{
t.classList.remove("active-tab");
});

tab.classList.add("active-tab");

});

});

// EDIT PROFILE

const editBtn =
document.querySelector(".edit-btn");

if(editBtn){

editBtn.addEventListener(
"click",
()=>{

alert(
"Edit Profile Feature Coming Soon 🚀"
);

});

}
const feed =
document.querySelector(
".feed-container"
);

window.addEventListener(
"scroll",
()=>{

if(
window.innerHeight +
window.scrollY >=
document.body.offsetHeight - 500
){

for(let i=0;i<3;i++){

feed.innerHTML += `
<div class="post">

<img
class="post-image"
src="https://picsum.photos/900/700?random=${Math.floor(Math.random()*1000)}">

<div class="likes">
${Math.floor(Math.random()*90000)}
likes
</div>

</div>
`;

}

}

});