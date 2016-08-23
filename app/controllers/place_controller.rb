class PlaceController < ApplicationController
  def index
    @places = Place.all
    render json: @place
  end

  def show
    @place = Place.find(params[:id])
    render json: @place
  end
end
