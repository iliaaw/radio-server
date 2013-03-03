Kigendan::Application.routes.draw do

  match '/', :to => 'static_pages#home'
  match '/live', :to => 'static_pages#live'

  resources :tracks, 
            :only => [:index, :new, :create, :update, :destroy],
            :constraints => { :id => /[0-9]+/ } do
    get 'page:page', :action => :index, :on => :collection
  end

  resources :playlists, 
            :only => [:index, :new, :create, :show, :update, :destroy, :play],
            :constraints => { :id => /[0-9]+/ } do
    get 'page:page', :action => :index, :on => :collection
  end

end
