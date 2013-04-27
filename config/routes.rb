Kigendan::Application.routes.draw do

  devise_for :users, :path => 'auth'

  root :to => 'static#home'

  resources :tracks, :only => [:index, :new, :create, :update, :destroy], :constraints => { :id => /[0-9]+/ } do
    get 'page:page', :action => :index, :on => :collection
  end

  resources :playlists, :only => [:index, :new, :create, :show, :update, :destroy], :constraints => { :id => /[0-9]+/ } do
    get 'page:page', :action => :index, :on => :collection
  end

  resources :users, :only => [:index, :update] do
    get 'page:page', :action => :index, :on => :collection
  end
  
  match '/', :to => 'static#home'
  match '/live', :to => 'static#live'
  match '/on_publish_done', :to => 'static#on_publish_done'
  match '/enable_live', :to => 'static#enable_live'
  match '/disable_live', :to => 'static#disable_live'

end
