const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;

// Shown if an image URL fails to load
export const fallbackImage =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="100%" height="100%" fill="#e2e8f0"/><text x="50%" y="50%" font-family="Arial" font-size="40" fill="#64748b" text-anchor="middle">DigitalHub</text></svg>'
  );

export const onImgError = (e) => {
  e.currentTarget.onerror = null;
  e.currentTarget.src = fallbackImage;
};

export const formatPrice = (n) => '₹' + n.toLocaleString('en-IN');

export const getDiscount = (p) => Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);

export const categories = ['Mobiles', 'Laptops', 'Smart Watches', 'TVs', 'Accessories'];

export const categoryImages = {
  Mobiles: img('photo-1511707171634-5f897ff02aa9'),
  Laptops: img('photo-1496181133206-80ce9b88a853'),
  'Smart Watches': img('photo-1523275335684-37898b6baf30'),
  TVs: img('photo-1593359677879-a4bb92f829d1'),
  Accessories: img('photo-1505740420928-5e560c06d30e'),
};

export const products = [
  // ---------- Mobiles ----------
  {
    id: 1, name: 'iPhone 16', brand: 'Apple', category: 'Mobiles', price: 79900, originalPrice: 89900,
    rating: 4.7, reviews: 2140, featured: true, addedOn: '2026-08-10',
    image: img('photo-1592899677977-9c10ca588bbd'),
    short: '6.1" Super Retina XDR display with the A18 chip.',
    description: 'iPhone 16 brings a powerful A18 chip, a brilliant Super Retina XDR display, and a dual-camera system that captures stunning photos and 4K video.',
    specs: { Display: '6.1" Super Retina XDR', Processor: 'A18 Bionic', Storage: '128 GB', Camera: '48 MP + 12 MP', Battery: 'Up to 22 hrs video' },
    colors: ['Black', 'White', 'Pink', 'Teal'],
  },
  {
    id: 2, name: 'Samsung Galaxy S25', brand: 'Samsung', category: 'Mobiles', price: 74999, originalPrice: 84999,
    rating: 4.6, reviews: 1820, featured: true, addedOn: '2026-08-05',
    image: img('photo-1598327105666-5b89351aff97'),
    short: 'Galaxy AI smartphone with a bright 120Hz AMOLED screen.',
    description: 'Galaxy S25 features Galaxy AI tools, a pro-grade triple camera and an all-day battery in a sleek, lightweight design.',
    specs: { Display: '6.2" Dynamic AMOLED 2X', Processor: 'Snapdragon 8 Elite', RAM: '12 GB', Storage: '256 GB', Battery: '4000 mAh' },
    colors: ['Navy', 'Silver', 'Mint'],
  },
  {
    id: 3, name: 'OnePlus 13', brand: 'OnePlus', category: 'Mobiles', price: 69999, originalPrice: 76999,
    rating: 4.5, reviews: 1310, featured: false, addedOn: '2026-07-20',
    image: img('photo-1601784551446-20c9e07cdbdb'),
    short: 'Flagship speed with 100W fast charging.',
    description: 'OnePlus 13 delivers flagship performance, a Hasselblad-tuned camera system and ultra-fast 100W charging.',
    specs: { Display: '6.82" LTPO AMOLED', Processor: 'Snapdragon 8 Elite', RAM: '12 GB', Storage: '256 GB', Battery: '6000 mAh' },
    colors: ['Black', 'Blue', 'White'],
  },
  {
    id: 4, name: 'Google Pixel 9', brand: 'Google', category: 'Mobiles', price: 74999, originalPrice: 79999,
    rating: 4.4, reviews: 980, featured: false, addedOn: '2026-06-15',
    image: img('photo-1585060544812-6b45742d762f'),
    short: 'Clean Android with the best Google AI camera features.',
    description: 'Pixel 9 offers smart Google AI features, an excellent camera and seven years of software updates.',
    specs: { Display: '6.3" OLED 120Hz', Processor: 'Google Tensor G4', RAM: '12 GB', Storage: '128 GB', Battery: '4700 mAh' },
    colors: ['Obsidian', 'Porcelain', 'Peony'],
  },
  // ---------- Laptops ----------
  {
    id: 5, name: 'MacBook Air M3', brand: 'Apple', category: 'Laptops', price: 99900, originalPrice: 114900,
    rating: 4.8, reviews: 1560, featured: true, addedOn: '2026-08-12',
    image: img('photo-1517336714731-489689fd1ca8'),
    short: 'Ultra-thin laptop with the Apple M3 chip.',
    description: 'MacBook Air with the M3 chip is incredibly thin, silent and fast, with up to 18 hours of battery life.',
    specs: { Display: '13.6" Liquid Retina', Processor: 'Apple M3', RAM: '8 GB', Storage: '256 GB SSD', Battery: 'Up to 18 hrs' },
    colors: ['Midnight', 'Starlight', 'Space Grey'],
  },
  {
    id: 6, name: 'Dell Inspiron 15', brand: 'Dell', category: 'Laptops', price: 54990, originalPrice: 68990,
    rating: 4.2, reviews: 870, featured: false, addedOn: '2026-05-18',
    image: img('photo-1588872657578-7efd1f1555ed'),
    short: 'Reliable everyday laptop with Intel Core i5.',
    description: 'Dell Inspiron 15 is a dependable laptop for students and professionals with a fast SSD and a full HD display.',
    specs: { Display: '15.6" Full HD', Processor: 'Intel Core i5 13th Gen', RAM: '16 GB', Storage: '512 GB SSD', Battery: 'Up to 9 hrs' },
    colors: ['Silver', 'Black'],
  },
  {
    id: 7, name: 'HP Pavilion 14', brand: 'HP', category: 'Laptops', price: 62990, originalPrice: 74999,
    rating: 4.3, reviews: 640, featured: true, addedOn: '2026-06-30',
    image: img('photo-1525547719571-a2d4ac8945e2'),
    short: 'Sleek metal-body laptop with Intel Core i7.',
    description: 'HP Pavilion 14 combines a premium design with strong performance and long battery life for everyday productivity.',
    specs: { Display: '14" Full HD IPS', Processor: 'Intel Core i7', RAM: '16 GB', Storage: '512 GB SSD', Battery: 'Up to 10 hrs' },
    colors: ['Silver', 'Gold'],
  },
  {
    id: 8, name: 'Lenovo IdeaPad Slim 3', brand: 'Lenovo', category: 'Laptops', price: 45990, originalPrice: 59990,
    rating: 4.1, reviews: 720, featured: false, addedOn: '2026-04-22',
    image: img('photo-1496181133206-80ce9b88a853'),
    short: 'Budget-friendly slim laptop with AMD Ryzen 5.',
    description: 'Lenovo IdeaPad Slim 3 is light, affordable and powerful enough for study, work and entertainment.',
    specs: { Display: '15.6" Full HD', Processor: 'AMD Ryzen 5', RAM: '8 GB', Storage: '512 GB SSD', Battery: 'Up to 8 hrs' },
    colors: ['Grey', 'Blue'],
  },
  // ---------- Smart Watches ----------
  {
    id: 9, name: 'Apple Watch SE', brand: 'Apple', category: 'Smart Watches', price: 29900, originalPrice: 32900,
    rating: 4.6, reviews: 1100, featured: true, addedOn: '2026-08-01',
    image: img('photo-1579586337278-3befd40fd17a'),
    short: 'Essential fitness and safety features on your wrist.',
    description: 'Apple Watch SE tracks workouts, monitors your heart rate and keeps you connected with calls and notifications.',
    specs: { Display: 'Retina LTPO OLED', Sensors: 'Heart rate, accelerometer', Battery: '18 hrs', 'Water Resistance': '50 m', Connectivity: 'Bluetooth, GPS' },
    colors: ['Midnight', 'Starlight', 'Silver'],
  },
  {
    id: 10, name: 'Samsung Galaxy Watch 7', brand: 'Samsung', category: 'Smart Watches', price: 29999, originalPrice: 32999,
    rating: 4.4, reviews: 760, featured: false, addedOn: '2026-07-11',
    image: img('photo-1546868871-7041f2a55e12'),
    short: 'Advanced health tracking with Galaxy AI.',
    description: 'Galaxy Watch 7 offers sleep coaching, body composition analysis and a bright AMOLED display.',
    specs: { Display: '1.5" Super AMOLED', Sensors: 'BioActive sensor', Battery: '40 hrs', 'Water Resistance': '5 ATM', Connectivity: 'Bluetooth, Wi-Fi, GPS' },
    colors: ['Green', 'Silver', 'Cream'],
  },
  {
    id: 11, name: 'Noise ColorFit Pro 4', brand: 'Noise', category: 'Smart Watches', price: 3999, originalPrice: 6999,
    rating: 4.1, reviews: 5400, featured: true, addedOn: '2026-05-03',
    image: img('photo-1544244015-0df4b3ffc6b0'),
    short: 'Bluetooth calling smartwatch with a 1.85" display.',
    description: 'Noise ColorFit Pro 4 packs Bluetooth calling, 100+ sports modes and health monitoring at a great price.',
    specs: { Display: '1.85" TFT', Sensors: 'SpO2, heart rate', Battery: '7 days', 'Water Resistance': 'IP68', Connectivity: 'Bluetooth 5.3' },
    colors: ['Black', 'Blue', 'Rose Pink'],
  },
  {
    id: 12, name: 'boAt Wave Call 2', brand: 'boAt', category: 'Smart Watches', price: 1799, originalPrice: 6999,
    rating: 4.0, reviews: 8900, featured: false, addedOn: '2026-03-14',
    image: img('photo-1461151304267-38535e780c79'),
    short: 'Affordable smart watch with calling and 700+ watch faces.',
    description: 'boAt Wave Call 2 gives you Bluetooth calling, health tracking and a large HD display for everyday use.',
    specs: { Display: '1.83" HD', Sensors: 'SpO2, heart rate', Battery: '10 days', 'Water Resistance': 'IP68', Connectivity: 'Bluetooth 5.3' },
    colors: ['Black', 'Navy', 'Red'],
  },
  // ---------- TVs ----------
  {
    id: 13, name: 'Sony Bravia 55" 4K', brand: 'Sony', category: 'TVs', price: 89990, originalPrice: 119900,
    rating: 4.7, reviews: 430, featured: true, addedOn: '2026-07-25',
    image: img('photo-1593305841991-05c297ba4575'),
    short: '55-inch 4K Google TV with X1 processor.',
    description: 'Sony Bravia delivers rich colours and sharp detail with 4K HDR and Dolby Atmos sound.',
    specs: { Size: '55 inch', Resolution: '4K Ultra HD', 'Refresh Rate': '60 Hz', OS: 'Google TV', Audio: '20 W Dolby Atmos' },
    colors: ['Black'],
  },
  {
    id: 14, name: 'Samsung Smart TV 43" Crystal 4K', brand: 'Samsung', category: 'TVs', price: 32990, originalPrice: 44900,
    rating: 4.3, reviews: 1250, featured: false, addedOn: '2026-06-02',
    image: img('photo-1593359677879-a4bb92f829d1'),
    short: '43-inch Crystal 4K UHD Smart TV.',
    description: 'Samsung Crystal 4K brings vivid picture quality and smart features with built-in streaming apps.',
    specs: { Size: '43 inch', Resolution: '4K Ultra HD', 'Refresh Rate': '50 Hz', OS: 'Tizen', Audio: '20 W' },
    colors: ['Black'],
  },
  {
    id: 15, name: 'LG Smart TV 55" UHD', brand: 'LG', category: 'TVs', price: 47990, originalPrice: 69990,
    rating: 4.4, reviews: 990, featured: true, addedOn: '2026-05-27',
    image: img('photo-1593359677879-a4bb92f829d1'),
    short: '55-inch UHD TV powered by webOS.',
    description: 'LG UHD TV offers sharp 4K visuals, AI Sound and the easy-to-use webOS smart platform.',
    specs: { Size: '55 inch', Resolution: '4K Ultra HD', 'Refresh Rate': '60 Hz', OS: 'webOS', Audio: '20 W AI Sound' },
    colors: ['Black'],
  },
  {
    id: 16, name: 'OnePlus TV Y1S Pro 43"', brand: 'OnePlus', category: 'TVs', price: 26999, originalPrice: 37999,
    rating: 4.2, reviews: 1500, featured: false, addedOn: '2026-04-09',
    image: img('photo-1593305841991-05c297ba4575'),
    short: '43-inch 4K Android TV with Dolby Audio.',
    description: 'OnePlus TV Y1S Pro brings a 4K display, Dolby Audio and a smooth Android TV experience at a value price.',
    specs: { Size: '43 inch', Resolution: '4K Ultra HD', 'Refresh Rate': '60 Hz', OS: 'Android TV', Audio: '24 W Dolby Audio' },
    colors: ['Black'],
  },
  // ---------- Accessories ----------
  {
    id: 17, name: 'AirPods Pro (2nd Gen)', brand: 'Apple', category: 'Accessories', price: 24900, originalPrice: 26900,
    rating: 4.8, reviews: 3200, featured: true, addedOn: '2026-08-15',
    image: img('photo-1572569511254-d8f925fe2cbb'),
    short: 'Active noise cancellation with Adaptive Audio.',
    description: 'AirPods Pro deliver rich sound, powerful noise cancellation and a comfortable fit with a MagSafe charging case.',
    specs: { Type: 'In-ear TWS', 'Noise Cancellation': 'Active', Battery: 'Up to 6 hrs (30 hrs with case)', Connectivity: 'Bluetooth 5.3', Charging: 'USB-C / MagSafe' },
    colors: ['White'],
  },
  {
    id: 18, name: 'JBL Flip 6 Bluetooth Speaker', brand: 'JBL', category: 'Accessories', price: 9999, originalPrice: 11999,
    rating: 4.5, reviews: 2600, featured: false, addedOn: '2026-07-01',
    image: img('photo-1608043152269-423dbba4e7e1'),
    short: 'Portable waterproof speaker with powerful sound.',
    description: 'JBL Flip 6 delivers bold JBL Pro Sound, is IP67 waterproof and dustproof, and plays up to 12 hours.',
    specs: { Type: 'Portable speaker', Output: '30 W', Battery: '12 hrs', 'Water Resistance': 'IP67', Connectivity: 'Bluetooth 5.1' },
    colors: ['Black', 'Blue', 'Red'],
  },
  {
    id: 19, name: 'Sony WH-CH720N Headphones', brand: 'Sony', category: 'Accessories', price: 8990, originalPrice: 14990,
    rating: 4.4, reviews: 1900, featured: true, addedOn: '2026-06-20',
    image: img('photo-1505740420928-5e560c06d30e'),
    short: 'Lightweight wireless headphones with noise cancelling.',
    description: 'Sony WH-CH720N offers noise cancelling, clear calls and up to 35 hours of battery life.',
    specs: { Type: 'Over-ear wireless', 'Noise Cancellation': 'Active', Battery: '35 hrs', Connectivity: 'Bluetooth 5.2', Charging: 'USB-C' },
    colors: ['Black', 'White', 'Blue'],
  },
  {
    id: 20, name: 'Redmi Power Bank 20000mAh', brand: 'Redmi', category: 'Accessories', price: 1999, originalPrice: 2999,
    rating: 4.2, reviews: 4100, featured: false, addedOn: '2026-03-01',
    image: img('photo-1609091839311-d5365f9ff1c5'),
    short: '20000 mAh power bank with 18W fast charging.',
    description: 'Redmi Power Bank keeps your devices charged all week with dual output ports and 18W fast charging.',
    specs: { Capacity: '20000 mAh', Output: '18 W fast charging', Ports: '2 USB-A + 1 USB-C', Input: 'USB-C / Micro USB', Weight: '430 g' },
    colors: ['Black', 'Silver'],
  },
];
