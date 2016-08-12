class CartSerializer < ActiveModel::Serializer
  attributes :id, :total_items, :total_value, :user_name, :user_email, :user_zip
  has_many :cart_products, serializer: CartProductSerializer
end
