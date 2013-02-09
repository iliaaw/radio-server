class AddUploadTokenToTracks < ActiveRecord::Migration
  def change
    add_column :tracks, :upload_token, :string
  end
end
