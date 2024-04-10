// Constants for images of each line up, possibly add pada and louis vuitton line up in future
const ysl_image = "https://www.sephora.com/productimages/product/p436005-av-35-zoom.jpg?imwidth=630";
const spicebomb_image = "https://us.viktor-rolf.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-vr-master-catalog/default/dw3d3ca5ea/spicebomb/vr_fram_spicebomb_sbb-collection%206%20packs_1x1_dmi_image_na_no-cta.jpg?sw=375&sh=375&sm=cut&sfrm=jpg&q=70";
//const prada_image = "https://www.prada.com/content/dam/pradanux/pradasphere/2021/fragrances/luna_rossa/archive/hero/hero_banner_big_DT.jpg";
//const lv_image = "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--M_Fa_Fragrances_Meteore_DI2.jpg?wid={IMG_WIDTH}&hei={IMG_HEIGHT}";

// This is an array of strings (Cologne line ups)
let line_ups = [
    "YSL Y",
    "Spicebomb",
    //"Prada",
    //"LV"
];

// Array for all ysl colognes
const ysl_colognes = [
    {
        name: "YSL Y Eau Fraiche",
        brand: "YSL",
        type: "Eau de Parfum",
        description: "A vibrant and invigorating fragrance that captures the essence of a cool, refreshing breeze on a hot summer day.",
        price: "83.66",
        image: "https://fimgs.net/mdimg/perfume/375x500.60094.jpg",
        link: "https://amazon.com/Yves-Saint-Laurent-Fragrances-3614272883093/dp/B08KXRBJ66/ref=sr_1_1?crid=TSRYLSIFYAHX&dib=eyJ2IjoiMSJ9.ceIi8gAX-w_JySmFQbWIznCFhX9IX0KJPppeToSmb4K9KgZ2wBHbTbm3uTVMDD37JdIeRDHwkJkDny8ezfbs-t9vMdGKe98xhnoKhkoP7bKzSz42s5ba-Ae90iDLecO_K-qoRckYRWuNS-qWuJIOGuFcz2IP2BxJhGg0uLZKKcgp-g60XKNVQG4b0iksN8QzFcG1ulmSePiPaPDkXc9Y2jTDj_HONHk8awjVZfLNOKXrENqPzxDSXiQvB3h8k7CsLzteqeHWJCCHkX1XZY7-AQBJX42LduK0Ww__xqSu8nU.7h_apwBlysFAdwMEXLmPZQof6E0U92WMYKMvrmzhDTs&dib_tag=se&keywords=ysl+y+eau+fraiche&qid=1712709081&sprefix=ysl+y+eau+fraiche%2Caps%2C198&sr=8-1"
    },
    {
        name: "YSL Y Eau de Toilette",
        brand: "YSL",
        type: "Eau de Toilette",
        description: "A light & fresh yet seductively strong & self-possessed scent. The fresh, citrusy aroma is perfect for a man who creates his own story.",
        price: "73.99",
        image: "https://fimgs.net/mdimg/perfume/375x500.45956.jpg",
        link: "https://www.amazon.com/Yves-Saint-Laurent-Toilette-Spray/dp/B072K2K3SB/ref=sr_1_1?crid=1HK1ZK8U7MNXT&dib=eyJ2IjoiMSJ9.mJASV9kddHd4iN7ESKQ8w73mjkWQyYZbR3I2pnedvB9nxPlneRh3NQDaGKNKGa15m611zLRYZ7JcXAJW3tNAAj-CrlFwWVBHYoQGd7_cQxTlM74zhDkip3akMs1rbRXNlDQakCvdD_6dafN_CUCUwY3Ev_wn5Bix6TVSL3XgeejD4ToCHLAgnbfYxlrkEnOq_cpKLVu8eNPrSeyhStYGgBJRpiMLLAy-UelAb2W8l0HwPLJWnIryxmbmuU9QkMyMmZugxOyOpfTB4CK7n6nVl4sTDeI_qnE9EgL5KpmwEvg.nhwM2t3f_Bnz5sKUz3gTJdook_IVAr04TShiID4WrKA&dib_tag=se&keywords=ysl+y+edt&qid=1712709053&sprefix=ysl+y+edt%2Caps%2C227&sr=8-1"
    },
    {
        name: "YSL Y Eau de Parfum",
        brand: "YSL",
        type: "Eau de Parfum",
        description: "A more intense and sensual version of YSL Y. The bold, rich scent for a man confident in his achievements and future.",
        price: "100.79",
        image: "https://fimgs.net/mdimg/perfume/375x500.50757.jpg",
        link: "https://www.amazon.com/Mens-Y-Eau-Parfum-3-3-oz/dp/B07GB6B37N/ref=sr_1_4?crid=V8H668RAU32A&dib=eyJ2IjoiMSJ9.ceIi8gAX-w_JySmFQbWIznCFhX9IX0KJPppeToSmb4IRvcAteYJeEM0uJwEcUZKnoHGRO8YpyPQFOesTOkHZJItTQXoc08ps6cE8MQspg_qXkZ25jCbHLXxVuFFFssf2RqCpBE3K9YxirsH7-VQEWWveT3LApUFoAgbTgXK4Qfv6KGiMmxQ3qIilyZoxvyDRQpSp6L-2NUrBIf6f9pX9OBc_HwM1-2RAQNnYBDeDqJFLFkfcu3ri-dnggXCPyoTGaqsmeBDd044_0zD0L-FvFzS1Zit0HTZ80hvk8JJBtSc.UOHINr_O348AonADwqfCZjsfsZ7PL8FN89yIAXMPBMY&dib_tag=se&keywords=ysl+y+eau+fraiche&qid=1712653916&s=beauty&sprefix=ysl+y+eau+fraiche%2Cbeauty%2C252&sr=1-4"
    },
    {
        name: "YSL Y Le Parfum",
        brand: "YSL",
        type: "Eau de Parfum",
        description: "An intense and bold fragrance that embodies the spirit of a man who dares to dream and achieve.",
        price: "106.95",
        image: "https://fimgs.net/mdimg/perfume/375x500.64718.jpg",
        link: "https://www.amazon.com/YVES-SAINT-LAURENT-Parfum-Spray/dp/B08XJTL86Z/ref=sr_1_1?crid=2E0B3DPVJKT2Y&dib=eyJ2IjoiMSJ9.R-sP8TMPNMp_3u0cHY2XRXsK7-lHSuim_Y1qV6rq8N7eRsRDEpt3zSCBSgcr7zkiFIl_vzuWHQJojX_jxJRpWm_m3XPxDzuM_rpToWBWi2sKa4s5aDBhmuTLWp00uJq0QJLUlo1K-cYkujHg4vtEMGLUNaWdtMN57GWR2FpBiwWrF5TgDAvHOQwqDAdaZ5XEYiwYpftcnJe3WBioypDdrcaNBJ_rSto0k8B_AvJKN0Qe74AaXnOu4Mb1BjqfhoEYR_qpMmuKjFUGrJN9t7_3pKuZMzI-aEZr3CzMt0VoJC8.YLKzAmE_J5nHHB1MH_6uKuqK6E4xl53oE15I-mOm0Ek&dib_tag=se&keywords=ysl+y+le+parfum&qid=1712709231&sprefix=ysl+y+le+parfum%2Caps%2C221&sr=8-1"
    }
  ];

