class Game < ApplicationRecord
  WINNING_COMBINATIONS = [
    [1,2,3], [4,5,6], [7,8,9],
    [1,4,7], [2,5,8], [3,6,9],
    [1,5,9], [3,5,7]
  ]

  has_many :steps, -> { order("position ASC") }

  def self.check_winner
    steps = Step.all
    even_steps = steps.select do |m|
      m.position.even?
    end.pluck(:box)

    odd_steps = steps.select do |m|
      m.position.odd?
    end.pluck(:box)

    WINNING_COMBINATIONS.select do |array|
      (array - even_steps).empty? || (array - odd_steps).empty?
    end.any?
  end
end
