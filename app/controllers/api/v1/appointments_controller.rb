class Api::V1::AppointmentsController < ApplicationController
  before_action :find_appointment, only: %i[show update]

  def index
    render json: appointments_info(Appointment.where(student_id: nil))
  end

  def create
    coach_id = Coach.find_by(email: params[:coach]).id
    appointment = Appointment.create!(
      appointment: params[:date],
      coach_id: coach_id
    )
    if appointment
      render json: appointment
    else
      render json: appointment.errors
    end
  end

  def show
    render json: appointments_info([@appointment]).first
  end

  def update
    student_id = Student.find_by(email: params[:student]).id
    if @appointment.update!(student_id: student_id)
      render json: @appointment
    else
      render json: appointment.errors
    end
  end

  private

  def find_appointment
    @appointment = Appointment.find(params[:id])
  end

  def appointments_info(appointments)
    appointments.map do |appointment|
      coach_id = appointment.coach_id
      student_id = appointment.student_id
      appointment = appointment.as_json
      appointment.merge!(coach_name: Coach.find(coach_id).name)
      appointment.merge!(student_name: Student.find(student_id).name) if student_id
      appointment.merge!(time_start: appointment["appointment"].to_datetime.utc.strftime('%m/%d/%Y %H:%M %p'))
      appointment.merge!(time_end: (appointment["appointment"].to_datetime + 2.hours).utc.strftime('%m/%d/%Y %H:%M %p'))
    end
  end
end
