import { Link } from 'react-router-dom/cjs/react-router-dom';
import './Navbar.css';

function Navbar() {

    function over() {
        var bn = document.getElementsByClassName("bn")[0];
        bn.style.display = "block";
    }
    function hide() {
        var bn = document.getElementsByClassName("bn")[0];
        bn.style.display = "none";
    }

    return (

        <>

            <div className="bn"></div>
            <div class="main">
                <div class="menu">
                    <Link to="/"><img class="myntra_logo" src={require('./image/myntra_logo.png')} alt=""></img></Link>
                    <div class="text t1" onMouseEnter={over} onMouseLeave={hide}><a href="#">MEN</a>
                        <div class="mega_menu">

                            <div class="a1 a">
                                <div class="aa1">
                                    <h3 class="redf">Topwear</h3>
                                    <ul>
                                        <li>T-Shirts</li>
                                        <li>Casual Shirts</li>
                                        <li>Formal Shirts</li>
                                        <li>Sweatshirts</li>
                                        <li>Sweaters</li>
                                        <li>Jackets</li>
                                        <li>Blazers</li>
                                        <li>suits</li>
                                        <li>Rain Jackets</li>
                                    </ul>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Indian & Festive Wear</h3>
                                    <ul>
                                        <li>T-Kurtas & Kurta sets</li>
                                        <li>Sherwanies</li>
                                        <li>Nehru Jackets</li>
                                        <li>Dhotis</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="a2 a">
                                <div class="aa1">
                                    <h3 class="redf">Bottom Wear</h3>
                                    <ul>
                                        <li>Jeans</li>
                                        <li>Casual Trousers</li>
                                        <li>Formal Trousers</li>
                                        <li>Shorts</li>
                                        <li>Track Pants & Joggers</li>
                                    </ul>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Innerwear & Sleepwear</h3>
                                    <ul>
                                        <li>Briefs & Trunks</li>
                                        <li>Boxers</li>
                                        <li>Vests</li>
                                        <li>Sleepwear & Loungewear</li>
                                        <li>Thermals</li>
                                    </ul>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Plus Size</h3>
                                </div>
                            </div>

                            <div class="a3 a">
                                <div class="aa1">
                                    <h3 class="redf">Footwear</h3>
                                    <ul>
                                        <li>Casual Shoes</li>
                                        <li>Sports Shoes</li>
                                        <li>Formal Shoes</li>
                                        <li>Sneakers</li>
                                        <li>Sandals & Floaters</li>
                                        <li>Flip Flops</li>
                                        <li>Socks</li>
                                    </ul>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Personal Care & Grooming</h3>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Sunglasses & Frames</h3>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Watches</h3>
                                </div>
                            </div>

                            <div class="a4 a">
                                <div class="aa1">
                                    <h3 class="redf">Sports & Active Wear</h3>
                                    <ul>
                                        <li>Sports Shoes</li>
                                        <li>Sports Sandals</li>
                                        <li>Active T-Shirts</li>
                                        <li>Track Pants & Shorts</li>
                                        <li>Tracksuits</li>
                                        <li>Jackets & Sweatshirts</li>
                                        <li>Sports Accessories</li>
                                        <li>Swimwear</li>
                                    </ul>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Gadgets</h3>
                                    <ul>
                                        <li>T-Smart Wearables</li>
                                        <li>Fitness Gadgets</li>
                                        <li>Headphones</li>
                                        <li>Speakers</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="a5 a">
                                <div class="aa1">
                                    <h3 class="redf">Fashion Accessories</h3>
                                    <ul>
                                        <li>Wallets</li>
                                        <li>Belts</li>
                                        <li>Perfumes & Body Mists</li>
                                        <li>Trimmers</li>
                                        <li>Deodorants</li>
                                        <li>Ties, Cufflinks & Pocket Squares</li>
                                        <li>Accessory Gift Sets</li>
                                        <li>Caps & Hats</li>
                                        <li>Mufflers, Scarves & Gloves</li>
                                        <li>Phone Cases</li>
                                        <li>Rings & Wristwear</li>
                                        <li>Helmets</li>
                                    </ul>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Bags & Backpacks</h3>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Luggages & Trolleys</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text t2" onMouseEnter={over} onMouseLeave={hide}><a href="#">WOMEN</a>

                        <div class="mega_menu">
                            <div class="a1 a">
                                <div class="aa1">
                                    <h3 class="redf">Indian & Fusion Wear</h3>
                                    <ul>
                                        <li>Kurtas & Suits</li>
                                        <li>Kurtis, Tunics & Tops</li>
                                        <li>Sarees</li>
                                        <li>Ethnic Wear</li>
                                        <li>Skirts & Palazzos</li>
                                        <li>Dress Materials</li>
                                        <li>Lehenga Cholis</li>
                                        <li>Dupattas & Shawls</li>
                                        <li>Jackets</li>
                                    </ul>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Belts, Scarves & More</h3>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Watches & Wearables</h3>
                                </div>
                            </div>
                            <div class="a2 a">
                                <div class="aa1">
                                    <h3 class="redf">Western Wear</h3>
                                    <ul>
                                        <li>Dresses</li>
                                        <li>Tops</li>
                                        <li>Tshirts</li>
                                        <li>Jeans</li>
                                        <li>Trousers & Capris</li>
                                        <li>Shorts & Skirts</li>
                                        <li>Co-ords</li>
                                        <li>Playsuits</li>
                                        <li>Jumpsuits</li>
                                        <li>Sweaters & Sweatshirts</li>
                                        <li>Shrugs</li>
                                        <li>Jackets & Coats</li>
                                        <li>Blazers & Waistcoats</li>
                                    </ul>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Plus Size</h3>
                                </div>
                            </div>
                            <div class="a3 a">

                                <div class="aa1">
                                    <h3 class="redf">Maternity</h3>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Sunglasses & Frames</h3>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Footwear</h3>
                                    <ul>
                                        <li>Flats</li>
                                        <li>Casual Shoes</li>
                                        <li>Heels</li>
                                        <li>Boots</li>
                                        <li>Sports Shoes & Floaters</li>
                                    </ul>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Sports & Active Wear</h3>
                                    <ul>
                                        <li>Clothing</li>
                                        <li>Footwear</li>
                                        <li>Sports Accessories</li>
                                        <li>Sports Equipment</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="a4 a">
                                <div class="aa1">
                                    <h3 class="redf">Lingerie & Sleepwear</h3>
                                    <ul>
                                        <li>Bra</li>
                                        <li>Briefs</li>
                                        <li>Shapewear</li>
                                        <li>Sleepwear & Loungewear</li>
                                        <li>Swimwear</li>
                                        <li>Camisoles & Thermals</li>
                                    </ul>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Beauty & Personal Care</h3>
                                    <ul>
                                        <li>Makeup</li>
                                        <li>Skincare</li>
                                        <li>Premium Beauty</li>
                                        <li>Lipsticks</li>
                                        <li>Fragrances</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="a5 a">
                                <div class="aa1">
                                    <h3 class="redf">Gadgets</h3>
                                    <ul>
                                        <li>Smart Wearables</li>
                                        <li>Fitness Gadgets</li>
                                        <li>Headphones</li>
                                        <li>Speakers</li>

                                    </ul>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Jewellery</h3>
                                    <ul>
                                        <li>Fashion Jewellery</li>
                                        <li>Fine Jewellery</li>
                                        <li>Earrings</li>
                                    </ul>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Backpacks</h3>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Handbags, Bags & Wallets</h3>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Luggages & Trolleys</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="text t3" onMouseEnter={over} onMouseLeave={hide}><a href="#">KIDS</a>

                        <div class="mega_menu">
                            <div class="a1 a">
                                <div class="aa1">
                                    <h3 class="redf">Boys Clothing</h3>
                                    <ul>
                                        <li>T-Shirts</li>
                                        <li>Shirts</li>
                                        <li>Shorts</li>
                                        <li>Jeans</li>
                                        <li>Trousers</li>
                                        <li>Clothing Sets</li>
                                        <li>Ethnic Wear</li>
                                        <li>Track Pants & Pyjamas</li>
                                        <li>Jacket, Sweater & Sweatshirts</li>
                                        <li>Party Wear</li>
                                        <li>Innerwear & Thermals</li>
                                        <li>Nightwear & Loungewear</li>
                                        <li>Value Packs</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="a2 a">
                                <div class="aa1">
                                    <h3 class="redf">Girls Clothing</h3>
                                    <ul>
                                        <li>Dresses</li>
                                        <li>Tops</li>
                                        <li>Tshirts</li>
                                        <li>Clothing Sets</li>
                                        <li>Lehenga choli</li>
                                        <li>Kurta Sets</li>
                                        <li>Party wear</li>
                                        <li>Skirts & shorts</li>
                                        <li>Tights & Leggings</li>
                                        <li>Jeans, Trousers & Capris</li>
                                        <li>Jacket, Sweater & Sweatshirts</li>
                                        <li>Innerwear & Thermals</li>
                                        <li>Nightwear & Loungewear</li>
                                        <li>Value Packs</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="a3 a">
                                <div class="aa1">
                                    <h3 class="redf">Footwear</h3>
                                    <ul>
                                        <li>Casual Shoes</li>
                                        <li>Flipflops</li>
                                        <li>Sports Shoes</li>
                                        <li>Flats</li>
                                        <li>Sandals</li>
                                        <li>Heels</li>
                                        <li>School Shoes</li>
                                        <li>Socks</li>
                                    </ul>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Toys & Games</h3>
                                    <ul>
                                        <li>Learning & Development</li>
                                        <li>Activity Toys</li>
                                        <li>Soft Toys</li>
                                        <li>Action Figure / Play set</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="a4 a">
                                <div class="aa1">
                                    <h3 class="redf">Infants</h3>
                                    <ul>
                                        <li>Bodysuits</li>
                                        <li>Rompers & Sleepsuits</li>
                                        <li>Clothing Sets</li>
                                        <li>Tshirts & Tops</li>
                                        <li>Dresses</li>
                                        <li>Bottom wear</li>
                                        <li>Winter Wear</li>
                                        <li>Innerwear & Sleepwear</li>
                                        <li>Infant Care</li>
                                    </ul>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Home & Bath</h3>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Personal Care</h3>
                                </div>
                            </div>
                            <div class="a5 a">
                                <div class="aa1">
                                    <h3 class="redf">Bags & Backpacks</h3>
                                    <ul>
                                        <li>Watches</li>
                                        <li>Jewellery & Hair accessory</li>
                                        <li>Sunglasses</li>
                                        <li>Masks & Protective Gears</li>
                                        <li>Caps & Hats</li>
                                    </ul>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Brands</h3>
                                    <ul>
                                        <li>H&M</li>
                                        <li>Max Kids</li>
                                        <li>Pantaloons</li>
                                        <li>United Colors Of Benetton Kids</li>
                                        <li>YK</li>
                                        <li>U.S. Polo Assn. Kids</li>
                                        <li>Mothercare</li>
                                        <li>HRX</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="text t4" onMouseEnter={over} onMouseLeave={hide}><a href="#">HOME&nbsp;&&nbsp;LIVING</a>

                        <div class="mega_menu">
                            <div class="a1 a">
                                <div class="aa1">
                                    <h3 class="redf">Bed Linen & Furnishing</h3>
                                    <ul>
                                        <li>Bed Runners</li>
                                        <li>Mattress Protectors</li>
                                        <li>Bedsheets</li>
                                        <li>Bedding Sets</li>
                                        <li>Blankets, Quilts & Dohars</li>
                                        <li>Pillows & Pillow Covers</li>
                                        <li>Bed Covers</li>
                                        <li>Diwan Sets</li>
                                        <li>Chair Pads & Covers</li>
                                        <li>Sofa Covers</li>
                                    </ul>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Flooring</h3>
                                    <ul>
                                        <li>Floor Runners</li>
                                        <li>Carpets</li>
                                        <li>Floor Mats & Dhurries</li>
                                        <li>Door Mats</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="a2 a">
                                <div class="aa1">
                                    <h3 class="redf">Bath</h3>
                                    <ul>
                                        <li>Bath Towels</li>
                                        <li>Hand & Face Towels</li>
                                        <li>Beach Towels</li>
                                        <li>Towels Set</li>
                                        <li>Bath Rugs</li>
                                        <li>Bath Robes</li>
                                        <li>Bathroom Accessories</li>
                                        <li>Shower Curtains</li>
                                    </ul>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Lamps & Lighting</h3>
                                    <ul>
                                        <li>Floor Lamps</li>
                                        <li>Ceiling Lamps</li>
                                        <li>Table Lamps</li>
                                        <li>Wall Lamps</li>
                                        <li>Outdoor Lamps</li>
                                        <li>String Lights</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="a3 a">
                                <div class="aa1">
                                    <h3 class="redf">Home Décor</h3>
                                    <ul>
                                        <li>Plants & Planters</li>
                                        <li>Aromas & Candles</li>
                                        <li>Clocks</li>
                                        <li>Mirrors</li>
                                        <li>Wall Décor</li>
                                        <li>Festive Decor</li>
                                        <li>Pooja Essentials</li>
                                        <li>Wall Shelves</li>
                                        <li>Fountains</li>
                                        <li>Showpieces & Vases</li>
                                        <li>Ottoman</li>
                                    </ul>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Cushions & Cushion Covers</h3>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Curtains</h3>
                                </div>
                            </div>
                            <div class="a4 a">
                                <div class="aa1">
                                    <h3 class="redf">Home Gift Sets</h3>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Kitchen & Table</h3>
                                    <ul>
                                        <li>Table Runners</li>
                                        <li>Dinnerware & Serveware</li>
                                        <li>Cups and Mugs</li>
                                        <li>Bakeware & Cookware</li>
                                        <li>Kitchen Storage & Tools</li>
                                        <li>Bar & Drinkware</li>
                                        <li>Table Covers & Furnishings</li>
                                    </ul>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Storage</h3>
                                    <ul>
                                        <li>Bins</li>
                                        <li>Hangers</li>
                                        <li>Organisers</li>
                                        <li>Hooks & Holders</li>
                                        <li>Laundry Bags</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="a5 a">
                                <div class="aa1">
                                    <h3 class="redf">Brands</h3>
                                    <ul>
                                        <li>H&M</li>
                                        <li>Marks & Spencer</li>
                                        <li>Home Centre</li>
                                        <li>Spaces</li>
                                        <li>D'Decor</li>
                                        <li>Story@Home</li>
                                        <li>Pure Home & Living</li>
                                        <li>Swayam</li>
                                        <li>Raymond Home</li>
                                        <li>Maspar</li>
                                        <li>My Trident</li>
                                        <li>Cortina</li>
                                        <li>Random</li>
                                        <li>Ellementry</li>
                                        <li>ROMEE</li>
                                        <li>SEJ by Nisha Gupta</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="text t5" onMouseEnter={over} onMouseLeave={hide}><a href="#">BEAUTY</a>

                        <div class="mega_menu">
                            <div class="a1 a">
                                <div class="aa1">
                                    <h3 class="redf">Makeup</h3>
                                    <ul>
                                        <li>Lipstick</li>
                                        <li>Lip Gloss</li>
                                        <li>Lip Liner</li>
                                        <li>Mascara</li>
                                        <li>Eyeliner</li>
                                        <li>Kajal</li>
                                        <li>Eyeshadow</li>
                                        <li>Foundation</li>
                                        <li>Primer</li>
                                        <li>Concealer</li>
                                        <li>Compact</li>
                                        <li>Nail Polish</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="a2 a">
                                <div class="aa1">
                                    <h3 class="redf">Skincare, Bath & Body</h3>
                                    <ul>
                                        <li>Face Moisturiser</li>
                                        <li>Cleanser</li>
                                        <li>Masks & Peel</li>
                                        <li>Sunscreen</li>
                                        <li>Serum</li>
                                        <li>Face Wash</li>
                                        <li>Eye Cream</li>
                                        <li>Lip Balm</li>
                                        <li>Body Lotion</li>
                                        <li>Body Wash</li>
                                        <li>Body Scrub</li>
                                        <li>Hand Cream</li>
                                    </ul>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Baby Care</h3>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Masks</h3>
                                </div>
                            </div>
                            <div class="a3 a">

                                <div class="aa1">
                                    <h3 class="redf">Haircare</h3>
                                    <ul>
                                        <li>Shampoo</li>
                                        <li>Conditioner</li>
                                        <li>Hair Cream</li>
                                        <li>Hair Oil</li>
                                        <li>Hair Gel</li>
                                        <li>Hair Color</li>
                                        <li>Hair Serum</li>
                                        <li>Hair Accessory</li>
                                    </ul>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Fragrances</h3>
                                    <ul>
                                        <li>Perfume</li>
                                        <li>Deodorant</li>
                                        <li>Body Mist</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="a4 a">
                                <div class="aa1">
                                    <h3 class="redf">Appliances</h3>
                                    <ul>
                                        <li>Hair Straightener</li>
                                        <li>Hair Dryer</li>
                                        <li>Epilator</li>
                                    </ul>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Men's Grooming</h3>
                                    <ul>
                                        <li>Trimmers</li>
                                        <li>Beard Oil</li>
                                        <li>Hair Wax</li>
                                    </ul>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Beauty Gift & Makeup Set</h3>
                                    <ul>
                                        <li>Beauty Gift</li>
                                        <li>Makeup Kit</li>
                                    </ul>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Premium Beauty</h3>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Wellness & Hygiene</h3>
                                </div>
                            </div>
                            <div class="a5 a">
                                <div class="aa1">
                                    <h3 class="redf">Gadgets</h3>
                                    <ul>
                                        <li>Smart Wearables</li>
                                        <li>Fitness Gadgets</li>
                                        <li>Headphones</li>
                                        <li>Speakers</li>

                                    </ul>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Jewellery</h3>
                                    <ul>
                                        <li>Fashion Jewellery</li>
                                        <li>Fine Jewellery</li>
                                        <li>Earrings</li>
                                    </ul>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Backpacks</h3>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Handbags, Bags & Wallets</h3>
                                </div>
                                <div class="aa1">
                                    <h3 class="redf">Luggages & Trolleys</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="text t6" onMouseEnter={over} onMouseLeave={hide} style={{ display: "flex" }}><a href="#">STUDIO</a>
                        <h5 style={{ color: "#ff3f6c", marginTop: "-3px" }}
                        >&nbsp;NEW</h5>

                        <div class="mega_menu_studio">

                            <div class="in_studio">
                                <img class="first" src={require('./image/studio_logo.png')} alt=""></img>
                                <h4 style={{ fontWeight: "450", color: "rgb(101, 101, 101)" }}>Your daily inspiration for everything
                                    fashion</h4>
                            </div>
                            <div class="in_studio">
                                <img class="second" src={require('./image/star_img.png')} alt=""></img>
                            </div>
                            <div class="in_studio">
                                <a href="#">
                                    <button class="third">
                                        EXPLORE STUDIO
                                        <img style={{ height: "11px", marginLeft: "4px" }} src={require('./image/right_logo.png')} alt=""></img>
                                    </button>
                                </a>
                            </div>

                        </div>

                    </div>
                </div>

                <div class="sb">
                    <div class="search_bar">
                        <span class="search_logo material-symbols-outlined" style={{ color: "#888888" }}>
                            search
                        </span>
                        <input class="inputtxt" type="text" placeholder="Search for products, brand and more"></input>
                    </div>
                </div>

                <div class="last">
                    <Link to='/login'>
                        <div class="l">
                            <span class="l1 material-symbols-outlined">
                                person
                            </span>
                            <h5>Profile</h5>
                        </div>
                    </Link>
                    <Link to='/login'>
                        <div class="l">
                            <span class="l2 material-symbols-outlined">
                                favorite
                            </span>
                            <h5>Wishlist</h5>
                        </div>
                    </Link>
                    <Link to='/login'>
                        <div class="l">
                            <span class="l3 material-symbols-outlined">
                                shopping_bag
                            </span>
                            <h5>Bag</h5>
                        </div>
                    </Link>
                </div>
            </div>

        </>

    )
}

export default Navbar;