class SchedulesController < ApplicationController

  def create
    user = User.find(params[:userId])
    schedule = User.schedules.new(schedule_params)
    schedule.save
  end

  private

  def schedule_params
    params.require(:schedule).permit(:title, :description, :starttime, :duration)
  end
end
