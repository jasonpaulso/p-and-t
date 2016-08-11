class CartController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_session_cart
  def show
    @cart = Cart.find(session[:cart_id])
    render json: @cart
  end

  def add_to_cart
    cart = Cart.find(session[:cart_id])
    cart_product = cart.add_product(params[:product_id])
    cart_product.save
    head :no_content
  end

  def update
    cart = Cart.find(session[:cart_id])
    cart_product = cart.cart_products.find_by(product_id: params[:product_id])
    change_direction = params[:change]
    cart.change_quantity(cart_product, change_direction);
    cart_product.save
    head :no_content
  end

  def destroy
    session[:cart_id] = nil
    render :index
  end

private 

def set_session_cart
  session[:cart_id] = session[:cart_id] || Cart.create.id
end

end
