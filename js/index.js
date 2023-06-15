const hamburger = document.querySelector('.hamburguer');
const navMenu = document.querySelector('nav');
const navItems = document.querySelectorAll('.item-nav2');
const previewContainer = document.querySelector('.preview-container');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
});

const cardsArr = [
  {
    name: 'card1',
    image: 'assets/desktop/budget-app-project-desktop.png',
    title: 'Budget app',
    text: 'The budget app is a mobile web app where you can manage your budget: users can add categories, show categories, add transactions, and show transactions for each category. Built with Ruby on Rails and PostgreSQL.',
    buttons: {
      langs: ['HTML', 'CSS', 'Ruby on Rails', 'PostgreSQL'],
      other: [
        [
          'See Live ',
          'https://budgetapp-azzb.onrender.com/',
          'assets/common/live-button.svg',
        ],
        [
          'See Source ',
          'https://github.com/billymohajeri/Budget-App',
          'assets/common/source-button.svg',
        ],
      ],
    },
  },
  {
    name: 'card2',
    image: 'assets/desktop/todo-list-project-desktop.png',
    title: 'To Do list',
    text: 'The To-do list is an app for managing your own daily tasks: users can add a to-do, list all to-dos, mark to-dos as done, and delete to-dos. Built with HTML5, CSS3, JavaScript, and Webpack.',
    buttons: {
      langs: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
      other: [
        [
          'See Live ',
          'https://billymohajeri.github.io/To-Do-list/dist/',
          'assets/common/live-button.svg',
        ],
        [
          'See Source ',
          'https://github.com/billymohajeri/To-Do-list',
          'assets/common/source-button.svg',
        ],
      ],
    },
  },
  {
    name: 'card3',
    image: 'assets/desktop/leaderboard_app_screenshot.png',
    title: 'Leaderboard',
    text: 'The leaderboard saves and displays scores submitted by different players. It also allows you to submit your score. All data is preserved by an external API. Built with HTML5, CSS3, JavaScript, and Webpack.',
    buttons: {
      langs: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
      other: [
        [
          'See Live ',
          'https://billymohajeri.github.io/Leaderboard/dist/',
          'assets/common/live-button.svg',
        ],
        [
          'See Source ',
          'https://github.com/billymohajeri/Leaderboard',
          'assets/common/source-button.svg',
        ],
      ],
    },
  },
  {
    name: 'card4',
    image: 'assets/desktop/awesome_books_app_screenshot.png',
    title: 'Awesome Books',
    text: 'The Awesome Books is a website that allows users to add/remove books from a list. The list of current books generates dynamically by modifying the DOM. Built with HTML5, CSS3, and JavaScript.',
    buttons: {
      langs: ['HTML', 'CSS', 'JavaScript'],
      other: [
        [
          'See Live ',
          'https://billymohajeri.github.io/Awesome-Books-With-ES6/',
          'assets/common/live-button.svg',
        ],
        [
          'See Source ',
          'https://github.com/billymohajeri/Awesome-Books-With-ES6',
          'assets/common/source-button.svg',
        ],
      ],
    },
  },
  {
    name: 'card5',
    image: 'assets/desktop/cottage_booking_app_screenshot.png',
    title: 'Cottage Booking',
    text: 'Cottage Booking is an app that helps users find cottages and reserve them. The app allows users to add new cottages, remove cottages, make reservations. Built with Ruby on Rails, React, Redux, and PostgreSQL.',
    buttons: {
      langs: ['Ruby', 'Rails', 'React', 'Redux'],
      other: [
        [
          'See Live ',
          'https://final-group-capstone-frontend-git-deploy-billymohajeri.vercel.app/',
          'assets/common/live-button.svg',
        ],
        [
          'See Source ',
          'https://github.com/billymohajeri/Final-Group-Capstone-Backend',
          'assets/common/source-button.svg',
        ],
      ],
    },
  },
  {
    name: 'card6',
    image: 'assets/desktop/star_wars_movies_collection_app_screenshot.png',
    title: 'StarWars Movies Collection',
    text: 'The Star Wars Movies Collection is an app that pulls from the API and shows movies details. Users can like movies and add comments for them. Built with HTML5, CSS3, JavaScript, Jest and Webpack.',
    buttons: {
      langs: ['HTML', 'CSS', 'JavaScript', 'Jest'],
      other: [
        ['See Live ', 'https://billymohajeri.github.io/Capstone-Project-02/dist/', 'assets/common/live-button.svg'],
        ['See Source ', 'https://github.com/billymohajeri/Capstone-Project-02', 'assets/common/source-button.svg'],
      ],
    },
  },
  {
    name: 'card7',
    image: 'assets/desktop/iranian_film_week_2023_app_screenshot.png',
    title: 'Iranian Film Week 2023',
    text: 'Iranian Film Week 2023 is my first capstone project based on an online website for a conference, and I personalized the content for film review week.',
    buttons: {
      langs: ['HTML', 'CSS', 'JavaScript'],
      other: [
        ['See Live ', 'https://billymohajeri.github.io/Capstone-Project-01/', 'assets/common/live-button.svg'],
        ['See Source ', 'https://github.com/billymohajeri/Capstone-Project-01', 'assets/common/source-button.svg'],
      ],
    },
  },
];

const template = (obj) => {
  const div = document.createElement('div');
  div.classList.add('preview');

  const divTop = document.createElement('div');
  divTop.classList.add('preview-divtop');
  const h3 = document.createElement('h3');
  h3.appendChild(document.createTextNode(obj.title));
  h3.classList.add('preview-title');
  const divIcon = document.createElement('div');

  const i = document.createElement('i');
  i.style.height = '12px';
  i.classList.add('cross-menu2');
  i.addEventListener('click', () => {
    previewContainer.classList.toggle('active');
  });
  divIcon.appendChild(i);
  divTop.appendChild(h3);
  divTop.appendChild(i);

  const div1 = document.createElement('div');
  obj.buttons.langs.forEach((btn) => {
    const button = document.createElement('button');
    button.appendChild(document.createTextNode(btn));
    div1.appendChild(button);
  });
  div1.classList.add('preview-langs');

  const img = document.createElement('img');
  img.src = obj.image;
  img.alt = 'Showcase image.';
  img.classList.add('preview-img');

  const p = document.createElement('p');
  p.appendChild(document.createTextNode(obj.text));
  p.classList.add('preview-text');

  const div2 = document.createElement('div');
  obj.buttons.other.forEach((btn) => {
    const button = document.createElement('button');
    const [a, b, c] = btn;
    const img = document.createElement('img');
    button.appendChild(document.createTextNode(a));
    button.setAttribute('onclick', `window.open("${b}", "_blank")`);
    img.setAttribute('src', c);
    button.appendChild(img);
    button.setAttribute('id', 'button1');
    button.classList.add('open-project');
    div2.appendChild(button);
  });

  div2.classList.add('preview-buttons');
  div.appendChild(divTop);
  div.appendChild(div1);
  div.appendChild(img);
  div.appendChild(p);
  div.appendChild(div2);
  return div;
};

document.querySelectorAll('.grid-item-generic').forEach((card) => {
  const openProject = card.querySelector('.open-project');
  openProject.addEventListener('click', () => {
    let selectedCard;
    const name = card.getAttribute('data-name');
    cardsArr.forEach((card) => {
      if (card.name === name) {
        selectedCard = card;
      }
    });
    const templateFilled = template(selectedCard);
    previewContainer.innerHTML = '';
    previewContainer.appendChild(templateFilled);
    previewContainer.classList.toggle('active');
  });
});
