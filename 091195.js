var backButton=document.getElementById("back-to-top-button");function scrollToTop(t){let e=performance.now(),o=window.pageYOffset,n=-o;function a(l){let i=l-e;if(i<t){var c;window.scrollTo(0,o+n*((c=i/t)<.5?4*c*c*c:(c-1)*(2*c-2)*(2*c-2)+1)),requestAnimationFrame(a)}else window.scrollTo(0,o+n)}requestAnimationFrame(a)}var previousActiveMenu=null;function showConfirmationDialog(){previousActiveMenu=document.querySelector(".topnav a.active"),document.getElementById("confirmationDialog").style.display="flex"}function cancelConfirmation(){hideConfirmationDialog(),setActive(document.querySelector('.topnav a[href="javascript:void(0);"]'))}function hideConfirmationDialog(){document.getElementById("confirmationDialog").style.display="none"}function redirectToBlog(){window.location.href="https://haxoruploader.blogspot.com"}function setActive(t){for(var e=document.getElementsByClassName("topnav")[0].getElementsByTagName("a"),o=0;o<e.length;o++)e[o].classList.remove("active");t.classList.add("active")}function myFunction(){var t=document.getElementById("myTopnav"),e=document.getElementById("icon-home");"topnav"===t.className?(t.className+=" responsive",e.innerHTML='<path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59 5.59-5.59z" fill="white"></path>'):(t.className="topnav",e.innerHTML='<path d="M1 17h22v2h-22v-2zm0-12v2h22v-2h-22zm0 8h22v-2h-22v2z" fill="white"></path>')}window.onscroll=function(){document.body.scrollTop>300||document.documentElement.scrollTop>300?backButton.style.display="block":backButton.style.display="none"},backButton.addEventListener("click",function(){scrollToTop(1e3)});
