
let interval = setInterval(function () {
  if (document.readyState == 'complete') {
    clearInterval(interval);
    console.log('On Complete...');
    myMain();
  }
}, 3000);

document.onreadystatechange = function(){
     if(document.readyState == 'complete'){
         //myMain();
     }
}
//window.onload = myMain();

window.addEventListener("load", function(){
  //myMain();
});

document.addEventListener("DOMContentLoaded", function(){
  //myMain();
});

/*
//var modal = null
//var trigger = null
//var closeButton = null
var original_images_div = null;
var startButton = null;
var userInfoModal = null;
var closeStartButton = null;
var settingsButton = null;
var userSettingsModal = null;
var closeSettingsButton = null;
var startUploadButton = null;
var uploadModal = null;
var closeUploadButton = null;
*/

function toggleModal(modal) {
  ret = modal.classList.toggle("show-modal");
  /*if (ret == true)
    modal.classList.remove("modal");
  else
    modal.classList.add("modal");*/
}

function windowOnClick(event) {  
  //alert(document.getElementById("user_email").value);
	startButton = document.getElementById("startBtn");
	userInfoModal = document.getElementById("user_info_modal");
	closeStartButton = document.getElementById("finishUserInfoBtn");

	settingsButton = document.getElementById("startSettingsBtn");
	userSettingsModal = document.getElementById("settingsModal");
	closeSettingsButton = document.getElementById("finishSettingsBtn");


	startUploadButton = document.getElementById("startUploadButton");
	uploadModal = document.getElementById("uploadModal");
	closeUploadButton = document.getElementById("closeUploadButton");
	
	target_images_slider_div = document.getElementById("target_images_slider_div");
	finishImagesSlider = document.getElementById("finishImagesSlider");
	
	resetButton = document.getElementById("resetBtn");

	
	if( event.target == resetButton && document.getElementById("content_style_original_images").hasChildNodes())
		return;
	if (event.target == startButton) 
	{
		if (!document.getElementById("content_style_original_images").hasChildNodes()) {
			alert('PLease Select Images First');
			return;
		} else if (document.getElementById("user_email").value != "")
			{
				toggleModal(target_images_slider_div);
				return;
			}
		else
			toggleModal(userInfoModal);
	} else if(event.target == settingsButton && document.getElementById("content_style_original_images").hasChildNodes() ){
			document.getElementById("user_email").value = "";
			toggleModal(userSettingsModal);
  } else if (event.target == closeStartButton && document.getElementById("user_email").value !=  "" ) {
  		  toggleModal(userInfoModal);
		  toggleModal(target_images_slider_div);
	}else if(event.target == closeSettingsButton ){
			toggleModal(userSettingsModal);
	}else if(event.target == startUploadButton ){
			toggleModal(uploadModal);
	}else if(event.target == closeUploadButton ){
			toggleModal(uploadModal);
	}else if(event.target == finishImagesSlider ){
		document.getElementById("resetBtn").click();
		document.getElementById("user_email").value = "";
		toggleModal(target_images_slider_div);
	}
	
}


function myMain() {  
  //modal = document.querySelector(".modal");
  //trigger = document.querySelector(".trigger");
  //closeButton = document.querySelector(".close-button");
  
  //original_images_div = document.getElementById("content_style_original_images");
  
  /*startButton = document.getElementById("startBtn");
  userInfoModal = document.getElementById("user_info_modal");
  closeStartButton = document.getElementById("finishUserInfoBtn");
  
  settingsButton = document.getElementById("startSettingsBtn");
  userSettingsModal = document.getElementById("settingsModal");
  closeSettingsButton = document.getElementById("finishSettingsBtn");


  startUploadButton = document.getElementById("startUploadButton");
  uploadModal = document.getElementById("uploadModal");
  closeUploadButton = document.getElementById("closeUploadButton");
*/
  //console.log('modal '+modal+' trigger '+trigger+ ' closeButton '+closeButton);

  //settingsButton.addEventListener("click", toggleModal);
  //startButton.addEventListener("click", toggleModal);
  
  //closeStartButton.addEventListener("click", toggleModal);
  //closeSettingsButton.addEventListener("click", toggleModal);
  
  
  //trigger.addEventListener("click", toggleModal);
  //closeButton.addEventListener("click", toggleModal);
  window.addEventListener("click", windowOnClick);
}
