class CartSerializer < ActiveModel::Serializer
  attributes :id, :total_items, :total_value
  has_many :cart_products, serializer: CartProductSerializer
end
