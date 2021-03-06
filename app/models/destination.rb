class Destination < ApplicationRecord
  belongs_to :place
  belongs_to :category
  has_many :products

  def category_name
    category.name
  end
end
