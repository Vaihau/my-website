window.onload = function() {
  const btnCopy = document.getElementById('btn-copy');
  btnCopy.addEventListener('click', copyText);

  const select = document.getElementById('language');
  const navLinks = document.querySelectorAll('li > a');
  const introText = document.querySelectorAll('#intro > *');
  const buttons = document.querySelectorAll('button')
  select.addEventListener('change', () => {
    let language = select.value;
    changeTextLanguage(language);
  });

  let translations = {
    french: {
      nv1: 'Accueil',
      nv2: 'Contact',
      h2: 'Bienvenue sur mon site',
      p: 'Je suis Vaihau développeur de Polynésie française',
      btn1: 'Mentions légales',
      btn2: 'Politique de confidentialité'
    },
    english: {
      nv1: 'Home',
      nv2: 'Contact',
      h2: 'Welcome to my website',
      p: 'I\'m Vaihau software developer from French polynesia',
      btn1: 'Legal notice',
      btn2: 'Privacy policy'
    }
  }

  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Optional: Set focus for accessibility
        setTimeout(() => targetSection.focus(), 500);
      }
    });
  });
  
  function changeTextLanguage(language) {
    navLinks[1].innerText = translations[language]['nv1']
    navLinks[0].innerText = translations[language]['nv2']
    introText[0].innerText = translations[language]['h2']
    introText[1].innerText =  translations[language]['p']
    buttons[0].innerText =  translations[language]['btn1']
    buttons[1].innerText =  translations[language]['btn2']
  }
}

async function copyText() {
  const text = document.getElementById("mail").innerText;
  try {
    await navigator.clipboard.writeText(text);
    console.log("Copié !");
  } catch (err) {
    console.error("Échec de la copie", err);
  }
}


