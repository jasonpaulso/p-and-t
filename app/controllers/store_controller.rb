class StoreController < ApplicationController
  skip_before_action :verify_authenticity_token
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

  def add_to_cart
    cart = Cart.find(session[:cart_id])
    cart_product = cart.add_product(params[:product_id])
    binding.pry
    cart_product.save
    head :no_content
  end

  def change_cart_product_quantity
    cart = Cart.find(session[:cart_id])
    cart_product = cart.find(params[:product_id])
    case params[:change]
    when "up"
      cart_product.quantity +=1
    when "down"
      cart_product.quantity -=1
    end
  end

end
