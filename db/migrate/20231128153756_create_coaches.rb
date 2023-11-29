class CreateCoaches < ActiveRecord::Migration[7.1]
  def change
    create_table :coaches do |t|
      t.integer :appointment_id

      t.timestamps
    end
  end
end
