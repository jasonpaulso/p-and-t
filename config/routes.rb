Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
get "clear_cart" => "cart#destroy"
scope :api do
  get "store/(.:format)" => "store#index"
  get "store/:id(.:format)" => "store#show"
  get "cart/show" => "cart#show"
  post "cart/add_to_cart" => "cart#add_to_cart"
  patch "cart/update" => "cart#update"
end




root "application#index"
get '*path' => 'application#index'
end
