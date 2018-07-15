module PagesHelper
  def calendarData
    {
      date: Time.zone.now.to_date
    }
  end
end
