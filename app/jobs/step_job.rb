class StepJob < ApplicationJob
  queue_as :default

  def perform(step)
    winner = Game.check_winner if step.position >=4
    tie = (step.position >= 9)
    ActionCable.server.broadcast('step_channel',
      step: step, winner: winner, tie: tie)

    Step.destroy_all if winner || tie
  end
end
