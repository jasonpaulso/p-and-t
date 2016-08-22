class AddColumnToPlaces < ActiveRecord::Migration[5.0]
  def change
    add_column :places, :image, :string
    add_column :places, :map, :string
  end
end
