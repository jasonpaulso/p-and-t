class StoreController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_session_cart
  def index
    # binding.pry
    render json: Product.all
  end
  def show
    render json: Product.find(params[:id])
  end
  def current_cart
    cart = Cart.find(session[:cart_id]).cart_json
    render json: cart
  end

  def add_to_cart
    cart = Cart.find(session[:cart_id])
    cart_product = cart.add_product(params[:product_id])
    # binding.pry
    cart_product.save
    head :no_content
  end

  def change_cart_product_quantity
    cart = Cart.find(session[:cart_id])
    cart_product = cart.cart_products.find_by(product_id: params[:product_id])
    case params[:change]
    when "up"
      cart_product.quantity +=1
    when "down"
      cart_product.quantity -=1
    end
    cart_product.save
  end

  def clear_cart
    session[:cart_id] = nil
    flash.now[:notice] = 'Message sent!'
    render :index
  end

private 

def set_session_cart
  session[:cart_id] = session[:cart_id] || Cart.create.id
end

end
