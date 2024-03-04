let header = document.getElementById('header');

window.addEventListener('scroll', ()=>
{
   if (window.scrollY > 40) {
     header.classList.add('header-scrolled')
   }else {
   header.classList.remove('header-scrolled')
   };
}
);

  // JavaScript to handle the opening and closing of tables
  const checkboxes = document.querySelectorAll('.checking');
  
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', function () {
      checkboxes.forEach((otherCheckbox) => {
          if (otherCheckbox !== checkbox) {
              otherCheckbox.checked = false;
          }
      });
  });
});




