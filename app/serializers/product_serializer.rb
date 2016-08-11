class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :cart_products
  has_many :cart_products, serializer: CartProductSerializer
end
