class Cart < ApplicationRecord
  has_many :cart_products
  has_many :products, through: :cart_products

  def cart_json
    cart_array = [] 
      cart_products.each do |product|
        cart_array << {
              id: product.product.id,
              name: product.product.name, 
              price: product.product.price,
              description: product.product.description,
              quantity: product.quantity
            }
      end
      return cart_array
  end

end
