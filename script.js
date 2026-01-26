// ===================================
// Product Data
// ===================================
const products = [
    {
        name: "Fancy Envelopes",
        description: "Handcrafted decorative envelopes for special occasions and gifts",
        price: "PKR 400-500",
        image: "images/fancyenvelopes.jpeg"
    },
    {
        name: "Kitchen Décor",
        description: "Beautiful handmade decorations to brighten your kitchen space",
        price: "PKR 500-600",
        image: "images/kitchendecor.jpeg"
    },
    {
        name: "Fridge Magnets",
        description: "Cute and colorful magnets crafted with love and creativity",
        price: "PKR 400-450",
        image: "images/fridgemagnets.jpeg"
    },
    {
        name: "Resin Jewellery",
        description: "Unique handcrafted resin jewelry pieces for every style",
        price: "PKR 550-600",
        image: "images/resinjewellery.jpeg"
    },
    {
        name: "Fabric Flowers",
        description: "Delicate fabric flowers that last forever, perfect for décor",
        price: "PKR 450-550",
        image: "images/fabricflowers.jpeg"
    },
    {
        name: "Clay & Resin Keychains",
        description: "Adorable keychains made with clay and resin materials",
        price: "PKR 400-500",
        image: "images/claykeychains.jpeg"
    },
    {
        name: "Clay Craft Pots",
        description: "Handmade decorative pots perfect for plants and storage",
        price: "PKR 500-600",
        image: "images/claypots.jpeg"
    },
    {
        name: "Decorated Bottles",
        description: "Beautifully decorated bottles for home décor and gifts",
        price: "PKR 550-600",
        image: "images/decoratedbottles.jpeg"
    },
    {
        name: "Fancy Bookmarks",
        description: "Elegant handmade bookmarks for book lovers",
        price: "PKR 400-450",
        image: "images/fancybookmarks.jpeg"
    },
    {
        name: "Sea Shell Crafts",
        description: "Unique crafts made from natural sea shells",
        price: "PKR 500-550",
        image: "images/seashellcrafts.jpeg"
    },
    {
        name: "Dried Flower Art",
        description: "Stunning art pieces featuring preserved dried flowers",
        price: "PKR 550-600",
        image: "images/driedflowerart.jpeg"
    },
    {
        name: "Glitter & Painted Crafts",
        description: "Sparkling handmade items with glitter and paint details",
        price: "PKR 450-550",
        image: "images/glitterandpaint.jpeg"
    }
];

// ===================================
// Navbar Scroll Effect
// ===================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===================================
// Mobile Menu Toggle
// ===================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===================================
// Smooth Scrolling for Navigation Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Generate Product Cards Dynamically
// ===================================
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    
    const phoneURL = `tel:+923347405971`;
    
    productCard.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">${product.price}</div>
            <a href="${phoneURL}" class="order-button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
                <span>Call to Order</span>
            </a>
        </div>
    `;
    
    return productCard;
}

// Render all products
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    products.forEach(product => {
        const card = createProductCard(product);
        productsGrid.appendChild(card);
    });
}

// ===================================
// Intersection Observer for Scroll Animations
// ===================================
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe section headers and feature items
    document.querySelectorAll('.section-header, .feature-item, .contact-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// ===================================
// Add Parallax Effect to Hero Shapes
// ===================================
function setupParallax() {
    const heroShapes = document.querySelectorAll('.hero-shape');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        heroShapes.forEach((shape, index) => {
            const speed = 0.1 + (index * 0.05);
            shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// ===================================
// Add Hover Effect to Product Cards
// ===================================
function setupProductCardEffects() {
    document.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.product-card');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.addEventListener('mouseenter', () => {
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    });
}

// ===================================
// Initialize Everything When DOM is Ready
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupScrollAnimations();
    setupParallax();
    setupProductCardEffects();
    
    // Add a small delay before showing animations
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// ===================================
// Performance: Debounce Scroll Events
// ===================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events for better performance
const debouncedScroll = debounce(() => {
    // Any scroll-based calculations can go here
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ===================================
// Add Active State to Navigation Links
// ===================================
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', debounce(updateActiveNavLink, 100));

// ===================================
// Prevent FOUC (Flash of Unstyled Content)
// ===================================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ===================================
// Console Message (Optional Easter Egg)
// ===================================
console.log('%c🎨 Z Art & Craft', 'color: #c17767; font-size: 24px; font-weight: bold;');
console.log('%cHandmade with ♥ | Website by Z Art & Craft', 'color: #7a9d96; font-size: 14px;');
