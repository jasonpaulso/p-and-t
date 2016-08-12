class ChangeCountryAndCategoryColumnInProducts < ActiveRecord::Migration[5.0]
  def change
    change_column :products, :category, :string
    change_column :products, :country, :string
  end
end
