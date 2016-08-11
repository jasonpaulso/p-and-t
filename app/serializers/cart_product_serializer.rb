class CartProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :quantity, :price, :total, :description, :product_id
  # has_one :product

end
