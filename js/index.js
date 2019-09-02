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
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Set Nav content
const navItems = document.querySelector('nav').children;
const navItemsArray = Array.from(navItems)

navItemsArray.forEach((navItem, index) => {
  const key = "nav-item-" + Number(index + 1);
  console.log(key)
  navItem.textContent = siteContent.nav[key]
})

//Fill out CTA section using the children function of the class
const ctaText = document.querySelector('.cta-text').children
ctaText[0].textContent = siteContent.cta.h1
ctaText[1].textContent = siteContent.cta.button

let ctaLogo = document.getElementById("cta-img");
ctaLogo.setAttribute('src', siteContent["cta"]["img-src"])

//Get all elements with class name `text-content`
var textContentSections = document.getElementsByClassName('text-content')

//Traverse through `textContentSections` using array notation. First is the Features section, so the children of that is obtained and their text content is set resoectively...

textContentSections[0].children[0].textContent = siteContent["main-content"]["features-h4"]
textContentSections[0].children[1].textContent = siteContent["main-content"]["features-content"]



textContentSections[1].children[0].textContent = siteContent["main-content"]["about-h4"]
textContentSections[1].children[1].textContent = siteContent["main-content"]["about-content"]


let mainImage = document.getElementById("middle-img");
mainImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])


textContentSections[2].children[0].textContent = siteContent["main-content"]["services-h4"]
textContentSections[2].children[1].textContent = siteContent["main-content"]["services-content"]



textContentSections[3].children[0].textContent = siteContent["main-content"]["product-h4"]
textContentSections[3].children[1].textContent = siteContent["main-content"]["product-content"]



textContentSections[4].children[0].textContent = siteContent["main-content"]["vision-h4"]
textContentSections[4].children[1].textContent = siteContent["main-content"]["vision-content"]


const contactH4 = document.querySelector('.contact h4')
contactH4.textContent = siteContent.contact["contact-h4"]

const contactSectionParagraphs = document.querySelectorAll('.contact p')

contactSectionParagraphs[0].textContent = siteContent.contact.address
contactSectionParagraphs[1].textContent = siteContent.contact.phone
contactSectionParagraphs[2].textContent = siteContent.contact.email
