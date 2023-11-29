class Api::V1::StudentsController < ApplicationController
  before_action :find_student, only: %i[show]

  def index
    students = Student.all
    render json: students
  end

  def show
    render json: @student
  end

  private
  def find_student
    student = Student.find(params[:id])
    appointments = student.appointments.map do |appointment|
      coach_id = appointment.coach_id
      appointment = appointment.as_json
      appointment.merge!(coach_name: Coach.find(coach_id).name)
      appointment.merge!(coach_email: Coach.find(coach_id).email)
      appointment.merge!(appointment_start: format_time(appointment["appointment"]))
        appointment.merge!(appointment_end: format_time(appointment["appointment"], 2))
    end

    if appointments
      appointments.sort_by! {|k| k["appointment"]}
    end

    @student = {
      student: student,
      appointments: appointments
    }
  end

  def format_time(time, incr_hours=0)
    (time.to_datetime + incr_hours.hours).utc.strftime('%m/%d/%Y %H:%M %p')
  end
end
