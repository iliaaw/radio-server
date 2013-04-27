require 'net/telnet'

class TelnetAdapter

  def self.send_command(command)
    conn = Net::Telnet.new(
      'Host' => 'localhost', 
      'Port' => '1234',
      'Timeout' => 1,
      'Telnetmode' => false,
      'Prompt' => /.*/
    )
    conn.puts("#{command}\n")
    conn.waitfor('Match' => /^END$/)
  end

end