class Place < ApplicationRecord
  has_many :destinations
  has_many :categories, through: :destinations
end
