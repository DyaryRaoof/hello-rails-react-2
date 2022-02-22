class Api::V1::MessagesController < ApplicationController
  def index
    # Message.all
    id = rand(1..Message.count)
    @message = Message.find(id)
    render json: @message
  end
end
