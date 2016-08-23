class PlaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :map, :blurb, :image_text, :destinations
end
