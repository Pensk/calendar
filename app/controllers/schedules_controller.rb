class SchedulesController < ApplicationController

  def index
    date = Date.parse(params[:date])
    @schedules = Schedule.schedules_by_day(date)
  end

  def create
    user = User.find(params[:userId])
    schedule = user.schedules.new(schedule_params)
    schedule.save
    @schedules = Schedule.schedules_by_day(schedule.starttime)
  end

  def scheduled_days
    render json: Schedule.scheduled_days
  end

  private

  def schedule_params
    params.require(:schedule).permit(:title, :description, :starttime, :duration)
  end
end
