Kigendan::Application.routes.draw do
  root :to => 'static_pages#home', :as => "home"

  resources :tracks, :only => [:index, :new, :create, :update, :destroy]
end
