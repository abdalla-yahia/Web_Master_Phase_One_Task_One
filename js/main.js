const header   = document.querySelector("header"    );
const menuIcon = document.querySelector("#menu-icon");
const navbar   = document.querySelector(".navbar"   );
const logo     = document.querySelectorAll('.logo'     );
const Header_Links = document.querySelectorAll('.link'  );
const sections = document.querySelectorAll("section");
const menu = document.getElementById('menu-mobile');

  //Show Toggle Links On Clicked Menu Button
  menuIcon.onclick = () => {
      menu.classList.toggle('hidden');
  }
  //Hide Toggle Links On Scroll Down
  window.onscroll = () => {
      menu.classList.add('hidden');
  }
  //Change Header Background Color And Text Color When User Scroll Down 
  window.addEventListener('scroll', () => {
      header.classList.toggle("shadow" , window.scrollY > 0);
      if( window.scrollY > 0){
        header.classList.remove('transparent','text-[#ff2c1f]')
        header.classList.add('bg-white','text-[#020307]')
        logo[0].classList.add('text-[#020307]')
        logo[0].classList.remove('text-white')
      }else {
        header.classList.remove('bg-white','text-[#020307]')
        header.classList.add('transparent','text-[#ff2c1f]')
        logo[0].classList.remove('text-[#020307]')
        logo[0].classList.add('text-white')
      }
  });
  //Check If Link Element Have Class Active To Put Pesudo Element Under It (Under Line)
  Header_Links.forEach((link)=> {
    if (link.classList.contains('home-active')) {
      link.classList.add('before:w-full');
    }

// Reomve Class Active From All Links And Add It To Clicked Link
    link.addEventListener('click',_=>{
      Header_Links.forEach(ele=>{
        ele.classList.remove('home-active','before:w-full')
      })
      link.classList.add('home-active','before:w-full')
    })
  });
  // Reomve Class Active From All Links And Add It To Home Link When Clicked On Top Logo
  logo[0].addEventListener('click',()=>{
      Header_Links.forEach(ele=>{
        ele.classList.remove('home-active','before:w-full')
      })
      Header_Links[0].classList.add('home-active','before:w-full')
  })
  // Reomve Class Active From All Links And Add It To Home Link When Clicked On Bottom Logo
  logo[1].addEventListener('click',()=>{
      Header_Links.forEach(ele=>{
        ele.classList.remove('home-active','before:w-full')
      })
      Header_Links[0].classList.add('home-active','before:w-full')
  })
  //Change Active Link On Scroll
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (pageYOffset >= sectionTop - (sectionHeight / 2) ) {
        current = section.getAttribute("id");
      }
    });

    Header_Links.forEach((link) => {
      link.classList.remove('home-active','before:w-full');
      if (link.children[0].getAttribute("href") === `#${current}`) {
        link.classList.add('home-active','before:w-full');
      }
    });
  });
