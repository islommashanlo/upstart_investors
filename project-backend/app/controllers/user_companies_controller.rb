class UserCompaniesController < ApplicationController

    def create
        uc = UserCompany.create(uc_params)
        render json: uc
    end

    private

    def uc_params
        params.require(:user_company).permit(:user_id, :company_id)
    end
end
