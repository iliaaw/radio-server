worker_processes 1

working_directory "/var/www/radio.awolf.ru/"

listen "/tmp/radio.awolf.ru.sock", :backlog => 64

timeout 30

pid "/var/www/radio.awolf.ru/shared/pids/unicorn.pid"

stderr_path "/var/log/unicorn/radio.awolf.ru/stderr.log"
stdout_path "/var/log/unicorn/radio.awolf.ru/stdout.log"

preload_app true
GC.respond_to?(:copy_on_write_friendly=) and GC.copy_on_write_friendly = true

before_fork do |server, worker|
  defined?(ActiveRecord::Base) and ActiveRecord::Base.connection.disconnect!
end

after_fork do |server, worker|
  defined?(ActiveRecord::Base) and  ActiveRecord::Base.establish_connection
end
