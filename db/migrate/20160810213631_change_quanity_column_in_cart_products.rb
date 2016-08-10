class ChangeQuanityColumnInCartProducts < ActiveRecord::Migration[5.0]
  def change
    change_column :cart_products, :quantity, :integer, default:1
  end
end
