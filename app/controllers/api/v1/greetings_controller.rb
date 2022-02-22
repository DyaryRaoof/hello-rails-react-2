class Api::V1::GreetingsController < ApplicationController
  def index
    render json: { greetings: [
      { id: 1, message: 'Hello, World!' }
    ] }
  end
end
