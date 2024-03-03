

document.addEventListener('DOMContentLoaded', function() {


  const goToIds = ['AboutClick','SkillsClicked','ProjectClicked','ContactsClicked']

  goToIds.map((ids) => {
    document.getElementById(ids).addEventListener('click', ()=>{
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenu.classList.toggle('hidden');    
    });  
  })

  

  document.getElementById('mobile-menu-toggle').addEventListener('click', function() {
    var mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
  })});