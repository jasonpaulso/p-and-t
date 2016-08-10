class StoreController < ApplicationController
  def index
    render json: Product.all
  end
  def show
    render json: Product.find(params[:id])
  end
  def current_cart
    session[:cart_id] = session[:cart_id] || Cart.create.id
    cart = Cart.find(session[:cart_id]).cart_json
    render json: cart
  end

end
