class CreateCarts < ActiveRecord::Migration[5.0]
  def change
    create_table :carts do |t|
      t.string :user_name
      t.string :user_email
      t.integer :user_zip

      t.timestamps
    end
  end
end
