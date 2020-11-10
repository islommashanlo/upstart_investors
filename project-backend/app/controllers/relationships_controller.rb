class RelationshipsController < ApplicationController
    skip_before_action :authorized, only: [:create, :index, :show, :destroy]

    def create
        if Relationship.find_by(rel_params)
            found_rel = Relationship.find_by(rel_params)
            render json: found_rel
        else
            new_rel = Relationship.create(rel_params)
            render json: new_rel
        end
    end


    def destroy
        Relationship.destroy(params[:id])
        rels = Relationship.all
        render json: rels
    end

    private 

    def rel_params
        params.require(:relationship).permit(:follower_id, :followed_id)
    end

end