// Array for all spicebomb colognes
const spicebomb_colognes = [
    {
        name: "Spicebomb Infrared EDT",
        brand: "Victor & Rolf",
        type: "Eau de Parfum",
        description: "A vibrant and invigorating fragrance that captures the essence of a cool, refreshing breeze on a hot summer day.",
        price: "71.25",
        image: "https://fimgs.net/mdimg/perfume/375x500.66514.jpg",
        link: "https://amazon.com/SPICEBOMB-INFRARED-Viktor-Rolf-SPRAY/dp/B0963Z9W57/ref=sr_1_1?crid=3SRIEK51HYHRW&dib=eyJ2IjoiMSJ9.yNGHoE_Rb-xlq56JHiOemtQa4EmLgp60jrXL1q5pu8dMK2kCsGOmVNpqJ-_13bapu1yecrdAl25jrpaVMP734SAkj27IDocRxIqWx3HYVzTicmhzEIiL-aerIkasv40ZDhukV5L20jRpdZFu4zWl5Q-r15i1vR40QiC2THG_xAj_pZJtbv58sjm-FotYyy3cEAkBYuf3ssPwXudCT8v_nYsWQC50cav8zOIgymcU5wuiD34NqYy40PV1F-_iqWr3xgW8rd1sHiW6_KzDJAKcdsndIwuIjQUDFcGMFOobIfk.PqBf6A3X18WMMUuC1WAP_YqPCcF5K7n6_uD4smEm4G8&dib_tag=se&keywords=spicebomb+infrared+edt&qid=1712725814&sprefix=spicebomb+infrared+ed%2Caps%2C210&sr=8-1"
    },
    {
        name: "Spicebomb Infrared EDP",
        brand: "Victor & Rolf",
        type: "Eau de Parfum",
        description: "Dialing up the heat, Spicebomb Infrared EDP envelops you in a wave of warm cinnamon, saffron, and red berries, for a deeper and more intense olfactory experience.",
        price: "129.95",
        image: "https://fimgs.net/mdimg/perfume/375x500.81409.jpg",
        link: "https://www.amazon.com/Viktor-Rolf-Spicebomb-Infrared-Men/dp/B0C71HQD4G/ref=sr_1_2?crid=I8J181JNJI2F&dib=eyJ2IjoiMSJ9.zKfkh5EfzjYbzQh9x9XG25owXJlbqT296L3er5gjIbRrsItzip-qevfxf9ANs_vFhMEynERqJl6aCebxEgwDOwbUHzkeWzRj6XZKoP_TGTUcTz3EmAoqQxHbK2MrZ1k-u33NHV2Mfn1u5FOrkMyxRK-3ErJhPOBa-QRwLCb43B5WUrfAYE7RIK3deGYJwxh4KZJo9Zjt6MUXHrZjOXPp4VolFTKKv0O2x202xb3EjUx_OfC-E9SgW-Ksja7B0I2ey916HxsFczjz54MMrm_Cj3NI66Hz9QOBiAUev5IPUWM.aBXqJw9tj_2XnXbE49AZfIVMfw_DMjz-T-BiPiDPhIs&dib_tag=se&keywords=spicebomb+infrared+edp&qid=1712725945&sprefix=spicebomb+infrared+ed%2Caps%2C178&sr=8-2"
    },
    {
        name: "Spicebomb For Men",
        brand: "Victor & Rolf",
        type: "Cologne",
        description: "A detonation of masculinity, Spicebomb For Men is a blend of strength and daring, combining leather, tobacco, and vetiver notes for a lingering assertion of virility.",
        price: "75.78",
        image: "https://fimgs.net/mdimg/perfume/375x500.13857.jpg",
        link: "https://www.amazon.com/Viktor-Rolf-Spicebomb-Toilette-Spray/dp/B007D1VGSY/ref=vo_sr_l_dp?crid=JYFTFIQBLY8O&dib=eyJ2IjoiMSJ9.tF7_4Nk1uFJVeUSuySyAFvCrjXHqC3c88u48uDhBR3IKTo9YQzEZmkp0P0blOeVkyL6SgOre9o0zHuHiEVNVsBMDbuktjDMRepI96xghw03wQ_8dLQ46sOOb5L1YEipwPHvdyhJkdo224Kt7YJn8Kn3LKCz1Q_N1MiP39hMbzaX8ixXjiEWIQ45hiB-XRRtP-RUFYsTRX_wPl822j-paCu9C4loqrV5hsvmQFXTwu2mCQFu190gpA76MOXwdtSnw7Gc3Hce8hCcEkocUPaP5_h3NVD7jCi0x0yN8g1UKYMo.guH9HJbHtmU2ZUfJq5tbDhurQ0-F5M3D9fZZXtfXJOs&dib_tag=se&keywords=spicebomb%2Bfor%2Bmen&qid=1712726018&sprefix=spicebomb%2Bfor%2Bmen%2B%2Caps%2C250&sr=8-1&th=1"
    },
    {
        name: "Spicebomb Extreme",
        brand: "Victor & Rolf",
        type: "Eau de Parfum",
        description: "Pushing boundaries, Spicebomb Extreme is an explosion of heat with a spicy infusion of black pepper, vanilla, and tobacco, creating an intensely seductive trail.",
        price: "104.81",
        image: "https://fimgs.net/mdimg/perfume/375x500.30499.jpg",
        link: "https://www.amazon.com/Viktor-Rolf-Spicebomb-Extreme-Parfum/dp/B00WYP5ZHW/ref=sr_1_1?crid=S7KYK1XO34I2&dib=eyJ2IjoiMSJ9.ojZQWTcBnaS9jwn6OPytg8lLK2Y7VxvTtvW5rkqkC48_-p86BCVkQpHNu-NHcq-XsXTMJVwZ2YKsOZcjlcSQV8aiMoBufWgN1VJL4cpxAM67lCOIjguloMc221qnEwF24rICxTw8i7Ug5Q-6gFST26-3ErJhPOBa-QRwLCb43B6OU2MqzVhSU7EZx8l1faPib-A6QcDtf2Fqhma-3cGBQ_U6jcgAfqwL2MTW-XaLtakgBiYyz10Q7MCz4r8tTuXYH3Me-Wf9Q6k8FVMhpnKp9izEAJV_ehk8b2i4pqjx1JA.U--KAA9MjDFeuYVkwf_wLbc2s214vNRk6tjXeCV-ZEc&dib_tag=se&keywords=spicebomb+extreme&qid=1712726160&sprefix=spicebomb+extreeme%2Caps%2C1628&sr=8-1"
    },
    {
        name: "Spicebomb Night Vision EDT",
        brand: "Victor & Rolf",
        type: "Eau de Toilette",
        description: "Spicebomb Night Vision EDT casts a mysterious shadow with its electrifying accord of green cardamom, grapefruit, and clary sage, revealing a fresh and aromatic heart.",
        price: "84.68",
        image: "https://fimgs.net/mdimg/perfume/375x500.53344.jpg",
        link: "https://www.amazon.com/Spicebomb-Vision-Viktor-Rolf-Toilette/dp/B07NCZFFMX/ref=sr_1_1?crid=3R3TWOVDEDH70&dib=eyJ2IjoiMSJ9.OEnXRJJmtJYzW0PYT_3ZVxU4tOQhzV164_yXJf7tvV4PiTYs8pl6NL36WtGJRuYMMfEnDqx_9ybIFeHmOa6qb5TSJG-MJhzUBjcnlqfjr3IP9EMTiEd5jobHSuNN93XYZo8UKOwiPd1a4lroyzmsqv_oNMP--l5JVIKu5m0ip4JR7qHxoSMjFDlXlDWQneNM8cKJuyUkZXcMddYDPxa3T4u6Qz-ovnDhMbot1NW-ctollNc-8nFuK6CQ7zs6Q1wmTi6N7mIX39njFs_I2GOWvcOgdDzvv9OjYYdTjYRYkBk.RhC4C_rjf3uR9TjMcZnfAHz2HAzpg57Cfiz6La3uhms&dib_tag=se&keywords=spicebomb+night+vision&qid=1712726188&sprefix=spicebomb+night+vision%2Caps%2C318&sr=8-1"
    },
    {
        name: "Spicebomb Night Vision EDP",
        brand: "Victor & Rolf",
        type: "Eau de Parfum",
        description: "Deep and alluring, Spicebomb Night Vision EDP unveils the cover of night with an intense blend of black spices, roasted almonds, and resinous fir balsam.",
        price: "83.44",
        image: "https://fimgs.net/mdimg/perfume/375x500.62253.jpg",
        link: "https://www.amazon.com/Viktor-Rolf-Spicebomb-Vision-Parfum/dp/B08CHLBCG8/ref=sr_1_2?crid=3R3TWOVDEDH70&dib=eyJ2IjoiMSJ9.OEnXRJJmtJYzW0PYT_3ZVxU4tOQhzV164_yXJf7tvV4PiTYs8pl6NL36WtGJRuYMMfEnDqx_9ybIFeHmOa6qb5TSJG-MJhzUBjcnlqfjr3IP9EMTiEd5jobHSuNN93XYZo8UKOwiPd1a4lroyzmsqv_oNMP--l5JVIKu5m0ip4JR7qHxoSMjFDlXlDWQneNM8cKJuyUkZXcMddYDPxa3T4u6Qz-ovnDhMbot1NW-ctollNc-8nFuK6CQ7zs6Q1wmTi6N7mIX39njFs_I2GOWvcOgdDzvv9OjYYdTjYRYkBk.RhC4C_rjf3uR9TjMcZnfAHz2HAzpg57Cfiz6La3uhms&dib_tag=se&keywords=spicebomb+night+vision&qid=1712726188&sprefix=spicebomb+night+vision%2Caps%2C318&sr=8-2"
    }
];

