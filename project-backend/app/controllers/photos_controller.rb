class PhotosController < ApplicationController
    def update
        if params[:file]
          # The data is a file upload coming from <input type="file" />
          @profile.avatar.attach(params[:file])
          # Generate a url for easy display on the front end 
          photo = url_for(@profile.avatar)
        elsif params[:camera]
          # The data is Base64 and coming from the camera.  
          # Use that data to create a file for active storage.
          blob = ActiveStorage::Blob.create_after_upload!(
            io: StringIO.new((Base64.decode64(params[:camera].split(",")[1]))),
            filename: "user.png",
            content_type: "image/png",
          )
          @profile.avatar.attach(blob)
          photo = url_for(@profile.avatar)
        else
          # Maybe we want to just store a url or the raw Base64 data
          photo = photo_params[:photo]
        end
          # Now save that url in the profile
        if @profile.update(photo: photo)
          render json: @profile, status: :ok
        end
    end
end
