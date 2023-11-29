class CreateStudents < ActiveRecord::Migration[7.1]
  def change
    create_table :students do |t|
      t.integer :appointment_id
      t.integer :notes_id

      t.timestamps
    end
  end
end
