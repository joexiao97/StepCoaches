class Appointment < ApplicationRecord
    validates :appointment, :coach_id, presence: true

    belongs_to :coach
    has_one :note
end
