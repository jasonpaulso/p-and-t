class CartProduct < ApplicationRecord
  belongs_to :cart
  belongs_to :product

  def total 
    self.product.price * self.quantity
  end
  def name
    product.name
  end
end
