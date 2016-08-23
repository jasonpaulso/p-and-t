# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
3.times { 
  product = Product.create(
    name:Faker::Commerce.product_name, 
    price:Faker::Commerce.price, 
    description:Faker::Commerce.color,
    image:"Candle.jpg",
    category:"Art",
    country:"Sweden")}

 3.times { 
  product = Product.create(
    name:Faker::Commerce.product_name, 
    price:Faker::Commerce.price, 
    description:Faker::Commerce.color,
    image:"KaleidoTray.jpg",
    category:"Hardware",
    country:"Denmark")}

 3.times { 
  product = Product.create(
    name:Faker::Commerce.product_name, 
    price:Faker::Commerce.price, 
    description:Faker::Commerce.color,
    image:"LensBox_1.jpg",
    category:"Kitchen",
    country:"Finland")}
     
 3.times { 
  product = Product.create(
    name:Faker::Commerce.product_name, 
    price:Faker::Commerce.price, 
    description:Faker::Commerce.color,
    image:"Parfum.jpg",
    category:"Home",
    country:"Sweden")}

 3.times { 
  product = Product.create(
    name:Faker::Commerce.product_name, 
    price:Faker::Commerce.price, 
    description:Faker::Commerce.color,
    image:"Vase.jpg",
    category:"Misc",
    country:"Denmark")}

#Destination Category Seeds

  eat = Category.create(name:"Dine")
  shop = Category.create(name:"Shop")
  see = Category.create(name:"See")

#Copenhagen Seeds

  copenhagen = Place.create(name:"Copenhagen", map:"Copenhagen_Map.jpg")
  
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


