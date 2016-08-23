class AddTextColumnToPlaces < ActiveRecord::Migration[5.0]
  def change
    add_column :places, :image_text, :text
    add_column :places, :blurb, :text
  end
end
