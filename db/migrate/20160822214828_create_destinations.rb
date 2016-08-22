class CreateDestinations < ActiveRecord::Migration[5.0]
  def change
    create_table :destinations do |t|
      t.string :name
      t.integer :place_id
      t.integer :category_id

      t.timestamps
    end
  end
end
