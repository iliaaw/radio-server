Kigendan::Application.routes.draw do
  root :to => 'static_pages#home', :as => 'home'

  resources :tracks, :only => [:index, :new, :create, :update, :destroy] do
    get 'page/:page', :action => :index, :on => :collection
  end

  resources :playlists do
    get 'page/:page', :action => :index, :on => :collection
  end
  match '/playlists/:id/play', :to => 'playlists#play', :as => 'play_playlist', :via => :post
end
