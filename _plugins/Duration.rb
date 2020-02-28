require 'active_support'
require 'active_support/duration'

module Jekyll
  module Duration
    def humanize_duration(isoduration)
      ActiveSupport::Duration.parse(isoduration.upcase).inspect
    end
  end
end

Liquid::Template.register_filter(Jekyll::Duration)
