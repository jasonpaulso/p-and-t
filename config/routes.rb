Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

scope :api do
  get "products/(.:format)" => "store#index"
  get "products/:id(.:format)" => "store#show"
  get "store/current_cart" => "store#current_cart"
  # post "products/cart" => "products#add_to_cart"
end




root "application#index"
get '*path' => 'application#index'
end
