class Schedule < ApplicationRecord
  belongs_to :user

  def self.scheduled_days
    Schedule.all.group_by{ |s| s.starttime.to_date }.map { |v,k| v }
  end

  def self.schedules_by_day day
    Schedule.where(starttime: day.beginning_of_day..day.end_of_day)
  end
end
