// ── PROPERTIES DATA ──
const props = [
  {id:1,title:"Luxury Sea-View Penthouse",city:"Mumbai",loc:"Worli, Mumbai",type:"Penthouse",listing:"buy",luxury:true,price:38500000,priceStr:"₹3.85 Cr",bhk:4,area:"4,200 sq ft",baths:5,parking:3,img:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",desc:"Breathtaking panoramic sea views from this ultra-luxury penthouse in the heart of Worli. Features Italian marble flooring, German modular kitchen, and private rooftop terrace.",feats:["Sea View","Rooftop Terrace","Private Lift","Smart Home","RERA Verified","Gym & Pool"]},
  {id:2,title:"Modern 3BHK Apartment",city:"Bengaluru",loc:"Whitefield, Bengaluru",type:"Apartment",listing:"buy",luxury:false,price:9500000,priceStr:"₹95 Lakh",bhk:3,area:"1,850 sq ft",baths:3,parking:2,img:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80",desc:"Beautifully designed 3BHK in Whitefield's prime tech corridor. Walking distance from ITPL, with premium amenities and excellent connectivity.",feats:["Club House","Swimming Pool","Gym","Power Backup","RERA Verified","Metro Nearby"]},
  {id:3,title:"Heritage Villa with Garden",city:"Delhi",loc:"Vasant Vihar, New Delhi",type:"Villa",listing:"buy",luxury:true,price:65000000,priceStr:"₹6.5 Cr",bhk:5,area:"6,800 sq ft",baths:6,parking:4,img:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80",desc:"An exquisite heritage-style villa in the prestigious Vasant Vihar locality with a lush private garden, home theater, and staff quarters.",feats:["Private Garden","Home Theater","Staff Qtrs","Modular Kitchen","Solar Power","Security"]},
  {id:4,title:"Premium 2BHK with Terrace",city:"Pune",loc:"Koregaon Park, Pune",type:"Apartment",listing:"buy",luxury:false,price:8200000,priceStr:"₹82 Lakh",bhk:2,area:"1,350 sq ft",baths:2,parking:1,img:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80",desc:"Spacious 2BHK with private terrace in the most coveted Koregaon Park area. Close to restaurants, malls, and schools.",feats:["Private Terrace","Modular Kitchen","Covered Parking","24/7 Security","RERA Verified","Green Building"]},
  {id:5,title:"Furnished Studio Apartment",city:"Hyderabad",loc:"HITEC City, Hyderabad",type:"Studio",listing:"rent",luxury:false,price:28000,priceStr:"₹28K/mo",bhk:1,area:"650 sq ft",baths:1,parking:1,img:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80",desc:"Fully furnished studio in the heart of HITEC City. Ideal for IT professionals with all amenities included.",feats:["Fully Furnished","High-Speed WiFi","AC","Metro Access","24/7 Security","Gym"]},
  {id:6,title:"Luxury Row House",city:"Chennai",loc:"Adyar, Chennai",type:"Row House",listing:"buy",luxury:true,price:18500000,priceStr:"₹1.85 Cr",bhk:4,area:"2,900 sq ft",baths:4,parking:2,img:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=600&q=80",desc:"Premium row house in serene Adyar locality with private garden space and modern finishes throughout.",feats:["Private Garden","Vastu Compliant","Modular Kitchen","RERA Verified","Gated Community","School Nearby"]},
  {id:7,title:"Investment 2BHK Flat",city:"Noida",loc:"Sector 137, Noida",type:"Apartment",listing:"buy",luxury:false,price:5800000,priceStr:"₹58 Lakh",bhk:2,area:"1,100 sq ft",baths:2,parking:1,img:"https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=600&q=80",desc:"High ROI apartment in Noida's fastest-growing sector. Excellent metro connectivity and appreciation potential.",feats:["Metro Nearby","High ROI","RERA Verified","Club House","Shopping Mall","Expressway Access"]},
  {id:8,title:"Designer 3BHK Penthouse",city:"Gurgaon",loc:"Golf Course Road, Gurgaon",type:"Penthouse",listing:"buy",luxury:true,price:28000000,priceStr:"₹2.8 Cr",bhk:3,area:"3,100 sq ft",baths:4,parking:2,img:"https://images.unsplash.com/photo-1600607687939-ce8a6d349fb4?auto=format&fit=crop&w=600&q=80",desc:"Stunning designer penthouse on Golf Course Road with panoramic city views and world-class amenities.",feats:["City View","Designer Interiors","Private Terrace","Concierge","Valet Parking","Infinity Pool"]},
];

// ── SOLD INBOX DATA ──
const soldProps = [
  {id:101,title:"Luxury 4BHK Sea-View Apartment",city:"Mumbai",loc:"Bandra West, Mumbai",type:"Apartment",category:"luxury",soldPrice:"₹4.2 Cr",originalPrice:"₹3.9 Cr",soldDate:"Feb 2025",daysOnMarket:18,bhk:4,area:"3,800 sq ft",baths:4,parking:2,img:"https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80",desc:"This landmark sea-view apartment in Bandra West sold above asking price within 18 days.",feats:["Sea View","Premium Finish","Smart Home","RERA Verified"],buyer:"NRI Buyer from UAE",agent:"Rahul Sharma",highlight:"Sold 7.7% above asking",timeline:[{label:"Listed",date:"Jan 15, 2025"},{label:"First Viewing",date:"Jan 17, 2025"},{label:"Offer Received",date:"Jan 28, 2025"},{label:"Deal Closed",date:"Feb 2, 2025"}],unread:true},
  {id:102,title:"Modern 3BHK Tech Corridor Flat",city:"Bengaluru",loc:"Whitefield, Bengaluru",type:"Apartment",category:"affordable",soldPrice:"₹92 Lakh",originalPrice:"₹95 Lakh",soldDate:"Jan 2025",daysOnMarket:22,bhk:3,area:"1,750 sq ft",baths:3,parking:1,img:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80",desc:"Whitefield demand from tech professionals drove this quick sale. Buyer relocated from Hyderabad for an IT role.",feats:["ITPL Nearby","Gym & Pool","Power Backup","Metro Access"],buyer:"IT Professional",agent:"Priya Nair",highlight:"Sold in 22 days",timeline:[{label:"Listed",date:"Dec 20, 2024"},{label:"Site Visit",date:"Dec 23, 2024"},{label:"Negotiation",date:"Jan 5, 2025"},{label:"Registry Done",date:"Jan 11, 2025"}],unread:true},
  {id:103,title:"Heritage Villa — Vasant Vihar",city:"Delhi",loc:"Vasant Vihar, New Delhi",type:"Villa",category:"luxury",soldPrice:"₹7.1 Cr",originalPrice:"₹6.5 Cr",soldDate:"Dec 2024",daysOnMarket:12,bhk:5,area:"6,800 sq ft",baths:6,parking:4,img:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400&q=80",desc:"One of Delhi's most exclusive transactions of 2024. Bidding war between two HNI buyers.",feats:["Private Garden","Home Theater","Staff Quarters","Solar Power"],buyer:"Business Family",agent:"Rahul Sharma",highlight:"9% above asking — bidding war",timeline:[{label:"Listed",date:"Nov 28, 2024"},{label:"5 Site Visits",date:"Nov 30–Dec 5, 2024"},{label:"Competing Offers",date:"Dec 8, 2024"},{label:"Deal Finalized",date:"Dec 10, 2024"}],unread:false},
  {id:104,title:"Designer 2BHK — Koregaon Park",city:"Pune",loc:"Koregaon Park, Pune",type:"Apartment",category:"affordable",soldPrice:"₹79 Lakh",originalPrice:"₹82 Lakh",soldDate:"Jan 2025",daysOnMarket:31,bhk:2,area:"1,250 sq ft",baths:2,parking:1,img:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=400&q=80",desc:"Young couple purchased this as their first home. Negotiated ₹3 Lakh below listed price.",feats:["Private Terrace","Modular Kitchen","RERA Verified","24/7 Security"],buyer:"First-Time Home Buyers",agent:"Vikram Patel",highlight:"Negotiated ₹3L below asking",timeline:[{label:"Listed",date:"Dec 5, 2024"},{label:"First Viewing",date:"Dec 9, 2024"},{label:"Offer Made",date:"Dec 28, 2024"},{label:"Possession",date:"Feb 18, 2025"}],unread:false},
  {id:105,title:"Row House — Adyar Premium",city:"Chennai",loc:"Adyar, Chennai",type:"Row House",category:"luxury",soldPrice:"₹1.92 Cr",originalPrice:"₹1.85 Cr",soldDate:"Feb 2025",daysOnMarket:9,bhk:4,area:"2,900 sq ft",baths:4,parking:2,img:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=400&q=80",desc:"Fastest sale in our Chennai office this quarter. Gated row houses in Adyar are extremely rare.",feats:["Private Garden","Gated Community","Vastu Compliant","School Nearby"],buyer:"Senior Executive",agent:"Ananya Reddy",highlight:"Sold in just 9 days!",timeline:[{label:"Listed",date:"Jan 28, 2025"},{label:"4 Viewings",date:"Jan 28–30, 2025"},{label:"Offer",date:"Feb 3, 2025"},{label:"Closed",date:"Feb 6, 2025"}],unread:true},
  {id:106,title:"Investment Flat — Noida Sector 137",city:"Noida",loc:"Sector 137, Noida",type:"Apartment",category:"affordable",soldPrice:"₹56 Lakh",originalPrice:"₹58 Lakh",soldDate:"Mar 2025",daysOnMarket:44,bhk:2,area:"1,050 sq ft",baths:2,parking:1,img:"https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=400&q=80",desc:"Investor bought for rental income from IT professionals. Expected rental yield 5.2% per annum.",feats:["Metro Nearby","High ROI","RERA Verified","Expressway Access"],buyer:"Real Estate Investor",agent:"Vikram Patel",highlight:"5.2% expected rental yield",timeline:[{label:"Listed",date:"Jan 18, 2025"},{label:"Multiple Enquiries",date:"Jan–Feb 2025"},{label:"Offer Accepted",date:"Feb 28, 2025"},{label:"Registry",date:"Mar 4, 2025"}],unread:false},
];

// ── SOLD BY TYPE DATA ──
const soldByType = [
  {id:201,title:"Luxury 4BHK Apartment",type:"Apartment",city:"Mumbai",loc:"Bandra West",soldPrice:"₹4.2 Cr",soldDate:"Feb 2025",days:18,area:"3,800 sq ft",bhk:4,img:"https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80",highlight:"Sold 7.7% above asking",nearby:["Phoenix Palladium Mall","Lilavati Hospital","Bandra Station","Sea Link"]},
  {id:202,title:"3BHK Tech Corridor Flat",type:"Apartment",city:"Bengaluru",loc:"Whitefield",soldPrice:"₹92 Lakh",soldDate:"Jan 2025",days:22,area:"1,750 sq ft",bhk:3,img:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80",highlight:"22 days · IT zone demand",nearby:["ITPL Tech Park","Phoenix Market City","Whitefield Metro","Columbia Asia Hospital"]},
  {id:203,title:"2BHK Investment Apartment",type:"Apartment",city:"Noida",loc:"Sector 137",soldPrice:"₹56 Lakh",soldDate:"Mar 2025",days:44,area:"1,050 sq ft",bhk:2,img:"https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=600&q=80",highlight:"5.2% rental yield",nearby:["Botanical Garden Metro","DLF Mall of India","Fortis Hospital","Expressway Junction"]},
  {id:204,title:"2BHK Premium Apartment",type:"Apartment",city:"Pune",loc:"Koregaon Park",soldPrice:"₹79 Lakh",soldDate:"Jan 2025",days:31,area:"1,250 sq ft",bhk:2,img:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80",highlight:"₹3L below asking · First home",nearby:["Osho Ashram","KP Lane Restaurants","Ruby Hall Clinic","Pune Airport"]},
  {id:205,title:"Heritage Villa with Garden",type:"Villa",city:"Delhi",loc:"Vasant Vihar",soldPrice:"₹7.1 Cr",soldDate:"Dec 2024",days:12,area:"6,800 sq ft",bhk:5,img:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80",highlight:"Bidding war · 9% above asking",nearby:["Vasant Vihar Market","DPS School","Fortis Hospital","IGI Airport T3"]},
  {id:206,title:"Luxury Gated Villa",type:"Villa",city:"Hyderabad",loc:"Jubilee Hills",soldPrice:"₹3.8 Cr",soldDate:"Jan 2025",days:15,area:"4,200 sq ft",bhk:4,img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",highlight:"NRI investment · Closed in 15 days",nearby:["Jubilee Hills Check Post","Apollo Hospital","Film Nagar","Inorbit Mall"]},
  {id:207,title:"Sea-View Penthouse",type:"Penthouse",city:"Mumbai",loc:"Worli",soldPrice:"₹8.5 Cr",soldDate:"Nov 2024",days:7,area:"5,100 sq ft",bhk:4,img:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",highlight:"7 days · Rare sea-view unit",nearby:["Worli Sea Face","Palladium Mall","Siddhivinayak Temple","BKC Business Hub"]},
  {id:208,title:"Golf Course Penthouse",type:"Penthouse",city:"Gurgaon",loc:"Golf Course Road",soldPrice:"₹2.8 Cr",soldDate:"Feb 2025",days:19,area:"3,100 sq ft",bhk:3,img:"https://images.unsplash.com/photo-1600607687939-ce8a6d349fb4?auto=format&fit=crop&w=600&q=80",highlight:"Corporate buyer · 19 days",nearby:["DLF Cyber City","Ambience Mall","MG Road Metro","Medanta Hospital"]},
  {id:209,title:"Premium Row House",type:"Row House",city:"Chennai",loc:"Adyar",soldPrice:"₹1.92 Cr",soldDate:"Feb 2025",days:9,area:"2,900 sq ft",bhk:4,img:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=600&q=80",highlight:"Sold in 9 days! Rarest type",nearby:["Adyar Beach","Apollo Hospitals","T Nagar Shopping","Chennai Airport"]},
  {id:210,title:"Riverside Row House",type:"Row House",city:"Pune",loc:"Kalyani Nagar",soldPrice:"₹1.45 Cr",soldDate:"Dec 2024",days:26,area:"2,400 sq ft",bhk:3,img:"https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&q=80",highlight:"IT family buyer",nearby:["KN Restaurants","Phoenix Citadel","Pune Airport","Aga Khan Palace"]},
  {id:211,title:"Colonial Bungalow",type:"Bungalow",city:"Delhi",loc:"Civil Lines",soldPrice:"₹5.6 Cr",soldDate:"Jan 2025",days:21,area:"5,500 sq ft",bhk:5,img:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80",highlight:"Heritage property · Rare find",nearby:["Delhi University","Coronation Park","AIIMS Delhi","Old Delhi Railway"]},
  {id:212,title:"Modern Bungalow",type:"Bungalow",city:"Bengaluru",loc:"Jayanagar",soldPrice:"₹4.1 Cr",soldDate:"Mar 2025",days:17,area:"4,800 sq ft",bhk:4,img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",highlight:"Sold to techie family",nearby:["Lalbagh Botanical Garden","4th Block Market","NIMHANS","Jayanagar Metro"]},
  {id:213,title:"Furnished Studio — HITEC City",type:"Studio",city:"Hyderabad",loc:"HITEC City",soldPrice:"₹38 Lakh",soldDate:"Feb 2025",days:11,area:"620 sq ft",bhk:1,img:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80",highlight:"100% furnished · IT relocation",nearby:["HITEC City IT Hub","Inorbit Mall","IKEA Hyderabad","Mindspace"]},
  {id:214,title:"Luxury Studio — Lower Parel",type:"Studio",city:"Mumbai",loc:"Lower Parel",soldPrice:"₹72 Lakh",soldDate:"Jan 2025",days:14,area:"780 sq ft",bhk:1,img:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80",highlight:"Corporate lease buyer",nearby:["One India Bulls Centre","High Street Phoenix","Lower Parel Station","Lodha Worli"]},
];

// ── LAND LISTINGS DATA ──
const landListings = [
  {id:301,title:"Residential Plot — Lonavala Hills",type:"Residential Plot",city:"Pune",loc:"Lonavala, Maharashtra",price:"₹85 Lakh",pricePerSqft:"₹1,800/sq ft",area:"4,722 sq ft",totalArea:"4,722 sq ft",img:"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",desc:"Prime hilltop residential plot with valley views in Lonavala's premium locality. Ideal for villa construction. MAHARERA approved layout with all utilities available at boundary.",feats:["Corner Plot","Valley View","MAHARERA Approved","Clear Title","Water & Electric"],nearby:["Lonavala Lake 2km","Mumbai-Pune Expressway 3km","Lonavala Station 4km","Imagica Theme Park 15km"],agent:"Vikram Patel"},
  {id:302,title:"Agricultural Land — Nashik",type:"Agricultural",city:"Nashik",loc:"Dindori Taluka, Nashik",price:"₹42 Lakh",pricePerSqft:"₹38/sq ft",area:"1.1 Acre",totalArea:"1.1 Acre (4,800 sq m)",img:"https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",desc:"Fertile agricultural land in Nashik's grape and wine cultivation belt. Bore well present. Suitable for viticulture, horticulture or farmhouse development.",feats:["Bore Well","Fertile Soil","Power Connection","NA Convertible","Near Wine Belt"],nearby:["Nashik City 28km","Sula Vineyards 12km","Dindori Market 6km","NH60 Highway 8km"],agent:"Rahul Sharma"},
  {id:303,title:"Commercial Site — Whitefield",type:"Commercial",city:"Bengaluru",loc:"Whitefield Main Road, Bengaluru",price:"₹3.2 Cr",pricePerSqft:"₹5,200/sq ft",area:"6,160 sq ft",totalArea:"6,160 sq ft (572 sq m)",img:"https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=600&q=80",desc:"High-visibility corner commercial site on Whitefield Main Road. BBMP approved. Suitable for retail, office complex or co-working space. 35,000 vehicles/day traffic.",feats:["Corner Plot","High Visibility","BBMP Approved","Commercial Zone","60 Ft Road"],nearby:["ITPL Tech Park 1.2km","Phoenix Market City 2km","Whitefield Metro 800m","EPIP Zone 1.5km"],agent:"Priya Nair"},
  {id:304,title:"NA Plot — Alibaug Beachside",type:"NA Plot",city:"Mumbai",loc:"Alibaug, Raigad",price:"₹1.1 Cr",pricePerSqft:"₹3,200/sq ft",area:"3,444 sq ft",totalArea:"3,444 sq ft (320 sq m)",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",desc:"Rare NA-approved beach-facing plot in Alibaug's most sought-after stretch. Walking distance to Alibaug beach. CRZ clearance available.",feats:["Non-Agricultural","Sea Facing","CRZ Cleared","Water Supply","Near Beach"],nearby:["Alibaug Beach 350m","Alibaug Market 2km","Ferry Terminal 3km","Mumbai via Ferry 90min"],agent:"Rahul Sharma"},
  {id:305,title:"Residential Plot — Hyderabad Pharma City",type:"Residential Plot",city:"Hyderabad",loc:"Genome Valley, Shamirpet",price:"₹58 Lakh",pricePerSqft:"₹2,100/sq ft",area:"2,760 sq ft",totalArea:"2,760 sq ft (256 sq m)",img:"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",desc:"DTCP approved layout plot near Hyderabad's upcoming Pharma City SEZ. Massive infrastructure development expected to double values within 5 years.",feats:["DTCP Approved","Near SEZ","Gated Layout","Underground Utilities","Parks & Roads"],nearby:["Pharma City SEZ 4km","Genome Valley 6km","Outer Ring Road 5km","Shamirpet Lake 3km"],agent:"Ananya Reddy"},
  {id:306,title:"Agricultural Land — Coorg Estates",type:"Agricultural",city:"Coorg",loc:"Madikeri, Kodagu",price:"₹1.8 Cr",pricePerSqft:"₹140/sq ft",area:"3 Acres",totalArea:"3 Acres (12,140 sq m)",img:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",desc:"Established coffee and pepper plantation estate in picturesque Coorg. Existing 150-year-old coffee plants producing ~2 tonnes/year. Includes small caretaker quarters.",feats:["Coffee Plantation","Pepper Estate","Water Springs","Caretaker Home","Tourist Potential"],nearby:["Madikeri Town 8km","Abbey Falls 12km","Raja's Seat 9km","Coorg Airport 45km"],agent:"Priya Nair"},
  {id:307,title:"Commercial Land — Aerocity Delhi",type:"Commercial",city:"Delhi",loc:"Aerocity, New Delhi",price:"₹8.5 Cr",pricePerSqft:"₹12,000/sq ft",area:"7,083 sq ft",totalArea:"7,083 sq ft (658 sq m)",img:"https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=600&q=80",desc:"Premium commercial land parcel adjacent to IGI Airport. Ideal for hotel, business centre or premium retail. Metro connectivity and zero traffic restriction zone.",feats:["Airport Facing","Metro Adjacent","Commercial FSI 3.5","Leasehold 99yr","All NOC"],nearby:["IGI Airport T3 400m","Aerocity Metro 200m","Diplomatic Enclave 3km","Connaught Place 18km"],agent:"Rahul Sharma"},
  {id:308,title:"NA Plot — Goa Bardez",type:"NA Plot",city:"Goa",loc:"Calangute–Anjuna Belt, North Goa",price:"₹2.4 Cr",pricePerSqft:"₹6,800/sq ft",area:"3,530 sq ft",totalArea:"3,530 sq ft (328 sq m)",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",desc:"Coveted NA-approved plot in North Goa's tourist belt. Just 800m from Calangute Beach. Perfect for boutique villa or luxury homestay. Currently generating ₹12L/year rental.",feats:["Non-Agricultural","800m to Beach","Existing Structure","Tourist Zone","OC Ready"],nearby:["Calangute Beach 800m","Anjuna Flea Market 4km","Goa Airport 45km","Panaji City 14km"],agent:"Vikram Patel"},
];

// ── STATE ──
let currentSoldFilter = 'all';
let currentTypeFilter = 'all';
let currentLandFilter = 'all';

// ── RENDER PROPERTY CARDS ──
function renderCards(list) {
  const g = document.getElementById('pgrid');
  const rc = document.getElementById('rcount');
  if (!list.length) {
    g.innerHTML = '<div class="noresult"><h3>No Properties Found</h3><p>Try adjusting your search filters.</p></div>';
    rc.innerHTML = ''; return;
  }
  rc.innerHTML = `Showing <strong>${list.length}</strong> propert${list.length === 1 ? 'y' : 'ies'}`;
  g.innerHTML = list.map(p => `
    <div class="pcard fu" onclick="openModal(${p.id})">
      <div class="pimg">
        <img src="${p.img}" alt="${p.title}" loading="lazy">
        <div class="pbadge">${p.listing === 'rent' ? 'For Rent' : 'For Sale'}</div>
        <div class="pprice">${p.priceStr}</div>
      </div>
      <div class="pinfo">
        <div class="pcity">${p.city}</div>
        <div class="ptitle">${p.title}</div>
        <div class="ploc">📍 ${p.loc}</div>
        <div class="pmeta">
          <span>🛏 ${p.bhk} BHK</span>
          <span>🚿 ${p.baths} Bath</span>
          <span>📐 ${p.area}</span>
          <span>🚗 ${p.parking} Park</span>
        </div>
      </div>
    </div>`).join('');
  observeFU();
}

function filterCards(btn, cat) {
  document.querySelectorAll('.ftab').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  const filtered = cat === 'all' ? props : cat === 'rent' ? props.filter(p => p.listing === 'rent') : cat === 'buy' ? props.filter(p => p.listing === 'buy') : props.filter(p => p.luxury);
  document.getElementById('propSectionTitle').textContent = cat === 'all' ? 'Featured Properties' : cat === 'rent' ? 'Rental Properties' : cat === 'buy' ? 'Properties For Sale' : 'Luxury Properties';
  renderCards(filtered);
}

function doSearch() {
  const city = document.getElementById('sCity').value;
  const ptype = document.getElementById('sPType').value;
  const budget = document.getElementById('sBudget').value;
  const bhk = document.getElementById('sBHK').value;
  const listing = document.getElementById('sListing').value;
  let r = [...props];
  if (city) r = r.filter(p => p.city === city);
  if (ptype) r = r.filter(p => p.type === ptype);
  if (bhk) { const n = parseInt(bhk); r = r.filter(p => bhk === '4' ? p.bhk >= 4 : p.bhk === n); }
  if (listing === 'rent') r = r.filter(p => p.listing === 'rent');
  if (listing === 'buy') r = r.filter(p => p.listing === 'buy');
  if (budget && budget !== 'rent') { const [mn, mx] = budget.split('-').map(Number); r = r.filter(p => p.listing !== 'rent' && p.price >= mn && p.price <= mx); }
  document.getElementById('propSectionTitle').textContent = 'Search Results';
  document.querySelectorAll('.ftab').forEach(b => b.classList.remove('on'));
  renderCards(r);
  document.getElementById('properties').scrollIntoView({ behavior: 'smooth' });
}

// ── PROPERTY MODAL ──
function openModal(id) {
  const p = props.find(x => x.id === id); if (!p) return;
  document.getElementById('mImgEl').src = p.img;
  document.getElementById('mPriceEl').textContent = p.priceStr;
  document.getElementById('mCityEl').textContent = p.city;
  document.getElementById('mTitleEl').textContent = p.title;
  document.getElementById('mLocEl').textContent = '📍 ' + p.loc;
  document.getElementById('mStatsEl').innerHTML = [
    { v: p.bhk + ' BHK', l: 'Bedrooms' }, { v: p.baths, l: 'Bathrooms' },
    { v: p.area, l: 'Area' }, { v: p.parking + ' Car', l: 'Parking' }
  ].map(s => `<div class="mstat"><div class="mstat-v">${s.v}</div><div class="mstat-l">${s.l}</div></div>`).join('');
  document.getElementById('mDescEl').textContent = p.desc;
  document.getElementById('mFeatsEl').innerHTML = p.feats.map(f => `<span class="mfeat">${f}</span>`).join('');
  document.getElementById('moverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(e) { if (e.target === document.getElementById('moverlay')) closeModalDirect(); }
function closeModalDirect() { document.getElementById('moverlay').classList.remove('open'); document.body.style.overflow = ''; }
function bookViewing() { closeModalDirect(); showToast('✅ Viewing request sent! Agent will call shortly.'); setTimeout(() => { document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }, 600); }

// ── SOLD INBOX ──
function renderInbox(filter) {
  currentSoldFilter = filter;
  const list = filter === 'all' ? soldProps : filter === 'recent' ? soldProps.filter(p => ['Jan 2025', 'Feb 2025', 'Mar 2025'].includes(p.soldDate)) : filter === 'luxury' ? soldProps.filter(p => p.category === 'luxury') : soldProps.filter(p => p.category === 'affordable');
  const el = document.getElementById('inboxList');
  if (!list.length) { el.innerHTML = '<div class="inbox-empty"><div class="empty-icon">📭</div><p>No properties in this filter.</p></div>'; return; }
  el.innerHTML = list.map(p => `
    <div class="inbox-item${p.unread ? ' unread' : ''}" onclick="openSoldDrawer(${p.id})">
      <div class="inbox-item-inner">
        <div class="inbox-thumb"><img src="${p.img}" alt="${p.title}" loading="lazy"></div>
        <div class="inbox-content">
          <div class="inbox-top">
            <div>
              <div class="inbox-title">${p.title}</div>
              <div class="inbox-meta">
                <span class="inbox-tag sold">✓ SOLD</span>
                <span class="inbox-city">📍 ${p.loc}</span>
              </div>
            </div>
            <div style="text-align:right">
              <div class="inbox-price">${p.soldPrice}</div>
              <div class="inbox-time">${p.soldDate}</div>
            </div>
          </div>
          <div class="inbox-desc">${p.highlight}</div>
          <div class="inbox-stats">
            <span class="inbox-stat-item">🛏 ${p.bhk} BHK</span>
            <span class="inbox-stat-item">📐 ${p.area}</span>
            <span class="inbox-stat-item">⏱ ${p.daysOnMarket} days on market</span>
          </div>
        </div>
        ${p.unread ? '<div style="display:flex;align-items:center;padding:0 14px"><div class="inbox-dot"></div></div>' : ''}
      </div>
    </div>`).join('');
  observeFU();
}

function filterInbox(btn, filter) {
  document.querySelectorAll('.itab').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  renderInbox(filter);
}

function openSoldDrawer(id) {
  const p = soldProps.find(x => x.id === id); if (!p) return;
  p.unread = false;
  updateBellBadge();
  document.getElementById('drawerContent').innerHTML = `
    <div class="drawer-img">
      <img src="${p.img}" alt="${p.title}">
      <div class="drawer-price-badge">${p.soldPrice}</div>
      <div class="sold-stamp">✓ SOLD</div>
    </div>
    <div class="drawer-body">
      <div class="drawer-section">
        <div class="drawer-section-title">Property Overview</div>
        <div style="font-family:'Playfair Display',serif;font-size:1.2rem;font-weight:700;color:#fff;margin-bottom:6px">${p.title}</div>
        <div style="font-size:0.83rem;color:var(--gray);margin-bottom:16px">📍 ${p.loc}</div>
        <div class="drawer-grid">
          <div class="dg-item"><div class="dg-val">${p.soldPrice}</div><div class="dg-lbl">Sold Price</div></div>
          <div class="dg-item"><div class="dg-val">${p.originalPrice}</div><div class="dg-lbl">Listed Price</div></div>
          <div class="dg-item"><div class="dg-val">${p.daysOnMarket} days</div><div class="dg-lbl">Time on Market</div></div>
          <div class="dg-item"><div class="dg-val">${p.soldDate}</div><div class="dg-lbl">Sold Date</div></div>
          <div class="dg-item"><div class="dg-val">${p.bhk} BHK</div><div class="dg-lbl">Bedrooms</div></div>
          <div class="dg-item"><div class="dg-val">${p.area}</div><div class="dg-lbl">Area</div></div>
        </div>
      </div>
      <div class="drawer-section">
        <div class="drawer-section-title">Transaction Highlight</div>
        <div style="background:rgba(201,168,76,0.1);border:1px solid rgba(201,168,76,0.25);border-radius:10px;padding:14px;margin-bottom:12px">
          <div style="font-size:0.9rem;font-weight:700;color:var(--gold);margin-bottom:4px">🏆 ${p.highlight}</div>
          <div style="font-size:0.8rem;color:var(--gray)">Closed by: ${p.agent} · Buyer: ${p.buyer}</div>
        </div>
        <div class="drawer-desc">${p.desc}</div>
      </div>
      <div class="drawer-section">
        <div class="drawer-section-title">Property Features</div>
        <div class="drawer-tags">${p.feats.map(f => `<span class="dtag">${f}</span>`).join('')}</div>
      </div>
      <div class="drawer-section">
        <div class="drawer-section-title">Transaction Timeline</div>
        <div class="drawer-timeline">
          ${p.timeline.map((t, i) => `
            <div class="dtl-item">
              <div style="display:flex;flex-direction:column;align-items:center">
                <div class="dtl-dot"></div>
                ${i < p.timeline.length - 1 ? '<div style="width:1px;height:28px;background:rgba(201,168,76,0.2);margin-top:2px"></div>' : ''}
              </div>
              <div class="dtl-info"><div class="dtl-label">${t.label}</div><div class="dtl-date">${t.date}</div></div>
            </div>`).join('')}
        </div>
      </div>
      <button class="drawer-cta" onclick="enquireSimilar('${p.city}')">🔍 Find Similar in ${p.city}</button>
      <button class="drawer-cta-ghost" onclick="closeSoldDrawerDirect()">Close</button>
    </div>`;
  document.getElementById('soldDrawerOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  renderInbox(currentSoldFilter);
}

function closeSoldDrawer(e) { if (e.target === document.getElementById('soldDrawerOverlay')) closeSoldDrawerDirect(); }
function closeSoldDrawerDirect() { document.getElementById('soldDrawerOverlay').classList.remove('open'); document.body.style.overflow = ''; }
function enquireSimilar(city) { closeSoldDrawerDirect(); document.getElementById('sCity').value = city; doSearch(); showToast('🔍 Showing properties in ' + city); }

function updateBellBadge() {
  const unread = soldProps.filter(p => p.unread).length;
  const badge = document.getElementById('bellBadge');
  badge.textContent = unread;
  badge.style.display = unread > 0 ? 'flex' : 'none';
}
function scrollToInbox() { document.getElementById('sold-inbox').scrollIntoView({ behavior: 'smooth' }); }

// ── SOLD BY TYPE ──
function renderByType(filter) {
  currentTypeFilter = filter;
  const list = filter === 'all' ? soldByType : soldByType.filter(p => p.type === filter);
  const g = document.getElementById('typeGrid');
  if (!list.length) { g.innerHTML = '<div class="noresult"><h3>No records found</h3></div>'; return; }
  g.innerHTML = list.map(p => `
    <div class="type-card fu">
      <div class="type-card-img">
        <img src="${p.img}" alt="${p.title}" loading="lazy">
        <div class="type-badge">${p.type.toUpperCase()}</div>
        <div class="sold-price-badge">${p.soldPrice}</div>
      </div>
      <div class="type-card-body">
        <div class="type-card-title">${p.title}</div>
        <div class="type-card-loc">📍 ${p.loc}, ${p.city} &nbsp;·&nbsp; Sold ${p.soldDate}</div>
        <div class="type-card-row">
          <div class="type-card-stats">
            <span>🛏 ${p.bhk} BHK</span>
            <span>📐 ${p.area}</span>
            <span>⏱ ${p.days}d</span>
          </div>
          <span class="type-card-market">🏆 ${p.highlight}</span>
        </div>
        <div class="nearby-list">${p.nearby.map(n => `<span class="nearby-tag">📍 ${n}</span>`).join('')}</div>
      </div>
    </div>`).join('');
  observeFU();
}

function filterByType(btn, type) {
  document.querySelectorAll('.type-tab').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  renderByType(type);
}

// ── LAND LISTINGS ──
function renderLand(filter) {
  currentLandFilter = filter;
  const list = filter === 'all' ? landListings : landListings.filter(p => p.type === filter);
  const g = document.getElementById('landGrid');
  if (!list.length) { g.innerHTML = '<div class="noresult"><h3>No land found</h3></div>'; return; }
  g.innerHTML = list.map(p => `
    <div class="land-card fu">
      <div class="land-img">
        <img src="${p.img}" alt="${p.title}" loading="lazy">
        <div class="land-type-badge">${p.type.toUpperCase()}</div>
        <div class="land-price-badge">${p.price}</div>
      </div>
      <div class="land-body">
        <div class="land-title">${p.title}</div>
        <div class="land-loc">📍 ${p.loc}</div>
        <div class="land-stats">
          <div class="land-stat"><div class="land-stat-v">${p.price}</div><div class="land-stat-l">Price</div></div>
          <div class="land-stat"><div class="land-stat-v">${p.totalArea}</div><div class="land-stat-l">Area</div></div>
          <div class="land-stat"><div class="land-stat-v">${p.pricePerSqft}</div><div class="land-stat-l">Rate</div></div>
        </div>
        <div class="land-desc">${p.desc.substring(0, 120)}...</div>
        <div class="land-feats">${p.feats.map(f => `<span class="land-feat">${f}</span>`).join('')}</div>
        <div class="nearby-list" style="margin-bottom:13px">${p.nearby.map(n => `<span class="nearby-tag">📍 ${n}</span>`).join('')}</div>
        <button class="land-enquire" onclick="enquireLand('${p.title}','${p.city}')">📞 Enquire About This Land</button>
      </div>
    </div>`).join('');
  observeFU();
}

function filterLand(btn, filter) {
  document.querySelectorAll('.land-ftab').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  renderLand(filter);
}

function enquireLand(title, city) {
  showToast('📞 Enquiry sent for ' + title + '! Agent will call within 2 hours.');
  setTimeout(() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }), 800);
}

// ── NAV ──
function toggleNav() { document.getElementById('navLinks').classList.toggle('open'); }
function closeNav() { document.getElementById('navLinks').classList.remove('open'); }

// ── CHATBOT ──
let chatOpen = false, isTyping = false;
const chatResponses = {
  "mumbai": ["Mumbai has excellent options in Worli, Bandra West and Powai. Prices from ₹80L (1BHK) to ₹15Cr+ (sea-view penthouse). Our agent Rahul Sharma specializes in Mumbai. Want to schedule a call?"],
  "bengaluru": ["Bengaluru's best areas: Whitefield, Koramangala, Indiranagar. 2BHK starts at ₹65L. Great rental demand from IT professionals makes it a top investment pick!"],
  "delhi": ["Delhi offers premium villas in Vasant Vihar and luxury apartments in Golf Links. Budget starting ₹80L for 2BHK in Noida/Gurgaon."],
  "land": ["We have plots, agricultural land, commercial sites and NA plots across India. Check our Land section for listings in Mumbai (Alibaug), Goa, Bengaluru, Nashik, Coorg and more!"],
  "home loan": ["Home loans available at 8.5–9.2% with SBI, HDFC, ICICI. Free loan assistance. Eligibility: min ₹35K/mo income for ₹50L loan. Want to connect with our loan advisor?"],
  "rera": ["All EliteHomes listings are RERA registered. Verify any property on your state RERA website. This ensures builder accountability and protects your investment."],
  "nri": ["NRI can buy residential and commercial property in India. Payments via NRE/NRO accounts. We have a dedicated NRI desk. Shall I connect you?"],
  "sold": ["Check our Sold Properties sections for real transaction data — prices, days on market, and buyer profiles. Great for understanding current market value!"],
};
function getReply(msg) {
  const m = msg.toLowerCase();
  for (const [k, v] of Object.entries(chatResponses)) { if (m.includes(k)) return v[0]; }
  if (m.includes('price') || m.includes('cost') || m.includes('budget')) return "Prices vary by city. Mumbai: ₹1.5Cr–₹15Cr, Bengaluru: ₹60L–₹5Cr, Pune: ₹50L–₹3Cr, Hyderabad: ₹55L–₹4Cr. What city are you interested in?";
  if (m.includes('rent')) return "Rental properties across all major cities. HITEC City Hyderabad studios from ₹18K/mo, Mumbai 2BHK from ₹45K/mo, Bengaluru 2BHK from ₹25K/mo.";
  if (m.includes('sell')) return "To sell through EliteHomes: free valuation, professional photography, RERA listing, 50,000+ verified buyers. Average time to sell: 21 days!";
  return "Our expert agents across 10 cities can help. Call +91 98765 43210 or use the Contact form. Shall I search for properties matching your requirements?";
}
function toggleChat() { chatOpen = !chatOpen; document.getElementById('cwin').classList.toggle('open', chatOpen); }
function nowTime() { return new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }); }
function addMsg(txt, role) {
  const d = document.getElementById('cmsgs');
  const m = document.createElement('div'); m.className = `msg ${role}`;
  m.innerHTML = `<div class="mbub">${txt}</div><div class="mtime">${nowTime()}</div>`;
  d.appendChild(m); d.scrollTop = d.scrollHeight;
}
function sendMsg() {
  const inp = document.getElementById('cinput'); const txt = inp.value.trim(); if (!txt || isTyping) return;
  addMsg(txt, 'usr'); inp.value = '';
  document.getElementById('csend').disabled = true; isTyping = true;
  document.getElementById('csuggs').style.display = 'none';
  const d = document.getElementById('cmsgs');
  const t = document.createElement('div'); t.className = 'msg bot';
  t.innerHTML = '<div class="typing"><div class="tdot"></div><div class="tdot"></div><div class="tdot"></div></div>';
  d.appendChild(t); d.scrollTop = d.scrollHeight;
  setTimeout(() => { t.remove(); addMsg(getReply(txt), 'bot'); document.getElementById('csend').disabled = false; isTyping = false; }, 1200 + Math.random() * 700);
}
function quickSend(btn) { document.getElementById('cinput').value = btn.textContent; sendMsg(); }

// ── TOAST ──
function showToast(msg) { const t = document.getElementById('toast'); t.textContent = msg; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 3200); }

// ── FORM ──
function submitForm(btn) {
  btn.textContent = 'Sending...'; btn.disabled = true;
  setTimeout(() => { btn.textContent = 'Send Message →'; btn.disabled = false; showToast('✅ Message sent! Agent will contact you within 24 hours.'); }, 1500);
}

// ── SCROLL ANIMATION ──
function observeFU() {
  const io = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); }); }, { threshold: 0.12 });
  document.querySelectorAll('.fu:not(.vis)').forEach(el => io.observe(el));
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  renderCards(props);
  renderInbox('all');
  updateBellBadge();
  renderByType('all');
  renderLand('all');
  observeFU();
});