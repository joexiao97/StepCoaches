class CreateNotes < ActiveRecord::Migration[7.1]
  def change
    create_table :notes do |t|
      t.integer :rating, null: false
      t.text :notes, null: false
      t.integer :appointment_id, null: false
      t.timestamps
    end
  end
end
