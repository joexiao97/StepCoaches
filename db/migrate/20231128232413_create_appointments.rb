class CreateAppointments < ActiveRecord::Migration[7.1]
  def change
    create_table :appointments do |t|
      t.datetime :appointment, null: false
      t.integer :note_id
      t.integer :coach_id, null: false
      t.integer :student_id

      t.timestamps
    end
  end
end
