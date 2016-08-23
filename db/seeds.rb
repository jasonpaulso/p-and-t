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

  copenhagen = Place.create(name:"Copenhagen", map:"Copenhagen_Map.jpg", image:"copenhagen.jpg", image_text:"The Round Tower")
  
  copenhagen_destination_list = 
  [{name:"Almanak",category:eat,image:"Almanak.jpg"},
    {name:"Copenhagen Street Food",category:eat,image:"CopenhagenStreetFood.jpeg"},
    {name:"KÖD",category:eat,image:"KoD.jpg"},
    {name:"Hay House",category:shop,image:"HayHouse.jpg"},
    {name:"Playtype",category:shop,image:"Playtype.jpg"},
    {name:"Nyhavn",category:see,image:"Nyhavn.jpeg"},
    {name:"The Round Tower",category:see,image:"TheRoundTower.jpeg"},
    {name:"Tivoli",category:see,image:"Tivoli.jpeg"},
    {name:"Tortus",category:shop,image:"Tortus.jpg"}]

  copenhagen_destination_list.each do |destination|
    copenhagen.destinations.create(destination)
  end

  #Stockholm Seeds

  stockholm = Place.create(name:"Stockholm", map:"Stockholm_Map.jpg", image:"stockholm.jpg", image_text:"Stockholm Archipelago")
  
  stockholm_destination_list = 
  [{name:"Knut",category:eat,image:"Eat_Knut.jpg"},
    {name:"Malarpaviljongen",category:eat,image:"Eat_Malarpaviljongen.jpg"},
    {name:"Rosendals Tradgard",category:eat,image:"Eat_RosendalsTradgard.jpg"},
    {name:"Archipelago",category:see,image:"See_Archipelago.jpeg"},
    {name:"City Hall",category:see,image:"See_CityHall.jpg"},
    {name:"Skansen",category:see,image:"See_Skansen.jpg"},
    {name:"Byredo",category:shop,image:"Shop_Byredo.jpg"},
    {name:"Konst-ig",category:shop,image:"Shop_Konst-ig.jpg"},
    {name:"Nitty Gritty",category:shop,image:"Shop_NittyGritty.jpg"}]

  stockholm_destination_list.each do |destination|
    stockholm.destinations.create(destination)
  end

  #Helsinki Seeds

  helsinki = Place.create(name:"Helsinki", map:"Helsinki_Map.jpg", image:"helsinki.jpg", image_text:"The Sibelius Monument")
  
  helsinki_destination_list = 
  [{name:"B Smokery",category:eat,image:"Dine_BSmokery.jpg"},
    {name:"Tori",category:eat,image:"Dine_Tori.JPG"},
    {name:"Vanha Kauppahalli",category:eat,image:"Dine_VanhaKauppahalli.jpg"},
    {name:"Kiasma",category:see,image:"See_Kiasma.jpeg"},
    {name:"Sibelius Monument",category:see,image:"See_SibeliusMonument.JPG"},
    {name:"The Senate Square",category:see,image:"See_TheSenateSquare.jpg"},
    {name:"Iitalla",category:shop,image:"Shop_Iittala.jpg"},
    {name:"Kauniste",category:shop,image:"Shop_Kauniste.jpg"},
    {name:"Marimekko",category:shop,image:"Shop_Marimekko.jpg"}]

  helsinki_destination_list.each do |destination|
    helsinki.destinations.create(destination)
  end

  #Product Seeds

3.times { 
  product = Product.create(
    name:Faker::Commerce.product_name, 
    price:Faker::Commerce.price, 
    description:Faker::Commerce.color,
    image:"Candle.jpg",
    category:"Art",
    country:"Denmark",
    destination_id:copenhagen.destinations.first.id)
}

 3.times { 
  product = Product.create(
    name:Faker::Commerce.product_name, 
    price:Faker::Commerce.price, 
    description:Faker::Commerce.color,
    image:"KaleidoTray.jpg",
    category:"Hardware",
    country:"Denmark",
    destination_id:copenhagen.destinations.first.id)
    }

 3.times { 
  product = Product.create(
    name:Faker::Commerce.product_name, 
    price:Faker::Commerce.price, 
    description:Faker::Commerce.color,
    image:"LensBox_1.jpg",
    category:"Kitchen",
    country:"Finland",
    destination_id:helsinki.destinations.first.id)
}
     
 3.times { 
  product = Product.create(
    name:Faker::Commerce.product_name, 
    price:Faker::Commerce.price, 
    description:Faker::Commerce.color,
    image:"Parfum.jpg",
    category:"Home",
    country:"Sweden",
    destination_id:stockholm.destinations.first.id)
    }

 3.times { 
  product = Product.create(
    name:Faker::Commerce.product_name, 
    price:Faker::Commerce.price, 
    description:Faker::Commerce.color,
    image:"Vase.jpg",
    category:"Misc",
    country:"Denmark",
    destination_id:copenhagen.destinations.last.id)
}


