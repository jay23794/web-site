$(document).ready(function () {
    ScrollReveal().reveal('.headline',{ delay: 500 });
     var touristPlaces = [
        {
            id: 1,
            details:
                "Experience the magic of Fateh Sagar Lake, where shimmering waters meet the majestic Aravalli mountains.  Explore enchanting islands, bask in the serene atmosphere, and create unforgettable memories in the heart of Udaipur.  Discover tranquility and breathtaking beauty at Fateh Sagar.1",
            title: "Fateh Sagar Lake",
            src:"/assets/rental/swift.png"
        },
        {
            id: 2,
            details:
                "Where history whispers on the breeze, and romance dances on the water, lies Lake Pichola.  Home to the iconic Lake Palace, it's a timeless masterpiece.  Glide across its shimmering surface, and let the magic of Udaipur unfold before your eyes.",
            title: "Pichola Lake",
            src:"/assets/rental/fortuner.png"
        },
        {
            id: 3,
            details:
                "Nestled amidst the Aravalli hills, the Sanwariya Seth Mandir stands as a beacon of spirituality, attracting pilgrims from far and wide. Its serene ambiance and intricate architecture create a sense of peace and tranquility that envelops visitors upon entering",
            title: "Savariya Seth Mandir",
            src:"/assets/rental/innova.png"
           
        },
        {
            id: 4,
            details:
                "Escape the bustling city and immerse yourself in the tranquility of nature as you glide through the serene hills. The ropeway offers a peaceful and relaxing journey, allowing you to connect with the natural beauty of Udaipur.",
            title: "Karani Mata Mandir Cable Car",
             src:"/assets/rental/fortuner.png"
           
        },
        {
            id: 5,
            details:
                "Escape the bustling city and immerse yourself in the tranquility of nature as you glide through the serene hills. The ropeway offers a peaceful and relaxing journey, allowing you to connect with the natural beauty of Udaipur.",
            title: "Saheliyo Ki Bari",
              src:"/assets/rental/swift.png"
        },
        {
            id: 6,
            details:
                "Built in the 18th century, Sajjangarh Palace is a blend of Rajput and Mughal architectural styles. Its intricate carvings, delicate latticework, and imposing structure make it a masterpiece of architectural beauty.",
            title: "Sajjangarh Palace",
             src:"/assets/rental/fortuner.png"
        },
        {
            id: 7,
            details: "The calm waters of Badi Lake mirror the vast sky above, creating a sense of tranquility and peace.  The reflections of the clouds and surrounding hills paint a breathtaking picture.",
            title: "Badi Lake",
             src:"/assets/rental/innova.png"
        },
        {
            id: 8,
            details:
                "Bagore Ki Haveli, once a grand residence of the Mewar prime ministers, now stands as a captivating museum. Its intricate architecture and rich history offer a fascinating glimpse into the lives of the aristocratic families of Udaipur",
            title: "Bagore Ki Haweli",
            src:"/assets/rental/fortuner.png"
        },
    ];
    console.log(touristPlaces[0]["details"]);

    $("#title").html(touristPlaces[0]["title"]);
    $("#description").html(touristPlaces[0]["details"]);
    $("#rental_car").attr("src", touristPlaces[0]["src"]);
    $("#maincover").bind("slide.bs.carousel", function (e) {
        console.log(e["to"]);

        $("#title").html(touristPlaces[e["to"]]["title"]);
        $("#description").html(touristPlaces[e["to"]]["details"]);
        $("#rental_car").attr("src", touristPlaces[e["to"]]["src"]);
    });
});

const slider = document.getElementById("slider");

function nextSlide() { slider.scrollBy({ left: 320, behavior: "smooth" }); }
function prevSlide() { slider.scrollBy({ left: -320, behavior: "smooth" }); }


let currentIndex = 0;
const slides = document.querySelectorAll("#carousel img");
const dots = document.querySelectorAll(".dot");
const title = document.getElementById("carousel-title");
const desc = document.getElementById("carousel-desc");

const slideTexts = [
    { title: "Nature", desc: "A beautiful view of nature." },
    { title: "City Life", desc: "A stunning cityscape at night." },
    { title: "Technology", desc: "Innovation shaping the future." }
];

function updateCarousel() {
    document.getElementById("carousel").style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle("bg-white", index === currentIndex);
        dot.classList.toggle("bg-gray-400", index !== currentIndex);
    });
    title.textContent = slideTexts[currentIndex].title;
    desc.textContent = slideTexts[currentIndex].desc;
}

function nextSlideHotelBook() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}

function prevSlideHotelBook() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

// Auto-play every 3 seconds
setInterval(nextSlide, 3000);