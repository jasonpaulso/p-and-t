Rails.application.routes.draw do
get "clear_cart" => "cart#destroy"

scope :api do
  get "store/(.:format)" => "store#index"
  get "store/product/:id(.:format)" => "store#show"
  get "cart/show" => "cart#show"
  post "cart/add_to_cart" => "cart#add_to_cart"
  patch "cart/update" => "cart#update"
end

root "application#index"
get '*path' => 'application#index'
end
