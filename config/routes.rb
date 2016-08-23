Rails.application.routes.draw do


scope :api do
  get "place/:id(.:format)" => "place#show"
  get "store/(.:format)" => "store#index"
  get "store/product/:id(.:format)" => "store#show"
  get "cart/show" => "cart#show"
  post "cart/add_to_cart" => "cart#add_to_cart"
  patch "cart/update" => "cart#update"
  delete "cart/clear_cart" => "cart#destroy"
end

root "application#index"
get '*path' => 'application#index'
end
