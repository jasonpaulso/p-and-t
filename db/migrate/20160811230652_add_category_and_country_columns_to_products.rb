class AddCategoryAndCountryColumnsToProducts < ActiveRecord::Migration[5.0]
  def change
    add_column :products, :category, :integer
    add_column :products, :country, :integer
  end
end
