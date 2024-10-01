require 'bundler/setup'
require 'shakapacker'

puts "Shakapacker required successfully"

if defined?(Shakapacker)
  puts "Shakapacker is defined"
  puts "Shakapacker methods: #{Shakapacker.methods.sort}"
  puts "Shakapacker constants: #{Shakapacker.constants.sort}"
  puts "Gem path: #{Gem.loaded_specs['shakapacker'].full_gem_path}"
else
  puts "Shakapacker is not defined"
end

puts "Ruby version: #{RUBY_VERSION}"
puts "Load path:"
puts $LOAD_PATH

# Try to load the version file directly
begin
  require 'shakapacker/version'
  puts "Shakapacker version file loaded successfully"
  puts "Version: #{Shakapacker::VERSION}" if defined?(Shakapacker::VERSION)
rescue LoadError => e
  puts "Failed to load shakapacker/version: #{e.message}"
end
