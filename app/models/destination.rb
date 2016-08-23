class Destination < ApplicationRecord
  belongs_to :place
  belongs_to :category
  has_many :products
end
