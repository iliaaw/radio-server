class AddUploadToTracks < ActiveRecord::Migration
  def change
    add_column :tracks, :upload, :string
  end
end
