module ApplicationHelper

  def nav_link(link_text, controller, action)
    class_name = 'nav-item'
    if current_page?(:controller => controller, :action => action)
      class_name += ' nav-item-active'
    end

    content_tag(:li, :class => class_name) do
      link_to link_text, :controller => controller, :action => action
    end
  end

end
