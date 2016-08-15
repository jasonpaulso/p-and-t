class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :country, :category, :image
end
