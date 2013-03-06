CarrierWave::SanitizedFile.sanitize_regexp = /[^[:word:]\.]/

CarrierWave.configure do |config|
  config.root = Rails.root
end