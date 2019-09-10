const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


const navigator = document.getElementsByTagName('a');
navigator[0].textContent = siteContent['nav']['nav-item-1']
navigator[0].style.color = 'blue';
navigator[1].textContent = siteContent['nav']['nav-item-2']
navigator[1].style.color = 'blue';
navigator[2].textContent = siteContent['nav']['nav-item-3']
navigator[2].style.color = 'blue';
navigator[3].textContent = siteContent['nav']['nav-item-4']
navigator[3].style.color = 'blue';
navigator[4].textContent = siteContent['nav']['nav-item-5']
navigator[4].style.color = 'blue';
navigator[5].textContent = siteContent['nav']['nav-item-6']
navigator[5].style.color = 'blue';

const NavItem1 = document.createElement('a');
NavItem1.textContent = 'Home';
NavItem1.style.color = 'blue';

const NavItem2 = document.createElement('a');
NavItem2.textContent = 'Blog';
NavItem2.style.color = 'blue';

const NavItems = document.querySelector('nav');
NavItems.prepend(NavItem1);
NavItems.appendChild(NavItem2);

const headers = document.querySelector('h1');
headers.textContent = siteContent['cta']['h1']

const btn = document.querySelector('button');
btn.textContent = siteContent['cta']['button']

const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src'])

const headers = document.getElementsByTagName("h4");
headers[0].textContent = siteContent["main-content"]["features-h4"]
headers[1].textContent = siteContent["main-content"]["about-h4"]
headers[2].textContent = siteContent["main-content"]["services-h4"]
headers[3].textContent = siteContent["main-content"]["product-h4"]
headers[4].textContent = siteContent["main-content"]["vision-h4"]
headers[5].textContent = siteContent["contact"]["contact-h4"]

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const addContent = document.getElementsByTagName("p");
addContent[0].textContent = siteContent["main-content"]["features-content"]
addContent[1].textContent = siteContent["main-content"]["about-content"]
addContent[2].textContent = siteContent["main-content"]["services-content"]
addContent[3].textContent = siteContent["main-content"]["product-content"]
addContent[4].textContent = siteContent["main-content"]["vision-content"]
addContent[5].textContent = siteContent["contact"]["address"]
addContent[6].textContent = siteContent["contact"]["phone"]
addContent[7].textContent = siteContent["contact"]["email"]
addContent[8].textContent = siteContent["footer"]["copyright"]


const contactHeader = document.querySelector('contact-h4');
contactHeader.textContent = siteContent['contact']['contact-h4']

const addContacts = document.querySelectorAll('contact p');
addContacts[0].textContent = siteContent['contact']['address']
addContacts[1].textContent = siteContent['contact']['phone']
addContacts[2].textContent = siteContent['contact']['email']

const footer = document.querySelector('foot p');
footer.textContent = siteContent['footer']['copyright']