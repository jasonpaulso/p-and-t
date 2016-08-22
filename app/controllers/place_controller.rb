class PlaceController < ApplicationController
  def index
    @place = Place.last
    render json: @place
  end
end
