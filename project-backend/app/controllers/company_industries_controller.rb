class CompanyIndustriesController < ApplicationController

    def index
        cis = CompanyIndustry.all
        render json: cis
    end

    def create
        ci = CompanyIndustry.create(ci_params)
        render json: ci
    end

    private

    def ci_params
        params.require(:company_industry).permit(:company_id, :industry_id)
    end
end
