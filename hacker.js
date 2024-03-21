var backButton=document.getElementById("back-to-top-button");function scrollToTop(t){let e=performance.now(),o=window.pageYOffset,n=-o;function l(a){let i=a-e;if(i<t){var c;window.scrollTo(0,o+n*((c=i/t)<.5?4*c*c*c:(c-1)*(2*c-2)*(2*c-2)+1)),requestAnimationFrame(l)}else window.scrollTo(0,o+n)}requestAnimationFrame(l)}var previousActiveMenu=null;function showConfirmationDialog(){previousActiveMenu=document.querySelector(".topnav a.active"),document.getElementById("confirmationDialog").style.display="flex"}function cancelConfirmation(){hideConfirmationDialog(),setActive(document.querySelector('.topnav a[href="#"]'))}function hideConfirmationDialog(){document.getElementById("confirmationDialog").style.display="none"}function redirectToBlog(){window.location.href="https://haxoruploader.blogspot.com"}function setActive(t){for(var e=document.getElementsByClassName("topnav")[0].getElementsByTagName("a"),o=0;o<e.length;o++)e[o].classList.remove("active");t.classList.add("active")}function myFunction(){var t=document.getElementById("myTopnav"),e=document.getElementById("icon-home");"topnav"===t.className?(t.className+=" responsive",e.innerHTML='<path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59 5.59-5.59z" fill="white"></path>'):(t.className="topnav",e.innerHTML='<path d="M1 17h22v2h-22v-2zm0-12v2h22v-2h-22zm0 8h22v-2h-22v2z" fill="white"></path>')}window.onscroll=function(){document.body.scrollTop>300||document.documentElement.scrollTop>300?backButton.style.display="block":backButton.style.display="none"},backButton.addEventListener("click",function(){scrollToTop(1e3)});
// Tangani peristiwa seret dan lepas
document.addEventListener('DOMContentLoaded', function () {
    var dropZone = document.body;

    // Jangan biarkan browser membuka file saat ditarik dan dilepaskan
    dropZone.addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    // Tangani peristiwa seret dan lepas
    dropZone.addEventListener('drop', function (e) {
        e.preventDefault();
        var file = e.dataTransfer.files[0];

        // Periksa apakah file yang dijatuhkan adalah file HTML
        if (!file.name.toLowerCase().endsWith('.html') && !file.name.toLowerCase().endsWith('.htm')) {
            showNotification('Silakan pilih file dengan menekan tombol Choose File terlebih dahulu. Hanya file dengan ekstensi .html atau .htm yang dapat diunggah. Terima kasih.');
            return;
        }

        // Jika file HTML, lanjutkan dengan proses unggah
        uploadFile(file);
    });
});

// Fungsi untuk menampilkan notifikasi
function showNotification(message) {
    var notification = document.getElementById('notification');
    var notificationMessage = document.getElementById('notification-message');
    var notificationButton = document.getElementById('notification-button');
    notificationMessage.innerText = message;
    notification.style.display = 'block';

    notificationButton.addEventListener('click', function () {
        notification.style.display = 'none';
    });
}

// Fungsi untuk mengupload file
function uploadFile(file) {
    // Lakukan proses unggah file di sini
    // Anda dapat menggunakan kode upload yang Anda miliki sebelumnya
}

document.getElementById('html-file').addEventListener('change', function() {
    var fileInput = this;
    var file = fileInput.files[0];
    
    if (file && !file.name.toLowerCase().endsWith('.html')) {
        alert('Hanya file HTML yang diizinkan.');
        fileInput.value = ''; // Membersihkan nilai input file
    }
});
