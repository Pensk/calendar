class Schedule < ApplicationRecord
  belongs_to :user

  def self.schedules_by_day day
    Schedule.where(starttime: day.beginning_of_day..day.end_of_day)
  end
end
