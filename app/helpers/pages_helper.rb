module PagesHelper
  def calendarData
    scheduled_days = Schedule.select('date(starttime) as day').group('date(starttime)').pluck('date(starttime)')
    schedules = Schedule.schedules_by_day(Time.zone.now).order(:starttime).map do |s|
      {
        user: s.user.username,
        title: s.title,
        description: s.description,
        duration: s.duration,
        starttime: s.starttime
      }
    end
    {
      date: Time.zone.now.to_date,
      scheduled_days: scheduled_days,
      schedules: schedules
    }
  end
end
