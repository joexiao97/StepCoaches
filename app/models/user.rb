class User < ApplicationRecord
    validates :name, :email, :type, presence: true
    validates :email, uniqueness: true
end
