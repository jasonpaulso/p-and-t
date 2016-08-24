# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#Destination Category Seeds

  eat = Category.create(name:"Dine")
  shop = Category.create(name:"Shop")
  see = Category.create(name:"See")

#Copenhagen Seeds

  copenhagen = Place.create(
    name:"Copenhagen", 
    map:"Copenhagen_Map.jpg", 
    image:"copenhagen.jpg", 
    image_text:"The Round Tower",
    blurb: "Copenhagen is the capital and most populated city of Denmark. It has a municipal population of 591,481 and a larger urban population of 1,280,371 (as of 1 January 2016). The Copenhagen metropolitan area has just over 2 million inhabitants. The city is situated on the eastern coast of the island of Zealand; another small portion of the city is located on Amager, and is separated from Malmö, Sweden, by the strait of Øresund.")
  
  copenhagen_destination_list = 
  [{name:"Almanak",category:eat,image:"Almanak.jpg", link:"http://thestandardcph.dk/en/almanak"},
    {name:"Copenhagen Street Food",category:eat,image:"CopenhagenStreetFood.jpeg", link:"http://copenhagenstreetfood.dk/en/"},
    {name:"KÖD",category:eat,image:"KoD.jpg", link:"http://koedkbh.com/"},
    {name:"Hay House",category:shop,image:"HayHouse.jpg", link:"http://hay.dk/#/site/furniture/new"},
    {name:"Playtype",category:shop,image:"Playtype.jpg", link:"https://playtype.com/"},
    {name:"Nyhavn",category:see,image:"Nyhavn.jpeg", link:"http://www.visitcopenhagen.com/copenhagen/nyhavn-gdk474735"},
    {name:"The Round Tower",category:see,image:"TheRoundTower.jpeg", link:"http://www.visitcopenhagen.com/copenhagen/round-tower-gdk410741"},
    {name:"Tivoli",category:see,image:"Tivoli.jpeg", link:"https://www.tivoli.dk/en"},
    {name:"Tortus",category:shop,image:"Tortus.jpg", link:"http://tortus-copenhagen.com/"}]

  copenhagen_destination_list.each do |destination|
    copenhagen.destinations.create(destination)
  end

  #Stockholm Seeds

  stockholm = Place.create(
    name:"Stockholm", 
    map:"Stockholm_Map.jpg", 
    image:"stockholm.jpg", 
    image_text:"Stockholm Archipelago",
    blurb: "Stockholm is the capital of Sweden and the most populous city in the Nordic countries, with 925 934 people living in the municipality, approximately 1.4 million in the urban area, and 2.2 million in the metropolitan area. The city is spread across 14 islands on the coast in the southeast of Sweden at the mouth of Lake Mälaren, by the Stockholm archipelago and the Baltic Sea. The area has been settled since the Stone Age, in the 6th millennium BC, and was founded as a city in 1252 by a Swedish statesman Birger Jarl. It is also the capital of Stockholm County.")
  
  stockholm_destination_list = 
  [{name:"Knut",category:eat,image:"Eat_Knut.jpg", link:"http://restaurangknut.se/sv"},
    {name:"Malarpaviljongen",category:eat,image:"Eat_Malarpaviljongen.jpg", link:"http://malarpaviljongen.se/"},
    {name:"Rosendals Tradgard",category:eat,image:"Eat_RosendalsTradgard.jpg", link:"http://www.rosendalstradgard.se/"},
    {name:"Stockholm Archipelago",category:see,image:"See_Archipelago.jpeg", link:"http://www.stockholmarchipelago.se/en/"},
    {name:"City Hall",category:see,image:"See_CityHall.jpg", link:"http://international.stockholm.se/the-city-hall/"},
    {name:"Skansen",category:see,image:"See_Skansen.jpg", link:"http://www.skansen.se/en/kategori/english"},
    {name:"Byredo",category:shop,image:"Shop_Byredo.jpg", link:"https://byredo.com/"},
    {name:"Konst-ig",category:shop,image:"Shop_Konst-ig.jpg", link:"http://www.konstig.se/"},
    {name:"Nitty Gritty",category:shop,image:"Shop_NittyGritty.jpg", link: "https://www.nittygrittystore.com/"}]

  stockholm_destination_list.each do |destination|
    stockholm.destinations.create(destination)
  end

  #Helsinki Seeds

  helsinki = Place.create(
    name:"Helsinki", 
    map:"Helsinki_Map.jpg", 
    image:"helsinki.jpg", 
    image_text:"The Sibelius Monument",
    blurb: "Helsinki is the capital and largest city of Finland. It is in the region of Uusimaa, in southern Finland, on the shore of the Gulf of Finland. Helsinki has a population of 629,512, an urban population of 1,214,210, and a metropolitan population of over 1.4 million, making it the most populous municipality and urban area in Finland. Helsinki is located some 80 kilometres (50 mi) north of Tallinn, Estonia, 400 km (250 mi) east of Stockholm, Sweden, and 388 km (241 mi) west of Saint Petersburg, Russia. Helsinki has close historical connections with these three cities.")
  
  helsinki_destination_list = 
  [{name:"B Smokery",category:eat,image:"Dine_BSmokery.jpg", link:"http://bsmokery.fi/"},
    {name:"Tori",category:eat,image:"Dine_Tori.JPG", link:"http://www.ravintolatori.fi/punavuori/"},
    {name:"Vanha Kauppahalli",category:eat,image:"Dine_VanhaKauppahalli.jpg", link:"http://vanhakauppahalli.fi/en/"},
    {name:"Kiasma",category:see,image:"See_Kiasma.jpeg", link:"http://www.kiasma.fi/en/"},
    {name:"Sibelius Monument",category:see,image:"See_SibeliusMonument.JPG", link:"http://www.visithelsinki.fi/en/whats-on/for-cruise-visitors/sibelius-monument"},
    {name:"The Senate Square",category:see,image:"See_TheSenateSquare.jpg", link:"http://www.visithelsinki.fi/en/see-and-experience/sights-and-attractions/senate-square"},
    {name:"Iitalla",category:shop,image:"Shop_Iittala.jpg", link:"https://www.iittala.com/home"},
    {name:"Kauniste",category:shop,image:"Shop_Kauniste.jpg", link:"http://www.kauniste.com/aboutus/"},
    {name:"Marimekko",category:shop,image:"Shop_Marimekko.jpg", link:"https://us.marimekko.com/#US"}]

  helsinki_destination_list.each do |destination|
    helsinki.destinations.create(destination)
  end

  #Product Seeds

  description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

