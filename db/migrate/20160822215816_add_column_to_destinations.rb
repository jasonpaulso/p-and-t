class AddColumnToDestinations < ActiveRecord::Migration[5.0]
  def change
    add_column :destinations, :image, :string
    add_column :destinations, :link, :string
  end
end
