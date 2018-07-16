class SchedulesController < ApplicationController

  def create
    user = User.find(params[:userId])
    schedule = user.schedules.new(schedule_params)
    schedule.save
    render json: schedule.schedules_by_day(schedule.starttime)
  end

  private

  def schedule_params
    params.require(:schedule).permit(:title, :description, :starttime, :duration)
  end
end
