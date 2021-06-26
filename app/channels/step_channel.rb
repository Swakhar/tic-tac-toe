class StepChannel < ApplicationCable::Channel
  def subscribed
    stream_from "step_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def select_box(data)
    # I hardcoded the game in order to make the feature simpler
    Step.create(game: Game.first, tile: data['box'].to_i)
  end
end
