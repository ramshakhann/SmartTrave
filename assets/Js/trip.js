  // Sample JSON data for trips
        const tripsData = {
            "trips": [
                {
                    "id": 1,
                    "destination": "Bali, Indonesia",
                    "description": "Experience the perfect blend of culture, beaches, and nightlife in the Island of Gods.",
                    "price": 899,
                    "duration": "7 days",
                    "bestTime": "April to October",
                    "images": [
                        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    ],
                    "activities": ["Beach", "Surfing", "Temple Visits", "Yoga", "Spa"],
                    "attractions": ["Tanah Lot Temple", "Uluwatu Temple", "Tegallalang Rice Terraces", "Ubud Monkey Forest"],
                    "rating": 4.5
                },
                {
                    "id": 2,
                    "destination": "Paris, France",
                    "description": "Fall in love with the City of Light, its iconic landmarks, and world-class cuisine.",
                    "price": 1199,
                    "duration": "5 days",
                    "bestTime": "April to June, October to November",
                    "images": [
                        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        "https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        "https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    ],
                    "activities": ["Museum Visits", "City Tours", "Food Tasting", "Shopping", "River Cruises"],
                    "attractions": ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral", "Champs-Élysées", "Montmartre"],
                    "rating": 5
                },
                {
                    "id": 3,
                    "destination": "Santorini, Greece",
                    "description": "Enjoy breathtaking sunsets and stunning white-washed buildings in this Aegean paradise.",
                    "price": 1099,
                    "duration": "6 days",
                    "bestTime": "June to September",
                    "images": [
                        "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        "https://images.unsplash.com/photo-1590523278194-04c6f994d7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    ],
                    "activities": ["Beach", "Wine Tasting", "Boat Tours", "Hiking", "Photography"],
                    "attractions": ["Oia Village", "Fira", "Red Beach", "Akrotiri Archaeological Site", "Santorini Caldera"],
                    "rating": 5
                },
                {
                    "id": 4,
                    "destination": "Kyoto, Japan",
                    "description": "Immerse yourself in traditional Japanese culture with ancient temples and beautiful gardens.",
                    "price": 1299,
                    "duration": "8 days",
                    "bestTime": "March to May, October to November",
                    "images": [
                        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        "https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    ],
                    "activities": ["Temple Visits", "Tea Ceremonies", "Cherry Blossom Viewing", "Traditional Crafts", "Gardens"],
                    "attractions": ["Fushimi Inari Shrine", "Kinkaku-ji Temple", "Arashiyama Bamboo Grove", "Gion District", "Kiyomizu-dera Temple"],
                    "rating": 4.8
                },
                {
                    "id": 5,
                    "destination": "New York, USA",
                    "description": "Experience the energy of the Big Apple with its iconic skyline and cultural diversity.",
                    "price": 999,
                    "duration": "5 days",
                    "bestTime": "April to June, September to November",
                    "images": [
                        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    ],
                    "activities": ["Broadway Shows", "Museum Visits", "Shopping", "City Tours", "Food Tours"],
                    "attractions": ["Statue of Liberty", "Central Park", "Times Square", "Empire State Building", "Brooklyn Bridge"],
                    "rating": 4.7
                },
                {
                    "id": 6,
                    "destination": "Sydney, Australia",
                    "description": "Discover the vibrant harbor city with its iconic opera house and stunning beaches.",
                    "price": 1399,
                    "duration": "9 days",
                    "bestTime": "September to November, March to May",
                    "images": [
                        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        "https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        "https://images.unsplash.com/photo-1546268067-6bb892c583ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    ],
                    "activities": ["Beach", "Harbor Cruises", "Wildlife Encounters", "Hiking", "Wine Tasting"],
                    "attractions": ["Sydney Opera House", "Sydney Harbour Bridge", "Bondi Beach", "Taronga Zoo", "Blue Mountains"],
                    "rating": 4.6
                }
            ]
        };

        // Function to display trips
        function displayTrips(trips) {
            const tripCatalog = document.getElementById('trip-catalog');
            tripCatalog.innerHTML = '';
            
            if (trips.length === 0) {
                tripCatalog.innerHTML = `
                    <div class="no-results">
                        <i class="fas fa-search"></i>
                        <h3>No trips found</h3>
                        <p>Try adjusting your filters to find more options.</p>
                        <button class="trip-btn reset-filters-btn">Reset Filters</button>
                    </div>
                `;
                
                document.querySelector('.reset-filters-btn').addEventListener('click', () => {
                    document.querySelectorAll('.filter-group select').forEach(select => {
                        select.value = '';
                    });
                    displayTrips(tripsData.trips);
                });
                
                return;
            }
            
            trips.forEach(trip => {
                const stars = generateStarRating(trip.rating);
                
                const tripCard = document.createElement('div');
                tripCard.className = 'trip-card';
                tripCard.innerHTML = `
                    <div class="trip-gallery">
                        <img src="${trip.images[0]}" alt="${trip.destination}" class="trip-main-image">
                        <div class="trip-thumbnails">
                            ${trip.images.map((img, index) => `
                                <img src="${img}" alt="Thumbnail ${index + 1}" class="trip-thumbnail ${index === 0 ? 'active' : ''}" data-image="${img}">
                            `).join('')}
                        </div>
                        <div class="trip-price">From $${trip.price}</div>
                    </div>
                    <div class="trip-content">
                        <h3 class="trip-title">${trip.destination}</h3>
                        <p class="trip-description">${trip.description}</p>
                        
                        <div class="trip-details">
                            <div class="trip-detail-item">
                                <i class="fas fa-calendar-alt"></i>
                                <span>Duration: ${trip.duration}</span>
                            </div>
                            <div class="trip-detail-item">
                                <i class="fas fa-calendar-check"></i>
                                <span>Best Time: ${trip.bestTime}</span>
                            </div>
                        </div>
                        
                        <div class="trip-activities">
                            <h4 class="trip-subtitle">Activities</h4>
                            <div class="trip-tags">
                                ${trip.activities.map(activity => `
                                    <span class="trip-tag">${activity}</span>
                                `).join('')}
                            </div>
                        </div>
                        
                        <div class="trip-attractions">
                            <h4 class="trip-subtitle">Attractions</h4>
                            <div class="trip-tags">
                                ${trip.attractions.map(attraction => `
                                    <span class="trip-tag">${attraction}</span>
                                `).join('')}
                            </div>
                        </div>
                        
                        <div class="trip-actions">
                            <div class="trip-rating">
                                ${stars}
                            </div>
                            <button class="trip-btn">Book Now</button>
                        </div>
                    </div>
                `;
                
                tripCatalog.appendChild(tripCard);
                
                // Add event listeners for thumbnail images
                const thumbnails = tripCard.querySelectorAll('.trip-thumbnail');
                const mainImage = tripCard.querySelector('.trip-main-image');
                
                thumbnails.forEach(thumb => {
                    thumb.addEventListener('click', () => {
                        mainImage.src = thumb.dataset.image;
                        
                        thumbnails.forEach(t => t.classList.remove('active'));
                        thumb.classList.add('active');
                    });
                });
            });
        }
        
        // Function to generate star rating HTML
        function generateStarRating(rating) {
            let stars = '';
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 !== 0;
            
            for (let i = 0; i < fullStars; i++) {
                stars += '<i class="fas fa-star"></i>';
            }
            
            if (hasHalfStar) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            }
            
            const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
            for (let i = 0; i < emptyStars; i++) {
                stars += '<i class="far fa-star"></i>';
            }
            
            return stars;
        }
        
        // Function to filter trips
        function filterTrips() {
            const destinationFilter = document.getElementById('destination').value;
            const priceFilter = document.getElementById('price-range').value;
            const activityFilter = document.getElementById('activities').value;
            
            const filteredTrips = tripsData.trips.filter(trip => {
               
                if (destinationFilter && !trip.destination.toLowerCase().includes(destinationFilter)) {
                    return false;
                }
                
               
                if (priceFilter) {
                    const [min, max] = priceFilter.split('-');
                    if (max === '+') {
                        if (trip.price < parseInt(min)) return false;
                    } else {
                        if (trip.price < parseInt(min) || trip.price > parseInt(max)) return false;
                    }
                }
                
                
                if (activityFilter && !trip.activities.some(activity => 
                    activity.toLowerCase().includes(activityFilter))) {
                    return false;
                }
                
                return true;
            });
            
            displayTrips(filteredTrips);
        }
    
        // Initialize the page
        document.addEventListener('DOMContentLoaded', () => {
            // Display all trips initially
            displayTrips(tripsData.trips);
            
            // Add event listeners for filters
            document.querySelector('.apply-btn').addEventListener('click', filterTrips);
            document.querySelector('.reset-btn').addEventListener('click', () => {
                document.querySelectorAll('.filter-group select').forEach(select => {
                    select.value = '';
                });
                displayTrips(tripsData.trips);
            });
            
            // Mobile menu toggle
            document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
                document.querySelector('.nav-links').classList.toggle('active');
            });
            
            // Navbar scroll effect
            window.addEventListener('scroll', () => {
                const navbar = document.querySelector('.navbar');
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
        });