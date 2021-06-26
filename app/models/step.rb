class Step < ApplicationRecord
  belongs_to :game

  after_create_commit { StepJob.perform_later self }

  validates :box, uniqueness: true, presence: true,
    numericality: { only_integer: true, less_than: 10,
                    greater_than: 0, message: 'Position limit exceede' }
end
