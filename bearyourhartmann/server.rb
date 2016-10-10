module Sinatra
  class Server < Sinatra::Base
    get "/" do
      erb :index
    end

    get "/contact" do
      erb :contact
    end

    get "/eyecandy" do
      erb :eyecandy
    end

    get "/registry" do
      erb :registry
    end

    get "/wedding" do
      erb :wedding
    end

  end
end
