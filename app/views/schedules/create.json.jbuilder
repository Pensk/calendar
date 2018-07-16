json.array! @schedules do |s|
  json.user s.user.username
  json.title s.title
  json.description s.description
  json.duration s.duration
  json.starttime s.starttime
end
