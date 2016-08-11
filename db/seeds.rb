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
    category:1,
    country:1)}

 3.times { 
  product = Product.create(
    name:Faker::Commerce.product_name, 
    price:Faker::Commerce.price, 
    description:Faker::Commerce.color,
    category:2,
    country:2)}

 3.times { 
  product = Product.create(
    name:Faker::Commerce.product_name, 
    price:Faker::Commerce.price, 
    description:Faker::Commerce.color,
    category:3,
    country:3)}
     
 3.times { 
  product = Product.create(
    name:Faker::Commerce.product_name, 
    price:Faker::Commerce.price, 
    description:Faker::Commerce.color,
    category:4,
    country:4)}

 3.times { 
  product = Product.create(
    name:Faker::Commerce.product_name, 
    price:Faker::Commerce.price, 
    description:Faker::Commerce.color,
    category:5,
    country:5)}