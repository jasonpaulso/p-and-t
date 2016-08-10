Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
resources :store, only: [:clear_cart]
scope :api do
  get "products/(.:format)" => "store#index"
  get "products/:id(.:format)" => "store#show"
  get "store/current_cart" => "store#current_cart"
  post "store/add_to_cart" => "store#add_to_cart"
  post "store/change_cart_product_quantity" => "store#change_cart_product_quantity"
end




root "application#index"
get '*path' => 'application#index'
end
