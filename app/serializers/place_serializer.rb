class PlaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :map, :destinations
end
