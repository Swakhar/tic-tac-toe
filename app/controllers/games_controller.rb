class GamesController < ApplicationController
  before_action :authentic_user

  def index
    @steps = Step.all
  end
end
