






const images = document.querySelectorAll('.imgs');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let index = 0;

// تەنها یەک وێنە پیشان بدرێت
function showImage(i) {
  images.forEach(img => img.style.display = 'none');
  images[i].style.display = 'block';
}

// سەرەتادا
showImage(index);

// Next
nextBtn.onclick = () => {
  index++;
  if (index >= images.length) index = 0;
  showImage(index);
};

// Prev
prevBtn.onclick = () => {
  index--;
  if (index < 0) index = images.length - 1;
  showImage(index);
};





(function () {
  emailjs.init("Dwwzx9_SFMDvQvdTO"); // 👈 لە Account → API Keys
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "diyarwafa_219621",   // 👈 لە Email Services
    "template_2q384ww",  // 👈 لە Email Templates
    this
  ).then(
    function () {
      alert("Message sent successfully ✅");
      document.getElementById("contactForm").reset();
    },
    function (error) {
      alert("Error ❌");
      console.log(error);
    }
  );
});



