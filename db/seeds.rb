# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

coach_joe = Coach.create!(
    name: "Coach Joe",
    email: "CoachJoe@gmail.com",
    type: "Coach"
)

coach_wyatt = Coach.create!(
    name: "Coach Wyatt",
    email: "CoachWyatt@gmail.com",
    type: "Coach"
)

7.times do |i|
    name = ('a'..'z').to_a.shuffle[0,8].join.capitalize
  Coach.create!(
    name: "Coach #{name}",
    email: "#{name}@gmail.com",
    type: "Coach"
  )
end

student_joe = Student.create!(
    name: "Student Joe",
    email: "StudentJoe@gmail.com",
    type: "Student"
)

student_wyatt = Student.create!(
    name: "Student Wyatt",
    email: "StudentWyatt@gmail.com",
    type: "Student"
)

7.times do |i|
    name = ('a'..'z').to_a.shuffle[0,8].join.capitalize
  Student.create!(
    name: "Student #{name}",
    email: "#{name}@gmail.com",
    type: "Student"
  )
end

Appointment.create!(appointment: DateTime.now, coach_id: coach_joe.id, student_id: student_joe.id)
Appointment.create!(appointment: DateTime.parse('2028-02-03T04:05:06+07:00'), coach_id: coach_joe.id, student_id: student_wyatt.id)
Appointment.create!(appointment: DateTime.parse('2029-02-03T04:05:06+07:00'), coach_id: coach_joe.id, student_id: Student.last)
Appointment.create!(appointment: DateTime.parse('2008-02-03T04:05:06+07:00'), coach_id: coach_wyatt.id, student_id: student_joe.id)
Appointment.create!(appointment: DateTime.parse('2030-02-03T04:05:06+07:00'), coach_id: coach_wyatt.id, student_id: student_joe.id)
Appointment.create!(appointment: DateTime.parse('2031-02-03T04:05:06+07:00'), coach_id: coach_wyatt.id, student_id: Student.last)
