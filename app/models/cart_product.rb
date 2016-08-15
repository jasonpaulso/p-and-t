class CartProduct < ApplicationRecord
  belongs_to :cart
  belongs_to :product

  def total 
    self.product.price * self.quantity
  end
  def name
    product.name
  end
  def price
    product.price
  end
  def description
    product.description
  end

  def product_id
    product.id
  end
  def image 
    product.image
  end
end