// Array for all colognes
const colognes = ysl_colognes.concat(spicebomb_colognes);


// List for ysl bullet points
const ysl_bulletPoints = [
    { text: "Discover YSL Y Eau Fraiche", url: "ysl_y_ef.html" },
    { text: "Discover YSL Y Eau de Toilette", url: "ysl_y_edt.html" },
    { text: "Discover YSL Y Eau de Parfum", url: "ysl_y_edp.html" },
    { text: "Discover YSL Y Le Parfum", url: "ysl_y_p.html" }     
];

//list for spicebomb bullet points
const spicebomb_bulletPoints = [
{ text: "Discover Infrared EDT", url: "spicebomb_infrared_edt.html" },
{ text: "Discover Infrared EDP", url: "spicebomb_infrared_edp.html" },
{ text: "Discover Spicebomb For Men", url: "spicebomb_for_men.html" },
{ text: "Discover Spicebomb Extreme", url: "spicebomb_extreme.html" },
{ text: "Discover Night Vision EDT", url: "spicebomb_nv_edt.html" },
{ text: "Discover Night Vision EDP", url: "spicebomb_nv_edp.html" }
];

  //function to load product on product page
  function load_product_details(cologne) {
    const container = document.getElementById('productDetails');
    container.innerHTML = 
        `<h1>${cologne.name}</h1>
        <img src="${cologne.image}" alt="${cologne.name}">
        <p><strong>Description:</strong> ${cologne.description}</p>
        <p><strong>Price:</strong> $${cologne.price}</p>
        <a href="${cologne.link}" class="buy-link" target="_blank">Buy Now</a>`;
}

// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    const templateCard = document.querySelector(".card");

    cardContainer.innerHTML = "";
    
    for (let i = 0; i < line_ups.length; i++) {
        let line_up = line_ups[i];
        let imageURL = "";
        let bulletPoints = [];
        const nextCard = templateCard.cloneNode(true);

        if (i == 0) {
            imageURL = ysl_image;
            bulletPoints = ysl_bulletPoints;
        } else if (i == 1) {
            imageURL = spicebomb_image;
            bulletPoints = spicebomb_bulletPoints;
        }
        editCardContent(nextCard, line_up, imageURL, bulletPoints);
        cardContainer.appendChild(nextCard); // Add the new card to the container
    }
}

function editCardContent(card, newTitle, newImageURL, bulletPoints) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Image";

    const bulletList = card.querySelector("ul");
    bulletList.innerHTML = ''; // Clear any existing bullet points

    // Iterate over the bulletPoints array to create and append new <li> elements with <a> tags
    bulletPoints.forEach(point => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = point.url; // Set the href attribute to the url of the bullet point
        a.textContent = point.text; // Set the link text
        li.appendChild(a); // Add the <a> element to the <li>
        bulletList.appendChild(li); // Add the <li> to the <ul>
    });

    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

//function that picks a random cologne for the user
function rand_cologne() {
    console.log("Button Clicked!");
    const randomIndex = Math.floor(Math.random() * colognes.length);
    alert("The most suitting cologne for you is " + colognes[randomIndex].name +  "!");
}

function line_up_description() {
    alert("Spicebomb by Viktor & Rolf: \nSpicebomb presents itself as an explosion of spices, masterfully blended to create a scent that is both warm and inviting yet daringly bold. With top notes of bergamot and grapefruit, heart notes of chili and saffron, and a base that resonates with leather and tobacco, this fragrance is an olfactory grenade that delivers a sensory assault in the best way possible. Designed for the man who desires to leave a lasting impression, Spicebomb is a powerful, addictive concoction that captures the essence of masculinity with a twist of elegance. \n\nYSL Y by Yves Saint Laurent: \nYSL Y stands as a testament to the modern man - one who dares to follow his passions and carve out his own path. This fragrance embodies the spirit of youth, freedom, and self-accomplishment, making it perfect for the creative soul. With a crisp opening of white aldehydes and bergamot, a sharp heart of sage and geranium, and a strong base of incense and fir balsam, YSL Y is both fresh and powerful. It is a versatile scent that suits a variety of occasions, seamlessly transitioning from day to night, much like the multifaceted man it represents.")
}
