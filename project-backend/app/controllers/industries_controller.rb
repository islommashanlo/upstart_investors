class IndustriesController < ApplicationController
    def index
        inds = Industry.all
        render json: inds
    end
end
