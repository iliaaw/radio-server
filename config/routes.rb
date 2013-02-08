Kigendan::Application.routes.draw do
  root :to => 'static_pages#home', :as => "home"

  resources :tracks
end