3.times { 
  product = Product.create(
    name:Faker::Commerce.product_name, 
    price:Faker::Commerce.price, 
    description:description,
    image:"Candle.jpg",
    category:"Art",
    country:"Denmark",
    destination_id:copenhagen.destinations.first.id)
}

 3.times { 
  product = Product.create(
    name:Faker::Commerce.product_name, 
    price:Faker::Commerce.price, 
    description:description,
    image:"KaleidoTray.jpg",
    category:"Hardware",
    country:"Denmark",
    destination_id:copenhagen.destinations.first.id)
    }

 3.times { 
  product = Product.create(
    name:Faker::Commerce.product_name, 
    price:Faker::Commerce.price, 
    description:description,
    image:"LensBox_1.jpg",
    category:"Kitchen",
    country:"Finland",
    destination_id:helsinki.destinations.first.id)
}
     
 3.times { 
  product = Product.create(
    name:Faker::Commerce.product_name, 
    price:Faker::Commerce.price, 
    description:description,
    image:"Parfum.jpg",
    category:"Home",
    country:"Sweden",
    destination_id:stockholm.destinations.first.id)
    }

 3.times { 
  product = Product.create(
    name:Faker::Commerce.product_name, 
    price:Faker::Commerce.price, 
    description:description,
    image:"Vase.jpg",
    category:"Misc",
    country:"Denmark",
    destination_id:copenhagen.destinations.last.id)
}


