module ApplicationHelper

  def nav_link(link_text, controller, action, class_name = '')
    is_current = current_page?(url_for(:controller => '/' + controller, :action => action))
    content_tag(:li, :class => is_current ? 'active' : '') do
      link_to link_text, :controller => '/' + controller, :action => action, :page => nil
    end
  end

end
