class Api::V1::CoachesController < ApplicationController
  before_action :find_coach, only: %i[show]

  def index
    coaches = Coach.all
    render json: coaches
  end

  def show
    render json: @coach
  end

  private
  def find_coach
    coach = Coach.find(params[:id])
    appointments = coach.appointments.map do |appointment|
      student_id = appointment.student_id
      appointment = appointment.as_json
      if student_id
        appointment.merge!(student_name: Student.find(student_id).name)
        appointment.merge!(student_email: Student.find(student_id).email)
        appointment.merge!(appointment_start: format_time(appointment["appointment"]))
        appointment.merge!(appointment_end: format_time(appointment["appointment"], 2))
        appointment.merge!(status: "Booked")
      else
        appointment.merge!(appointment_start: format_time(appointment["appointment"]))
        appointment.merge!(appointment_end: format_time(appointment["appointment"], 2))
        appointment.merge!(status: "Open")
      end
    end

    if appointments
      appointments.sort_by! {|k| k["appointment"]}
    end

    @coach = {
      coach: coach,
      appointments: appointments
    }
  end

  def format_time(time, incr_hours=0)
    (time.to_datetime + incr_hours.hours).utc.strftime('%m/%d/%Y %H:%M %p')
  end
end
