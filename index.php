<?php
require($_SERVER['DOCUMENT_ROOT']."/config/includes.php");
if (is_array(getUserData($con))) {
header("Location: https://www.voidrev.us/home");
}
// lets go bowling
$words = [
"lario for the win 2024",
"silvaz is spelt with a Z NOT AN S!!",
"koutch for the toast 2023",
"we do not talk about [REDACTED]",
"bruh",
"KoutchTheIdiot",
"shit",
"yes",
"put this",
"backdoor man",
"millions must uninstall old clients for void",
"Add me plwease -leith 2023",
];
shuffle($words);
$words = $words[0];
?>
<!doctype html>
<html lang="en" data-bs-theme="dark">
<head>
<style>
  body{
    margin: 0px;
    padding: 0px;
}

.area{
    background: #4e54c8;  
    background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);  
    width: 100%;
    height:100vh;
    position: absolute;
   
}

.circles{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
    
}

.circles li:nth-child(1){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}


.circles li:nth-child(2){
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.circles li:nth-child(3){
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}

.circles li:nth-child(4){
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.circles li:nth-child(5){
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.circles li:nth-child(6){
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}

.circles li:nth-child(7){
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}

.circles li:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9){
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}



@keyframes animate {

    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }

}
</style>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Index</title>

<style>
html,
body,
.container {
height: 100%;
}
body {
background: none;
}
.btn-primary {
background: #121212;
}
</style>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>
<div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div>
<div class="container d-flex align-items-center">
<div class="mx-auto text-center d-flex flex-column z-3">
    <img src="/img/logo/roblox_logo.png" class="mx-auto" style="max-width: 250px;">
    <h4 class="p-1 d-inline-block" style="background: RGBA(0, 0, 0, 0.5);">did you know im right behind you?</h4>
    <a style="background: RGBA(0, 0, 0, 0.5);" class="p-0 d-inline-block" href="https://discord.gg/UEuXjD565c">https://discord.gg/UEuXjD565c</a>
    <div class="d-flex flex-row flex-wrap gap-2 mx-auto mt-2">
        <a class="btn btn-primary" href="/register/">Register</a>
        <a class="btn btn-secondary" href="/login/">Login</a>
    </div>
</div>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
<script>
document.addEventListener("click", function() {
var video = document.getElementById("bg");
video.play();
});
</script>
</body>
</html>